from fastapi import (
    APIRouter,
    Depends,
    status,
)
from sqlalchemy.orm import Session

from database import get_db
from dependencies.auth import get_current_admin
from models import User

from schemas.opportunities import (
    ExamCreate,
    ExamResponse,
)

from services.opportunities.exam_service import (
    create_exam,
    delete_exam,
    get_all_exams,
    get_exam,
    update_exam,
)


router = APIRouter(
    prefix="/exams",
    tags=["Exams"],
)


@router.post(
    "/",
    response_model=ExamResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create exam",
)
def create(
    exam: ExamCreate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin),
) -> ExamResponse:
    """
    Creates a new exam opportunity.
    """

    return create_exam(
        exam=exam,
        db=db,
    )


@router.get(
    "/",
    response_model=list[ExamResponse],
    status_code=status.HTTP_200_OK,
    summary="Get all exams",
)
def get_all(
    db: Session = Depends(get_db),
) -> list[ExamResponse]:
    """
    Returns all exam opportunities.
    """

    return get_all_exams(db)


@router.get(
    "/{exam_id}",
    response_model=ExamResponse,
    status_code=status.HTTP_200_OK,
    summary="Get exam",
)
def get(
    exam_id: int,
    db: Session = Depends(get_db),
) -> ExamResponse:
    """
    Returns an exam by ID.
    """

    return get_exam(
        exam_id=exam_id,
        db=db,
    )


@router.put(
    "/{exam_id}",
    response_model=ExamResponse,
    status_code=status.HTTP_200_OK,
    summary="Update exam",
)
def update(
    exam_id: int,
    exam: ExamCreate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin),
) -> ExamResponse:
    """
    Updates an existing exam.
    """

    return update_exam(
        exam_id=exam_id,
        exam=exam,
        db=db,
    )


@router.delete(
    "/{exam_id}",
    status_code=status.HTTP_200_OK,
    summary="Delete exam",
)
def delete(
    exam_id: int,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin),
) -> dict:
    """
    Deletes an exam.
    """

    return delete_exam(
        exam_id=exam_id,
        db=db,
    )