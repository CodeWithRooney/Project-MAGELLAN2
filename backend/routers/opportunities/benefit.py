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
    BenefitCreate,
    BenefitResponse,
)

from services.opportunities.benefit_service import (
    create_benefit,
    delete_benefit,
    get_all_benefits,
    get_benefit,
    update_benefit,
)


router = APIRouter(
    prefix="/benefits",
    tags=["Benefits"],
)


@router.post(
    "/",
    response_model=BenefitResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create benefit",
)
def create(
    benefit: BenefitCreate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin),
) -> BenefitResponse:
    """
    Creates a new student benefit.
    """

    return create_benefit(
        benefit=benefit,
        db=db,
    )


@router.get(
    "/",
    response_model=list[BenefitResponse],
    status_code=status.HTTP_200_OK,
    summary="Get all benefits",
)
def get_all(
    db: Session = Depends(get_db),
) -> list[BenefitResponse]:
    """
    Returns all student benefits.
    """

    return get_all_benefits(db)


@router.get(
    "/{benefit_id}",
    response_model=BenefitResponse,
    status_code=status.HTTP_200_OK,
    summary="Get benefit",
)
def get(
    benefit_id: int,
    db: Session = Depends(get_db),
) -> BenefitResponse:
    """
    Returns a student benefit by ID.
    """

    return get_benefit(
        benefit_id=benefit_id,
        db=db,
    )


@router.put(
    "/{benefit_id}",
    response_model=BenefitResponse,
    status_code=status.HTTP_200_OK,
    summary="Update benefit",
)
def update(
    benefit_id: int,
    benefit: BenefitCreate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin),
) -> BenefitResponse:
    """
    Updates an existing student benefit.
    """

    return update_benefit(
        benefit_id=benefit_id,
        benefit=benefit,
        db=db,
    )


@router.delete(
    "/{benefit_id}",
    status_code=status.HTTP_200_OK,
    summary="Delete benefit",
)
def delete(
    benefit_id: int,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin),
) -> dict:
    """
    Deletes a student benefit.
    """

    return delete_benefit(
        benefit_id=benefit_id,
        db=db,
    )