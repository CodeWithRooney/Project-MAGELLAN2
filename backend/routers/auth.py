from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from database import get_db

from utils.email_verification import (
    verify_email_verification_token,
)

from models import User

from exceptions import (
    EmailNotVerifiedError,
    InvalidPasswordError,
    UserAlreadyExistsError,
    UserNotFoundError,
)

from schemas import (
    AuthResponse,
    LoginRequest,
    RegisterResponse,
    UserRegister,
)

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
    response_model=RegisterResponse,
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
    summary="Login user",
)
def login(
    user: LoginRequest,
    db: Session = Depends(get_db),
) -> AuthResponse:
    """
    Authenticate a user.
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

    except EmailNotVerifiedError as e:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=str(e),
        )
    

@router.get(
    "/verify-email",
    summary="Verify user email",
)
def verify_email(
    token: str,
    db: Session = Depends(get_db),
) -> dict:
    try:
        user_id = verify_email_verification_token(token)

    except Exception:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired verification link.",
        )

    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    if user.email_verified:
        return {
            "message": "Email is already verified."
        }

    user.email_verified = True

    db.commit()

    return {
        "message": "Email verified successfully."
    }