from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from database import get_db
from dependencies.auth import get_current_user

from exceptions import (
    ProfileAlreadyExistsError,
    ProfileNotFoundError,
    UserNotFoundError,
)

from models import User

from schemas import (
    StudentProfileCreate,
    StudentProfileResponse,
)

from services.user_service import (
    create_profile,
    delete_profile,
    get_profile,
    update_profile,
)


router = APIRouter(
    prefix="/user",
    tags=["User Profile"],
)


@router.post(
    "/profile",
    response_model=StudentProfileResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create student profile",
)
def create_user_profile(
    profile: StudentProfileCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> StudentProfileResponse:
    """
    Creates the student profile of the logged-in user.
    """

    try:
        return create_profile(
            user_id=current_user.id,
            profile=profile,
            db=db,
        )

    except UserNotFoundError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e),
        )

    except ProfileAlreadyExistsError as e:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(e),
        )


@router.get(
    "/profile",
    response_model=StudentProfileResponse,
    status_code=status.HTTP_200_OK,
    summary="Get student profile",
)
def get_user_profile(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> StudentProfileResponse:
    """
    Returns the logged-in user's profile.
    """

    try:
        return get_profile(
            user_id=current_user.id,
            db=db,
        )

    except ProfileNotFoundError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e),
        )


@router.put(
    "/profile",
    response_model=StudentProfileResponse,
    status_code=status.HTTP_200_OK,
    summary="Update student profile",
)
def update_user_profile(
    profile: StudentProfileCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> StudentProfileResponse:
    """
    Updates the logged-in user's profile.
    """

    try:
        return update_profile(
            user_id=current_user.id,
            profile_update=profile,
            db=db,
        )

    except ProfileNotFoundError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e),
        )


@router.delete(
    "/profile",
    status_code=status.HTTP_200_OK,
    summary="Delete student profile",
)
def delete_user_profile(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> dict:
    """
    Deletes the logged-in user's profile.
    """

    try:
        return delete_profile(
            user_id=current_user.id,
            db=db,
        )

    except ProfileNotFoundError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e),
        )