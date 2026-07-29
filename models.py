from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

# Our existing User blueprint
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

    # NEW: This acts as a bridge to link the User to their Profile
    profile = relationship("StudentProfile", back_populates="owner")

# 🔥 Our NEW Blueprint for the Student Profile
class StudentProfile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    
    # This Foreign Key is the magic link that connects this profile to a specific user ID
    user_id = Column(Integer, ForeignKey("users.id"))
    
    # The profile fields required from your Project Roadmap
    class_year = Column(String)
    location = Column(String) # For City/State/Country
    preferred_language = Column(String)
    interests = Column(String)
    career_goals = Column(String)
    skills = Column(String)
    target_country = Column(String)

    # This acts as the bridge back to the User table
    owner = relationship("User", back_populates="profile")