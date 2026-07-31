from services.gemini_service import ask_gemini
from utils.prompt_builder import build_welcome_prompt


def chat_with_ai(message: str) -> str:
    """
    Process the user's message and return Gemini's response.
    """

    response = ask_gemini(message)

    return response


def initialize_chat() -> str:
    """
    Generate the AI's welcome message.
    """

    prompt = build_welcome_prompt()

    response = ask_gemini(prompt)

    return response