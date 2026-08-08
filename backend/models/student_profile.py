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

    state = Column(
        String(100),
        nullable=False,
    )

    school_college = Column(
        String(200),
        nullable=False,
    )

    education_level = Column(
        String(100),
        nullable=False,
    )

    board_or_university = Column(
        String(150),
        nullable=False,
    )

    # ==========================
    # Academic Information
    # ==========================

    percentage = Column(
        String(20),
        nullable=False,
    )

    highest_subject = Column(
        String(100),
    )

    lowest_subject = Column(
        String(100),
    )

    favorite_subject = Column(
        String(100),
    )

    # ==========================
    # Skills
    # ==========================

    technical_skills = Column(
        Text,
    )

    soft_skills = Column(
        Text,
    )

    # ==========================
    # Interests
    # ==========================

    hobbies = Column(
        Text,
    )

    career_interests = Column(
        Text,
    )

    preferred_career_field = Column(
        String(150),
    )

    # ==========================
    # Career Goals
    # ==========================

    career_goal_decided = Column(
        String(20),
    )

    career_goal = Column(
        String(255),
    )

    preferred_study_country = Column(
        String(100),
    )

    # ==========================
    # Portfolio
    # ==========================

    github_url = Column(
        String(255),
    )

    linkedin_url = Column(
        String(255),
    )

    # ==========================
    # Relationship
    # ==========================

    owner = relationship(
        "User",
        back_populates="profile",
    )