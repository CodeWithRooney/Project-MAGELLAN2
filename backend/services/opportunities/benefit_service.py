from sqlalchemy.orm import Session

from models import Opportunity
from schemas.opportunities import BenefitCreate

from .opportunity_service import (
    create_opportunity,
    delete_opportunity,
    get_all_opportunities,
    get_opportunity,
    update_opportunity,
)


CATEGORY = "Benefit"


def create_benefit(
    benefit: BenefitCreate,
    db: Session,
) -> Opportunity:

    data = benefit.model_dump()
    data["category"] = CATEGORY

    return create_opportunity(
        data,
        db,
    )


def get_all_benefits(
    db: Session,
) -> list[Opportunity]:

    return get_all_opportunities(
        CATEGORY,
        db,
    )


def get_benefit(
    benefit_id: int,
    db: Session,
) -> Opportunity:

    return get_opportunity(
        benefit_id,
        db,
    )


def update_benefit(
    benefit_id: int,
    benefit: BenefitCreate,
    db: Session,
) -> Opportunity:

    data = benefit.model_dump()
    data["category"] = CATEGORY

    return update_opportunity(
        benefit_id,
        data,
        db,
    )


def delete_benefit(
    benefit_id: int,
    db: Session,
) -> dict:

    return delete_opportunity(
        benefit_id,
        db,
    )