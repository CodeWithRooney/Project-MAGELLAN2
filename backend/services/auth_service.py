from sqlalchemy.orm import Session

from exceptions import (
    InvalidPasswordError,
    UserAlreadyExistsError,
    UserNotFoundError,
)

from models import User

from schemas import (
    AuthResponse,
    LoginRequest,
    UserRegister,
)

from utils.jwt import create_access_token
from utils.password import (
    hash_password,
    verify_password,
)


def register_user(
    user: UserRegister,
    db: Session,
) -> AuthResponse:
    """
    Register a new user and return an access token.
    """

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing_user:
        raise UserAlreadyExistsError(
            "Email already registered."
        )

    new_user = User(
        name=user.name,
        email=user.email,
        hashed_password=hash_password(user.password),
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    access_token = create_access_token(
        {
            "sub": str(new_user.id),
            "email": new_user.email,
        }
    )

    return AuthResponse(
        access_token=access_token,
        token_type="bearer",
        user_id=new_user.id,
        email=new_user.email,
    )


def login_user(
    user: LoginRequest,
    db: Session,
) -> AuthResponse:
    """
    Authenticate a user and return an access token.
    """

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if not existing_user:
        raise UserNotFoundError(
            "User not found."
        )

    if not verify_password(
        user.password,
        existing_user.hashed_password,
    ):
        raise InvalidPasswordError(
            "Incorrect password."
        )

    access_token = create_access_token(
        {
            "sub": str(existing_user.id),
            "email": existing_user.email,
        }
    )

    return AuthResponse(
        access_token=access_token,
        token_type="bearer",
        user_id=existing_user.id,
        email=existing_user.email,
    )