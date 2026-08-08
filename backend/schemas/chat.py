from typing import List, Literal

from pydantic import BaseModel, Field


# ==========================================
# Individual Chat Message
# ==========================================

class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    message: str


# ==========================================
# Chat Request
# ==========================================

class ChatRequest(BaseModel):
    message: str = Field(
        ...,
        min_length=1,
        max_length=5000,
    )


# ==========================================
# Chat Response
# ==========================================

class ChatResponse(BaseModel):
    response: str


# ==========================================
# Chat History
# ==========================================

class ChatHistoryResponse(BaseModel):
    user_id: int
    messages: List[ChatMessage]