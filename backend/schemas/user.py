from typing import Optional

from pydantic import BaseModel, EmailStr, Field


# ==========================================
# User Registration
# ==========================================

class UserRegister(BaseModel):

    name: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )

    email: EmailStr

    password: str = Field(
        ...,
        min_length=8,
        max_length=128,
    )


# ==========================================
# Create / Update Student Profile
# ==========================================

class StudentProfileCreate(BaseModel):

    # ==========================
    # Personal Information
    # ==========================

    full_name: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )

    state: str

    school_college: str

    education_level: str

    board_or_university: str

    # ==========================
    # Academic Information
    # ==========================

    percentage: str

    highest_subject: Optional[str] = None

    lowest_subject: Optional[str] = None

    favorite_subject: Optional[str] = None

    # ==========================
    # Skills
    # ==========================

    technical_skills: Optional[str] = None

    soft_skills: Optional[str] = None

    # ==========================
    # Interests
    # ==========================

    hobbies: Optional[str] = None

    career_interests: Optional[str] = None

    preferred_career_field: Optional[str] = None

    # ==========================
    # Career Goals
    # ==========================

    career_goal_decided: str

    career_goal: Optional[str] = None

    preferred_study_country: Optional[str] = None

    # ==========================
    # Portfolio
    # ==========================

    github_url: Optional[str] = None

    linkedin_url: Optional[str] = None


# ==========================================
# Read Student Profile
# ==========================================

class StudentProfileResponse(StudentProfileCreate):

    id: int

    user_id: int

    class Config:
        from_attributes = True