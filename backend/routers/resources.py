from fastapi import APIRouter

router = APIRouter(
    prefix="/resources",
    tags=["Resources"]
)


@router.get("/")
def get_all_resources():
    return {
        "message": "Resources endpoint is under development.",
        "resources": []
    }


@router.get("/{career}")
def get_resources_by_career(career: str):
    return {
        "career": career,
        "resources": []
    }