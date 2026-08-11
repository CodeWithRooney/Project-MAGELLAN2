from google import genai
import time

from config import settings


client = genai.Client(
    api_key=settings.GEMINI_API_KEY,
)


def generate_response(prompt: str) -> str:
    """
    Sends the prompt to Gemini and returns the generated response.

    Automatically retries temporary Gemini API failures such as
    HTTP 503 Service Unavailable.
    """

    max_retries = 3

    for attempt in range(max_retries):

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

            error_message = str(e)

            # ----------------------------------------
            # Temporary Gemini availability error
            # ----------------------------------------

            if "503" in error_message or "UNAVAILABLE" in error_message:

                # If this was the final attempt,
                # return a clean error message.
                if attempt == max_retries - 1:
                    raise Exception(
                        "Magellan AI is temporarily busy. "
                        "Please try sending your message again in a moment."
                    )

                # Wait before retrying.
                # 1st retry 1 second
                # 2nd retry 2 seconds
                wait_time = 2 ** attempt

                time.sleep(wait_time)

                continue

            # ----------------------------------------
            # Other Gemini API errors
            # ----------------------------------------

            raise Exception(
                f"Gemini API Error: {error_message}"
            )

    raise Exception(
        "Magellan AI could not generate a response. "
        "Please try again later."
    )