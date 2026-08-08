from google import genai

from config import settings


client = genai.Client(
    api_key=settings.GEMINI_API_KEY,
)


def generate_response(prompt: str) -> str:
    """
    Sends the prompt to Gemini
    and returns the generated response.
    """

    try:
        response = client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=prompt,
        )

        if (
            response.text is None
            or not response.text.strip()
        ):
            raise Exception(
                "Gemini returned an empty response."
            )

        return response.text.strip()

    except Exception as e:
        raise Exception(
            f"Gemini API Error: {str(e)}"
        )