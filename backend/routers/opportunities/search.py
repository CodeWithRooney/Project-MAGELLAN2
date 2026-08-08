from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from database import get_db

from schemas.opportunities import OpportunitySearchResponse

from services.opportunities.opportunity_service import (
    search_opportunities,
)

router = APIRouter(
    prefix="/opportunities",
    tags=["Opportunities"],
)


@router.get(
    "/search",
    response_model=list[OpportunitySearchResponse],
    status_code=status.HTTP_200_OK,
    summary="Search opportunities",
)
def search(
    keyword: str = Query(
        ...,
        min_length=1,
        description="Keyword to search for",
    ),
    category: str | None = Query(
        default=None,
        description="Optional opportunity category",
    ),
    db: Session = Depends(get_db),
) -> list[OpportunitySearchResponse]:
    """
    Searches opportunities by keyword and optionally filters by category.
    """

    return search_opportunities(
        keyword=keyword,
        db=db,
        category=category,
    )