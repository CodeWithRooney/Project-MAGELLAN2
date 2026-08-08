from sqlalchemy.orm import Session

from models import Opportunity
from schemas.opportunities import CompetitionCreate

from .opportunity_service import (
    create_opportunity,
    delete_opportunity,
    get_all_opportunities,
    get_opportunity,
    update_opportunity,
)

CATEGORY = "Competition"


def create_competition(
    competition: CompetitionCreate,
    db: Session,
) -> Opportunity:

    data = competition.model_dump()

    if data.get("official_link") is not None:
        data["official_link"] = str(data["official_link"])

    data["category"] = CATEGORY

    return create_opportunity(
        data,
        db,
    )


def get_all_competitions(
    db: Session,
) -> list[Opportunity]:

    return get_all_opportunities(
        CATEGORY,
        db,
    )


def get_competition(
    competition_id: int,
    db: Session,
) -> Opportunity:

    return get_opportunity(
        competition_id,
        db,
    )


def update_competition(
    competition_id: int,
    competition: CompetitionCreate,
    db: Session,
) -> Opportunity:

    data = competition.model_dump()

    if data.get("official_link") is not None:
        data["official_link"] = str(data["official_link"])

    data["category"] = CATEGORY

    return update_opportunity(
        competition_id,
        data,
        db,
    )


def delete_competition(
    competition_id: int,
    db: Session,
) -> dict:

    return delete_opportunity(
        competition_id,
        db,
    )