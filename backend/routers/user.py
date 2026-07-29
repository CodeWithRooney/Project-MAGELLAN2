from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from schemas.user import UserRegister
from schemas.auth import LoginRequest
from utils.password import hash_password, verify_password
from utils.jwt import create_access_token, verify_access_token

router = APIRouter(
    prefix="/user",
    tags=["User"]
)

security = HTTPBearer()

# Temporary fake user (will be replaced with PostgreSQL later)
FAKE_USER = {
    "name": "Test User",
    "email": "test@example.com",
    "hashed_password": hash_password("password123")
}


@router.post("/register")
def register(user: UserRegister):
    if user.email == FAKE_USER["email"]:
        raise HTTPException(status_code=400, detail="Email already registered")

    return {
        "message": "User registered successfully",
        "user": {
            "name": user.name,
            "email": user.email
        }
    }


@router.post("/login")
def login(request: LoginRequest):

    if request.email != FAKE_USER["email"]:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    if not verify_password(request.password, FAKE_USER["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    access_token = create_access_token(
        data={"sub": request.email}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


@router.get("/profile")
def profile(credentials: HTTPAuthorizationCredentials = Depends(security)):

    token = credentials.credentials

    payload = verify_access_token(token)

    if payload is None:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    return {
        "message": "Protected Profile",
        "email": payload.get("sub")
    }