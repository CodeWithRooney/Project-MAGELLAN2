from fastapi import APIRouter

router = APIRouter(
    prefix="/competitions",
    tags=["Competitions"]
)


@router.get("/")
def get_all_competitions():
    return {
        "message": "Competitions endpoint is under development.",
        "competitions": []
    }


@router.get("/{competition_id}")
def get_competition(competition_id: int):
    return {
        "competition_id": competition_id,
        "message": "Competition details will be available after database integration."
    }