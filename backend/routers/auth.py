from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from database import get_db

from exceptions import (
    InvalidPasswordError,
    UserAlreadyExistsError,
    UserNotFoundError,
)

from schemas.auth import (
    AuthResponse,
    LoginRequest,
)

from schemas.user import UserRegister

from services.auth_service import (
    login_user,
    register_user,
)


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
    response_model=AuthResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Register a new user",
)
def register(
    user: UserRegister,
    db: Session = Depends(get_db),
) -> AuthResponse:
    """
    Registers a new user account
    and returns a JWT access token.
    """

    try:
        return register_user(
            user=user,
            db=db,
        )

    except UserAlreadyExistsError as e:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(e),
        )


@router.post(
    "/login",
    response_model=AuthResponse,
    status_code=status.HTTP_200_OK,
    summary="Authenticate a user",
)
def login(
    user: LoginRequest,
    db: Session = Depends(get_db),
) -> AuthResponse:
    """
    Authenticates a user and
    returns a JWT access token.
    """

    try:
        return login_user(
            user=user,
            db=db,
        )

    except UserNotFoundError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e),
        )

    except InvalidPasswordError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e),
        )