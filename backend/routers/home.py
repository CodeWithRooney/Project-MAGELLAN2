from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def home():
    return {
        "message": "Welcome to Athena Backend!"
    }


@router.get("/about")
def about():
    return {
        "project": "Athena",
        "version": "1.0",
        "purpose": "Helping students find the right career path."
    }