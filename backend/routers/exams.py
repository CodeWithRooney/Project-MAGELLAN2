from fastapi import APIRouter

router = APIRouter(
    prefix="/exams",
    tags=["Exams"]
)


@router.get("/")
def get_all_exams():
    return {
        "message": "Exams endpoint is under development.",
        "exams": []
    }


@router.get("/{exam_id}")
def get_exam(exam_id: int):
    return {
        "exam_id": exam_id,
        "message": "Exam details will be available after database integration."
    }