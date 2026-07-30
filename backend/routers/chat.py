from fastapi import APIRouter

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)


@router.post("/")
def chat():
    return {
        "message": "AI chat endpoint is under development."
    }