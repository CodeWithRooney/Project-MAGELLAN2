from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, JSON
# ==========================================
# 🔐 USER LOGIN/SIGNUP BLUEPRINT
# ==========================================
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

    # This links the user to their profile
    profile = relationship("StudentProfile", back_populates="owner")


# ==========================================
# 🎓 NEW FRONTEND STUDENT PROFILE BLUEPRINT
# ==========================================
class StudentProfile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    
    # 1. Personal Profile
    name = Column(String) 
    state = Column(String) # Dropdown
    school_uni = Column(String)
    class_year = Column(String) # Dropdown

    # 2. Education
    percentage = Column(String) 
    highest_subject = Column(String)
    lowest_subject = Column(String)
    favorite_subject = Column(String)
    board_of_studying = Column(String) # Dropdown

    # 3. Skills and Knowledge
    technical_skills = Column(String) # Dropdown
    soft_skills = Column(String) # Dropdown
    hobbies = Column(String) # Dropdown

    career_goal_decided = Column(String)

    # This links the profile back to the user
    owner = relationship("User", back_populates="profile")


# ==========================================
# 🌟 OPPORTUNITIES BLUEPRINT
# ==========================================
class Opportunity(Base):
    __tablename__ = "opportunities"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    purpose = Column(String)
    includes = Column(JSON) # Perfect for storing lists of bullet points!
    benefit = Column(String, nullable=True) # Nullable because not all have a specific "benefit" line  