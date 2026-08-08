__all__ = [
    "ChatGenerationError",
]


class ChatGenerationError(Exception):
    """Raised when Gemini fails to generate a response."""
    pass