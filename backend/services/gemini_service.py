import os

from dotenv import load_dotenv
from google import genai

# Load variables from .env
load_dotenv()

# Read API Key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Create Gemini client
client = genai.Client(api_key=GEMINI_API_KEY)


def ask_gemini(prompt: str) -> str:
    """
    Send a prompt to Gemini and return the generated text.
    """

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    return response.text