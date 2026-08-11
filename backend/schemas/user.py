from typing import Optional

from pydantic import BaseModel, Field


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

    age: int = Field(
        ...,
        ge=10,
        le=100,
    )

    gender: str

    state: str

    school_college: str

    current_class_year: str

    board: str

    # ==========================
    # Interests
    # ==========================

    interests: str

    favorite_subject: str

    # ==========================
    # Skills
    # ==========================

    technical_skills: str

    soft_skills: str

    # ==========================
    # Hobbies
    # ==========================

    hobbies: str

    # ==========================
    # Career Goals
    # ==========================

    career_goal_decided: str

    career_goal: Optional[str] = None

    higher_studies_abroad: str


# ==========================================
# Read Student Profile
# ==========================================

class StudentProfileResponse(StudentProfileCreate):

    id: int

    user_id: int

    class Config:
        from_attributes = True