from sqlalchemy.orm import Session

from models import Opportunity
from schemas.opportunities import FundingCreate

from .opportunity_service import (
    create_opportunity,
    delete_opportunity,
    get_all_opportunities,
    get_opportunity,
    search_opportunities,
    update_opportunity,
)


CATEGORY = "Funding"


def create_funding(
    funding: FundingCreate,
    db: Session,
) -> Opportunity:

    data = funding.model_dump()

    if data.get("official_link") is not None:
        data["official_link"] = str(data["official_link"])

    data["category"] = CATEGORY

    return create_opportunity(
        data,
        db,
    )


def get_all_funding(
    db: Session,
) -> list[Opportunity]:

    return get_all_opportunities(
        CATEGORY,
        db,
    )


def get_funding(
    funding_id: int,
    db: Session,
) -> Opportunity:

    return get_opportunity(
        funding_id,
        db,
    )


def update_funding(
    funding_id: int,
    funding: FundingCreate,
    db: Session,
):
    data = funding.model_dump()

    if data.get("official_link") is not None:
        data["official_link"] = str(data["official_link"])

    return update_opportunity(
        funding_id,
        data,
        db,
    )


def delete_funding(
    funding_id: int,
    db: Session,
) -> dict:

    return delete_opportunity(
        funding_id,
        db,
    )


def search_funding(
    keyword: str,
    db: Session,
) -> list[Opportunity]:

    return search_opportunities(
        keyword=keyword,
        category=CATEGORY,
        db=db,
    )