from sqlalchemy.orm import Session

from models import (
    StudentProfile,
    ChatHistory,
)

from exceptions import (
    ProfileNotFoundError,
    ChatGenerationError,
)

from services.prompt_builder import build_prompt

from services.gemini_service import generate_response

from services.opportunities.opportunity_service import (
    search_opportunities,
)


def chat(
    user_id: int,
    user_message: str,
    db: Session,
):
    """
    Generates an AI response for a user's message
    and stores both user and assistant messages.
    """

    # =====================================================
    # GET STUDENT PROFILE
    # =====================================================

    profile = (
        db.query(StudentProfile)
        .filter(
            StudentProfile.user_id == user_id
        )
        .first()
    )

    if not profile:
        raise ProfileNotFoundError(
            "Profile not found."
        )

    # =====================================================
    # GET RECENT CHAT HISTORY
    # =====================================================

    history = (
        db.query(ChatHistory)
        .filter(
            ChatHistory.user_id == user_id
        )
        .order_by(
            ChatHistory.created_at.desc()
        )
        .limit(20)
        .all()
    )

    # The query above returns newest first.
    # Reverse it so Gemini receives the conversation
    # in normal chronological order.

    history.reverse()

    conversation_history = ""

    for message in history:

        role = (
            "Student"
            if message.role == "user"
            else "Magellan AI"
        )

        conversation_history += (
            f"{role}: {message.message}\n"
        )

    # =====================================================
    # SEARCH OPPORTUNITIES
    # =====================================================

    opportunities = search_opportunities(
        user_message,
        db,
    )

    # =====================================================
    # BUILD PERSONALIZED PROMPT
    # =====================================================

    prompt = build_prompt(
        profile=profile,
        user_message=user_message,
        conversation_history=conversation_history,
    )

    # =====================================================
    # ADD OPPORTUNITIES IF RELEVANT
    # =====================================================

    if opportunities:

        prompt += "\n\nRelevant Opportunities:\n"

        for opportunity in opportunities:

            prompt += (
                f"\n"
                f"Title: {opportunity.title}\n"
                f"Category: {opportunity.category}\n"
                f"Provider: {opportunity.provider}\n"
                f"Description: {opportunity.description}\n"
                f"Official Link: {opportunity.official_link}\n"
            )

    # =====================================================
    # GENERATE AI RESPONSE
    # =====================================================

    try:

        ai_response = generate_response(
            prompt
        )

    except Exception as e:

        raise ChatGenerationError(
            f"Failed to generate AI response: {str(e)}"
        )

    # =====================================================
    # SAVE USER MESSAGE
    # =====================================================

    user_history = ChatHistory(
        user_id=user_id,
        role="user",
        message=user_message,
    )

    # =====================================================
    # SAVE AI MESSAGE
    # =====================================================

    assistant_history = ChatHistory(
        user_id=user_id,
        role="assistant",
        message=ai_response,
    )

    db.add(user_history)

    db.add(assistant_history)

    db.commit()

    db.refresh(user_history)

    db.refresh(assistant_history)

    return ai_response


def get_chat_history(
    user_id: int,
    db: Session,
):
    """
    Returns complete chat history of a user.
    """

    return (
        db.query(ChatHistory)
        .filter(
            ChatHistory.user_id == user_id
        )
        .order_by(
            ChatHistory.created_at.asc()
        )
        .all()
    )


def delete_chat_history(
    user_id: int,
    db: Session,
):
    """
    Deletes the complete chat history of a user.
    """

    (
        db.query(ChatHistory)
        .filter(
            ChatHistory.user_id == user_id
        )
        .delete()
    )

    db.commit()

    return {
        "message": "Chat history deleted successfully."
    }