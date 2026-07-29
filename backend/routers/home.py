from fastapi import APIRouter
from utils.jwt import create_access_token

router = APIRouter(tags=["Home"])


@router.get("/")
def home():
    return {
        "message": "Welcome to Project Magellan Backend!"
    }


@router.get("/about")
def about():
    return {
        "project": "Project Magellan",
        "description": "An AI-powered career guidance platform that helps students discover suitable career paths based on their interests, skills, and goals."
    }


@router.get("/test-token")
def test_token():
    token = create_access_token(
        data={"sub": "test@example.com"}
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }