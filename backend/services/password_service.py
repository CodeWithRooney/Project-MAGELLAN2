from sqlalchemy.orm import Session

from exceptions import UserNotFoundError
from models import User
from utils.password import hash_password


def change_password(
    user_id: int,
    new_password: str,
    db: Session,
):

    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if not user:
        raise UserNotFoundError(
            "User not found."
        )

    user.hashed_password = hash_password(
        new_password
    )

    db.commit()
    db.refresh(user)

    return {
        "message": "Password changed successfully."
    }


def forgot_password(
    email: str,
    db: Session,
):

    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if not user:
        raise UserNotFoundError(
            "User not found."
        )

    # TODO:
    # Generate reset token
    # Save token
    # Send reset email

    return {
        "message": (
            "Password reset functionality "
            "will be implemented."
        )
    }


def reset_password(
    token: str,
    new_password: str,
    db: Session,
):

    # TODO:
    # Validate token
    # Find user
    # Hash password
    # Update database

    return {
        "message": (
            "Reset password functionality "
            "will be implemented."
        )
    }