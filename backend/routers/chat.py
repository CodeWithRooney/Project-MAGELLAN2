from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from database import get_db
from dependencies.auth import get_current_user

from exceptions import (
    ChatGenerationError,
    ProfileNotFoundError,
)

from models import User

from schemas import (
    ChatHistoryResponse,
    ChatMessage,
    ChatRequest,
    ChatResponse,
)

from services.chat_service import (
    chat,
    delete_chat_history,
    get_chat_history,
)


router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


@router.post(
    "/",
    response_model=ChatResponse,
    status_code=status.HTTP_200_OK,
    summary="Chat with Magellan AI",
)
def chat_with_ai(
    request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> ChatResponse:
    """
    Sends a message to Magellan AI and
    returns the generated response.
    """

    try:
        ai_response = chat(
            user_id=current_user.id,
            user_message=request.message,
            db=db,
        )

        return ChatResponse(
            response=ai_response,
        )

    except ProfileNotFoundError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e),
        )

    except ChatGenerationError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e),
        )


@router.get(
    "/history",
    response_model=ChatHistoryResponse,
    status_code=status.HTTP_200_OK,
    summary="Get chat history",
)
def get_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> ChatHistoryResponse:
    """
    Returns the complete chat history
    of the logged-in user.
    """

    history = get_chat_history(
        user_id=current_user.id,
        db=db,
    )

    return ChatHistoryResponse(
        user_id=current_user.id,
        messages=[
            ChatMessage(
                role=message.role,
                message=message.message,
            )
            for message in history
        ],
    )


@router.delete(
    "/history",
    status_code=status.HTTP_200_OK,
    summary="Delete chat history",
)
def clear_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> dict:
    """
    Deletes the complete chat history
    of the logged-in user.
    """

    return delete_chat_history(
        user_id=current_user.id,
        db=db,
    )