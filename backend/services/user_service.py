from sqlalchemy.orm import Session

from exceptions import (
    ProfileAlreadyExistsError,
    ProfileNotFoundError,
    UserNotFoundError,
)

from models import (
    StudentProfile,
    User,
)

from schemas import StudentProfileCreate


def create_profile(
    user_id: int,
    profile: StudentProfileCreate,
    db: Session,
):
    """
    Create a student profile for a user.
    """

    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if not user:
        raise UserNotFoundError(
            "User not found."
        )

    existing_profile = (
        db.query(StudentProfile)
        .filter(
            StudentProfile.user_id == user_id
        )
        .first()
    )

    if existing_profile:
        raise ProfileAlreadyExistsError(
            "Profile already exists."
        )

    new_profile = StudentProfile(
        user_id=user_id,
        **profile.model_dump(),
    )

    db.add(new_profile)
    db.commit()
    db.refresh(new_profile)

    return new_profile


def get_profile(
    user_id: int,
    db: Session,
):
    """
    Get the student profile belonging to a user.
    """

    profile = (
        db.query(StudentProfile)
        .filter(
            StudentProfile.user_id == user_id
        )
        .first()
    )

    if not profile:
        raise ProfileNotFoundError(
            "Profile not found."
        )

    return profile


def update_profile(
    user_id: int,
    profile_update: StudentProfileCreate,
    db: Session,
):
    """
    Update the student profile belonging to a user.
    """

    profile = (
        db.query(StudentProfile)
        .filter(
            StudentProfile.user_id == user_id
        )
        .first()
    )

    if not profile:
        raise ProfileNotFoundError(
            "Profile not found."
        )

    update_data = profile_update.model_dump()

    for field, value in update_data.items():
        setattr(
            profile,
            field,
            value,
        )

    db.commit()
    db.refresh(profile)

    return profile


def delete_profile(
    user_id: int,
    db: Session,
):
    """
    Delete the student profile belonging to a user.
    """

    profile = (
        db.query(StudentProfile)
        .filter(
            StudentProfile.user_id == user_id
        )
        .first()
    )

    if not profile:
        raise ProfileNotFoundError(
            "Profile not found."
        )

    db.delete(profile)
    db.commit()

    return {
        "message": "Profile deleted successfully."
    }