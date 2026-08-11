from sqlalchemy import (
    Column,
    ForeignKey,
    Integer,
    String,
    Text,
)

from sqlalchemy.orm import relationship

from database import Base


class StudentProfile(Base):

    __tablename__ = "profiles"

    # ==========================
    # Primary Information
    # ==========================

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True,
        nullable=False,
    )

    # ==========================
    # Personal Information
    # ==========================

    full_name = Column(
        String(100),
        nullable=False,
    )

    age = Column(
        Integer,
        nullable=False,
    )

    gender = Column(
        String(50),
        nullable=False,
    )

    state = Column(
        String(100),
        nullable=False,
    )

    school_college = Column(
        String(200),
        nullable=False,
    )

    current_class_year = Column(
        String(100),
        nullable=False,
    )

    board = Column(
        String(150),
        nullable=False,
    )

    # ==========================
    # Interests
    # ==========================

    interests = Column(
        String(150),
        nullable=False,
    )

    favorite_subject = Column(
        String(100),
        nullable=False,
    )

    # ==========================
    # Skills
    # ==========================

    technical_skills = Column(
        Text,
        nullable=False,
    )

    soft_skills = Column(
        Text,
        nullable=False,
    )

    # ==========================
    # Hobbies
    # ==========================

    hobbies = Column(
        Text,
        nullable=False,
    )

    # ==========================
    # Career Goals
    # ==========================

    career_goal_decided = Column(
        String(20),
        nullable=False,
    )

    career_goal = Column(
        String(255),
        nullable=True,
    )

    higher_studies_abroad = Column(
        String(20),
        nullable=False,
    )

    # ==========================
    # Relationship
    # ==========================

    owner = relationship(
        "User",
        back_populates="profile",
    )