from pydantic import BaseModel

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
    class_year: str
    location: str
    preferred_language: str
    interests: str
    career_goals: str
    skills: str
    target_country: str

    
