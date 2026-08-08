from sqlalchemy import or_
from sqlalchemy.orm import Session

from exceptions import OpportunityNotFoundError
from models import Opportunity


def create_opportunity(
    opportunity_data: dict,
    db: Session,
) -> Opportunity:

    opportunity_data = opportunity_data.copy()

    if "official_link" in opportunity_data:
        opportunity_data["official_link"] = str(
            opportunity_data["official_link"]
        )

    opportunity = Opportunity(
        **opportunity_data,
    )

    db.add(opportunity)
    db.commit()
    db.refresh(opportunity)

    return opportunity


def get_all_opportunities(
    category: str,
    db: Session,
) -> list[Opportunity]:

    return (
        db.query(Opportunity)
        .filter(
            Opportunity.category == category
        )
        .all()
    )


def get_opportunity(
    opportunity_id: int,
    db: Session,
) -> Opportunity:

    opportunity = (
        db.query(Opportunity)
        .filter(
            Opportunity.id == opportunity_id
        )
        .first()
    )

    if not opportunity:
        raise OpportunityNotFoundError(
            "Opportunity not found."
        )

    return opportunity


def update_opportunity(
    opportunity_id: int,
    opportunity_data: dict,
    db: Session,
) -> Opportunity:

    opportunity = (
        db.query(Opportunity)
        .filter(
            Opportunity.id == opportunity_id
        )
        .first()
    )

    if not opportunity:
        raise OpportunityNotFoundError(
            "Opportunity not found."
        )

    for field, value in opportunity_data.items():

        if field == "official_link" and value is not None:
            value = str(value)

        setattr(
            opportunity,
            field,
            value,
        )

    db.commit()
    db.refresh(opportunity)

    return opportunity


def delete_opportunity(
    opportunity_id: int,
    db: Session,
) -> dict:

    opportunity = (
        db.query(Opportunity)
        .filter(
            Opportunity.id == opportunity_id
        )
        .first()
    )

    if not opportunity:
        raise OpportunityNotFoundError(
            "Opportunity not found."
        )

    db.delete(opportunity)
    db.commit()

    return {
        "message": "Opportunity deleted successfully."
    }


def search_opportunities(
    keyword: str,
    db: Session,
    category: str | None = None,
) -> list[Opportunity]:

    keyword = f"%{keyword.strip()}%"

    query = (
        db.query(Opportunity)
        .filter(
            or_(
                Opportunity.title.ilike(keyword),
                Opportunity.description.ilike(keyword),
                Opportunity.provider.ilike(keyword),
                Opportunity.category.ilike(keyword),
            )
        )
    )

    if category is not None:
        query = query.filter(
            Opportunity.category == category
        )

    return query.all()