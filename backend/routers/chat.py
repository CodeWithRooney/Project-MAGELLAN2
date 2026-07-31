from fastapi import APIRouter

from schemas.chat import ChatRequest, ChatResponse
from services.chat_service import chat_with_ai

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    response = chat_with_ai(request.message)

    return ChatResponse(response=response)