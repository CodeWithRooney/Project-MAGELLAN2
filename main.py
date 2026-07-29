from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine, SessionLocal
import models
import schemas
import bcrypt

# Tell the database to create all the tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# --- MODERN BCRYPT SECURITY SETUP ---
# Function 1: Scrambles the password using bcrypt directly
def get_password_hash(password: str) -> str:
    # Convert string to bytes, hash it, then decode back to string to store
    pwd_bytes = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(pwd_bytes, salt)
    return hashed.decode('utf-8')

# Function 2: Verifies a plain password against the hashed string
def verify_password(plain_password: str, hashed_password: str) -> bool:
    plain_bytes = plain_password.encode('utf-8')
    hashed_bytes = hashed_password.encode('utf-8')
    return bcrypt.checkpw(plain_bytes, hashed_bytes)
# ------------------------------------

# Safe door to our database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to Project Athena Backend! 🚀"}

# 🔥 Secure Sign-Up Route
@app.post("/signup")
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
        
    # Scramble the password BEFORE saving it!
    hashed_pw = get_password_hash(user.password)
    
    new_user = models.User(name=user.name, email=user.email, hashed_password=hashed_pw)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return {"message": "Student signed up successfully!", "student_name": new_user.name}

# 🔥 Secure Login Route
@app.post("/login")
def login_user(user: schemas.UserLogin, db: Session = Depends(get_db)):
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()
    
    if not existing_user or not verify_password(user.password, existing_user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
        
    return {"message": "Login successful!", "student_name": existing_user.name}

# 🔥 New Student Profile Route
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
        
    # 3. Create the profile and link it using the user_id
    new_profile = models.StudentProfile(
        user_id=user_id,
        class_year=profile.class_year,
        location=profile.location,
        preferred_language=profile.preferred_language,
        interests=profile.interests,
        career_goals=profile.career_goals,
        skills=profile.skills,
        target_country=profile.target_country
    )
    
    # 4. Save to database
    db.add(new_profile)
    db.commit()
    db.refresh(new_profile)
    
    return {"message": "Profile created successfully!", "student_name": existing_user.name}

# 🔥 New Route to Read a Student's Profile
@app.get("/profile/{user_id}")
def get_profile(user_id: int, db: Session = Depends(get_db)):
    
    # 1. Ask the database to find the profile with this exact user_id
    profile = db.query(models.StudentProfile).filter(models.StudentProfile.user_id == user_id).first()
    
    # 2. If the database comes back empty, tell the frontend the profile doesn't exist
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
        
    # 3. If it is found, hand the profile data over to the frontend!
    return profile



# 🔥 New Route to Update an Existing Profile
@app.put("/profile/{user_id}")
def update_profile(user_id: int, profile_update: schemas.ProfileCreate, db: Session = Depends(get_db)):
    
    # 1. Ask the database to find the existing profile
    existing_profile = db.query(models.StudentProfile).filter(models.StudentProfile.user_id == user_id).first()
    
    # 2. If they don't have a profile yet, tell them they need to create one first
    if not existing_profile:
        raise HTTPException(status_code=404, detail="Profile not found. Please create one first.")
        
    # 3. If the profile exists, update all the fields with the new data
    existing_profile.class_year = profile_update.class_year
    existing_profile.location = profile_update.location
    existing_profile.preferred_language = profile_update.preferred_language
    existing_profile.interests = profile_update.interests
    existing_profile.career_goals = profile_update.career_goals
    existing_profile.skills = profile_update.skills
    existing_profile.target_country = profile_update.target_country
    
    # 4. Save (commit) the new changes to the database
    db.commit()
    db.refresh(existing_profile)
    
    return {"message": "Profile updated successfully!"}