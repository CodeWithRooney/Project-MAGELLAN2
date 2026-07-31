from pydantic import BaseModel
from typing import List, Optional

# This acts like a signup form. It tells FastAPI exactly what info to expect from the user.
class UserCreate(BaseModel):
    name: str
    email: str
    password: str

    # This acts like a login form. We only need the email and password here.
class UserLogin(BaseModel):
    email: str
    password: str

    # 🔥 Our NEW Form for the Student Profile
class ProfileCreate(BaseModel):
    # 1. Personal Profile
    name: str
    state: str
    school_uni: str
    class_year: str

    # 2. Education
    percentage: str
    highest_subject: str
    lowest_subject: str
    favorite_subject: str
    board_of_studying: str

    # 3. Skills and Knowledge
    technical_skills: str
    soft_skills: str
    hobbies: str
    career_goal_decided: str

class OpportunityCreate(BaseModel):
    title: str
    purpose: str
    includes: List[str]
    benefit: Optional[str] = None
    
