from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
import bcrypt

# Import your local files
import models
import schemas
from database import engine, get_db

# This tells SQLAlchemy to create all tables in the database if they don't exist
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

# Enable CORS so your React frontend can communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (perfect for development)
    allow_credentials=True,
    allow_methods=["*"],  # Allows GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],  # Allows all headers
)

# ==========================================
# 🔐 USER AUTHENTICATION ROUTES
# ==========================================

@app.post("/signup")
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    # Check if the user already exists
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
        
    # Hash the password for security
    hashed_password = bcrypt.hashpw(user.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    # Create and save the new user
    new_user = models.User(name=user.name, email=user.email, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return {"message": "User created successfully", "user_id": new_user.id}

@app.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    # Find the user by email
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()
    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found")
        
    # Verify the password
    if not bcrypt.checkpw(user.password.encode('utf-8'), existing_user.hashed_password.encode('utf-8')):
        raise HTTPException(status_code=400, detail="Incorrect password")
        
    return {"message": "Login successful", "user_id": existing_user.id}


# ==========================================
# 🎓 STUDENT PROFILE ROUTES
# ==========================================

# 🔥 POST: Create a new profile
@app.post("/profile/{user_id}")
def create_profile(user_id: int, profile: schemas.ProfileCreate, db: Session = Depends(get_db)):
    # 1. Verify the user actually exists in the database first
    existing_user = db.query(models.User).filter(models.User.id == user_id).first()
    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found")
        
    # 2. Check if this user already has a profile so we don't make duplicates
    existing_profile = db.query(models.StudentProfile).filter(models.StudentProfile.user_id == user_id).first()
    if existing_profile:
        raise HTTPException(status_code=400, detail="Profile already exists for this user")
        
    # 3. Create the profile mapping to the new frontend fields
    new_profile = models.StudentProfile(
        user_id=user_id,
        name=profile.name,
        state=profile.state,
        school_uni=profile.school_uni,
        class_year=profile.class_year,
        percentage=profile.percentage,
        highest_subject=profile.highest_subject,
        lowest_subject=profile.lowest_subject,
        favorite_subject=profile.favorite_subject,
        board_of_studying=profile.board_of_studying,
        technical_skills=profile.technical_skills,
        soft_skills=profile.soft_skills,
        hobbies=profile.hobbies,
        career_goal_decided=profile.career_goal_decided
    )
    
    # 4. Save to database
    db.add(new_profile)
    db.commit()
    db.refresh(new_profile)
    
    return {"message": "Profile created successfully!", "student_name": existing_user.name}


# 🔥 GET: Read a student's profile
@app.get("/profile/{user_id}")
def get_profile(user_id: int, db: Session = Depends(get_db)):
    # 1. Ask the database to find the profile with this exact user_id
    profile = db.query(models.StudentProfile).filter(models.StudentProfile.user_id == user_id).first()
    
    # 2. If the database comes back empty, tell the frontend the profile doesn't exist
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
        
    # 3. If it is found, hand the profile data over to the frontend
    return profile


# 🔥 PUT: Update an existing profile
@app.put("/profile/{user_id}")
def update_profile(user_id: int, profile_update: schemas.ProfileCreate, db: Session = Depends(get_db)):
    # 1. Ask the database to find the existing profile
    existing_profile = db.query(models.StudentProfile).filter(models.StudentProfile.user_id == user_id).first()
    
    # 2. If they don't have a profile yet, tell them they need to create one first
    if not existing_profile:
        raise HTTPException(status_code=404, detail="Profile not found. Please create one first.")
        
    # 3. If the profile exists, update all the new frontend fields
    existing_profile.name = profile_update.name
    existing_profile.state = profile_update.state
    existing_profile.school_uni = profile_update.school_uni
    existing_profile.class_year = profile_update.class_year
    existing_profile.percentage = profile_update.percentage
    existing_profile.highest_subject = profile_update.highest_subject
    existing_profile.lowest_subject = profile_update.lowest_subject
    existing_profile.favorite_subject = profile_update.favorite_subject
    existing_profile.board_of_studying = profile_update.board_of_studying
    existing_profile.technical_skills = profile_update.technical_skills
    existing_profile.soft_skills = profile_update.soft_skills
    existing_profile.hobbies = profile_update.hobbies
    
    # 4. Save (commit) the new changes to the database
    db.commit()
    db.refresh(existing_profile)
    
    return {"message": "Profile updated successfully!"}


# ==========================================
# 🌟 OPPORTUNITIES ROUTES
# ==========================================

# 🔥 POST: For you to easily add new opportunities to the database
@app.post("/opportunities")
def create_opportunity(opp: schemas.OpportunityCreate, db: Session = Depends(get_db)):
    new_opp = models.Opportunity(
        title=opp.title,
        purpose=opp.purpose,
        includes=opp.includes,
        benefit=opp.benefit
    )
    db.add(new_opp)
    db.commit()
    return {"message": f"Successfully added '{opp.title}' to the database!"}


# 🔥 GET: For the frontend to fetch the data (Protected)
@app.get("/opportunities/{user_id}")
def get_opportunities(user_id: int, db: Session = Depends(get_db)):
    # 1. Security Check
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=403, detail="Access Denied: Please sign up to view exclusive opportunities.")
        
    # 2. Fetch all opportunities directly from the PostgreSQL database!
    opportunities_data = db.query(models.Opportunity).all()
    
    return opportunities_data