from sqlalchemy.orm import Session

from models import Opportunity
from schemas.opportunities import ResourceCreate

from .opportunity_service import (
    create_opportunity,
    delete_opportunity,
    get_all_opportunities,
    get_opportunity,
    update_opportunity,
)


CATEGORY = "Resource"


def create_resource(
    resource: ResourceCreate,
    db: Session,
) -> Opportunity:

    data = resource.model_dump()
    data["category"] = CATEGORY

    return create_opportunity(
        data,
        db,
    )


def get_all_resources(
    db: Session,
) -> list[Opportunity]:

    return get_all_opportunities(
        CATEGORY,
        db,
    )


def get_resource(
    resource_id: int,
    db: Session,
) -> Opportunity:

    return get_opportunity(
        resource_id,
        db,
    )


def update_resource(
    resource_id: int,
    resource: ResourceCreate,
    db: Session,
) -> Opportunity:

    data = resource.model_dump()
    data["category"] = CATEGORY

    return update_opportunity(
        resource_id,
        data,
        db,
    )


def delete_resource(
    resource_id: int,
    db: Session,
) -> dict:

    return delete_opportunity(
        resource_id,
        db,
    )