from fastapi import APIRouter

router = APIRouter(
    prefix="/scholarships",
    tags=["Scholarships"]
)


@router.get("/")
def get_all_scholarships():
    return {
        "message": "Scholarships endpoint is under development.",
        "scholarships": []
    }


@router.get("/{scholarship_id}")
def get_scholarship(scholarship_id: int):
    return {
        "scholarship_id": scholarship_id,
        "message": "Scholarship details will be available after database integration."
    }