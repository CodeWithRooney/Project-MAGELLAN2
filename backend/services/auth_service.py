from sqlalchemy.orm import Session

from exceptions import (
    EmailNotVerifiedError,
    InvalidPasswordError,
    UserAlreadyExistsError,
    UserNotFoundError,
)

from models import User

from schemas import (
    AuthResponse,
    LoginRequest,
    RegisterResponse,
    UserRegister,
)

from utils.email_verification import (
    create_email_verification_token,
)

from utils.jwt import create_access_token

from utils.password import (
    hash_password,
    verify_password,
)

from services.email_service import send_verification_email


def register_user(
    user: UserRegister,
    db: Session,
) -> RegisterResponse:
    """
    Register a new user.

    The account is created as unverified and a
    verification email is sent to the user's email.

    No access token is issued during registration.
    """

    # Normalize email
    normalized_email = str(user.email).strip().lower()

    # Check whether email is already registered
    existing_user = (
        db.query(User)
        .filter(User.email == normalized_email)
        .first()
    )

    if existing_user:
        raise UserAlreadyExistsError(
            "An account with this email already exists."
        )

    # Create new user
    new_user = User(
        email=normalized_email,
        hashed_password=hash_password(user.password),
        email_verified=False,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    # Create email verification token
    verification_token = create_email_verification_token(
        new_user.id
    )

    # Send verification email
    send_verification_email(
        recipient_email=new_user.email,
        verification_token=verification_token,
    )

    # Do NOT create an access token here.
    # The user must verify their email before logging in.

    return RegisterResponse(
        message=(
            "Account created successfully. "
            "Please check your email to verify your account."
        ),
        user_id=new_user.id,
        email=new_user.email,
    )


def login_user(
    user: LoginRequest,
    db: Session,
) -> AuthResponse:
    """
    Authenticate a user and return an access token.

    The user's email must be verified before
    an access token is issued.

    The response also tells the frontend whether
    the user has already completed their profile.
    """

    # Normalize email
    normalized_email = str(user.email).strip().lower()

    # Find user
    existing_user = (
        db.query(User)
        .filter(User.email == normalized_email)
        .first()
    )

    if not existing_user:
        raise UserNotFoundError(
            "User not found."
        )

    # Verify password
    if not verify_password(
        user.password,
        existing_user.hashed_password,
    ):
        raise InvalidPasswordError(
            "Incorrect password."
        )

    # Check email verification
    if not existing_user.email_verified:
        raise EmailNotVerifiedError(
            "Please verify your email before logging in."
        )

    # Check whether the user has completed
    # their student profile.
    profile_completed = (
        existing_user.profile is not None
    )

    # Create access token
    access_token = create_access_token(
        {
            "sub": str(existing_user.id),
            "email": existing_user.email,
        }
    )

    # Return authentication information
    # together with profile completion status.
    return AuthResponse(
        access_token=access_token,
        token_type="bearer",
        user_id=existing_user.id,
        email=existing_user.email,
        profile_completed=profile_completed,
    )