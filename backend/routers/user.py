from fastapi import APIRouter

from schemas.user import UserRegister, UserLogin
from services.user_service import create_user, login_user

router = APIRouter()


@router.post("/register")
def register(user: UserRegister):
    result = create_user(user)
    return result

@router.post("/login")
def login(user: UserLogin):
    result = login_user(user)
    return result