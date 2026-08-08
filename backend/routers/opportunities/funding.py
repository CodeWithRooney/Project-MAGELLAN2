from fastapi import (
    APIRouter,
    Depends,
    status,
)
from sqlalchemy.orm import Session

from database import get_db

from schemas import (
    FundingCreate,
    FundingResponse,
)

from services.opportunities.funding_service import (
    create_funding,
    delete_funding,
    get_all_funding,
    get_funding,
    update_funding,
)


router = APIRouter(
    prefix="/funding",
    tags=["Funding"],
)


@router.post(
    "/",
    response_model=FundingResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create funding opportunity",
)
def create(
    funding: FundingCreate,
    db: Session = Depends(get_db),
) -> FundingResponse:
    """
    Creates a new funding opportunity.
    """

    return create_funding(
        funding=funding,
        db=db,
    )


@router.get(
    "/",
    response_model=list[FundingResponse],
    status_code=status.HTTP_200_OK,
    summary="Get all funding opportunities",
)
def get_all(
    db: Session = Depends(get_db),
) -> list[FundingResponse]:
    """
    Returns all funding opportunities.
    """

    return get_all_funding(db)


@router.get(
    "/{funding_id}",
    response_model=FundingResponse,
    status_code=status.HTTP_200_OK,
    summary="Get funding opportunity",
)
def get(
    funding_id: int,
    db: Session = Depends(get_db),
) -> FundingResponse:
    """
    Returns a funding opportunity by ID.
    """

    return get_funding(
        funding_id=funding_id,
        db=db,
    )


@router.put(
    "/{funding_id}",
    response_model=FundingResponse,
    status_code=status.HTTP_200_OK,
    summary="Update funding opportunity",
)
def update(
    funding_id: int,
    funding: FundingCreate,
    db: Session = Depends(get_db),
) -> FundingResponse:
    """
    Updates an existing funding opportunity.
    """

    return update_funding(
        funding_id=funding_id,
        funding=funding,
        db=db,
    )


@router.delete(
    "/{funding_id}",
    status_code=status.HTTP_200_OK,
    summary="Delete funding opportunity",
)
def delete(
    funding_id: int,
    db: Session = Depends(get_db),
) -> dict:
    """
    Deletes a funding opportunity.
    """

    return delete_funding(
        funding_id=funding_id,
        db=db,
    )