from fastapi import APIRouter

router = APIRouter(
    prefix="/benefits",
    tags=["Student Benefits"]
)


@router.get("/")
def get_all_benefits():
    return {
        "message": "Student benefits endpoint is under development.",
        "benefits": []
    }


@router.get("/{benefit_id}")
def get_benefit(benefit_id: int):
    return {
        "benefit_id": benefit_id,
        "message": "Benefit details will be available after database integration."
    }