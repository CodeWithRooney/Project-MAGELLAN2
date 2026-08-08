from sqlalchemy.orm import Session

from models import Opportunity
from schemas.opportunities import ExamCreate

from .opportunity_service import (
    create_opportunity,
    delete_opportunity,
    get_all_opportunities,
    get_opportunity,
    update_opportunity,
)


CATEGORY = "Exam"


def create_exam(
    exam: ExamCreate,
    db: Session,
) -> Opportunity:

    data = exam.model_dump()
    data["category"] = CATEGORY

    return create_opportunity(
        data,
        db,
    )


def get_all_exams(
    db: Session,
) -> list[Opportunity]:

    return get_all_opportunities(
        CATEGORY,
        db,
    )


def get_exam(
    exam_id: int,
    db: Session,
) -> Opportunity:

    return get_opportunity(
        exam_id,
        db,
    )


def update_exam(
    exam_id: int,
    exam: ExamCreate,
    db: Session,
) -> Opportunity:

    data = exam.model_dump()
    data["category"] = CATEGORY

    return update_opportunity(
        exam_id,
        data,
        db,
    )


def delete_exam(
    exam_id: int,
    db: Session,
) -> dict:

    return delete_opportunity(
        exam_id,
        db,
    )