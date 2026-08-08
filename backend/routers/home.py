from fastapi import APIRouter

router = APIRouter(
    tags=["Home"],
)


@router.get(
    "/",
    summary="Welcome endpoint",
)
def home() -> dict:
    """
    Returns basic information about
    the Project Magellan API.
    """

    return {
        "application": "Project Magellan",
        "message": "Welcome to the Magellan API.",
        "status": "Running",
        "version": "1.0.0",
    }


@router.get(
    "/health",
    summary="Health check",
)
def health() -> dict:
    """
    Returns the current health status
    of the API.
    """

    return {
        "status": "healthy",
    }


@router.get(
    "/about",
    summary="About Project Magellan",
)
def about() -> dict:
    """
    Returns information about
    Project Magellan.
    """

    return {
        "project": "Magellan",
        "description": (
            "AI-powered career guidance platform "
            "for students."
        ),
        "features": [
            "Career Guidance",
            "Scholarships",
            "Competitions",
            "Student Benefits",
            "Learning Resources",
            "Exams",
            "AI Chat Assistant",
        ],
    }