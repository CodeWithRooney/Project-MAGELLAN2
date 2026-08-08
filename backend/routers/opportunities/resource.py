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
    ResourceCreate,
    ResourceResponse,
)

from services.opportunities.resource_service import (
    create_resource,
    delete_resource,
    get_all_resources,
    get_resource,
    update_resource,
)


router = APIRouter(
    prefix="/resources",
    tags=["Resources"],
)


@router.post(
    "/",
    response_model=ResourceResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create resource",
)
def create(
    resource: ResourceCreate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin),
) -> ResourceResponse:
    """
    Creates a new learning resource.
    """

    return create_resource(
        resource=resource,
        db=db,
    )


@router.get(
    "/",
    response_model=list[ResourceResponse],
    status_code=status.HTTP_200_OK,
    summary="Get all resources",
)
def get_all(
    db: Session = Depends(get_db),
) -> list[ResourceResponse]:
    """
    Returns all learning resources.
    """

    return get_all_resources(db)


@router.get(
    "/{resource_id}",
    response_model=ResourceResponse,
    status_code=status.HTTP_200_OK,
    summary="Get resource",
)
def get(
    resource_id: int,
    db: Session = Depends(get_db),
) -> ResourceResponse:
    """
    Returns a learning resource by ID.
    """

    return get_resource(
        resource_id=resource_id,
        db=db,
    )


@router.put(
    "/{resource_id}",
    response_model=ResourceResponse,
    status_code=status.HTTP_200_OK,
    summary="Update resource",
)
def update(
    resource_id: int,
    resource: ResourceCreate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin),
) -> ResourceResponse:
    """
    Updates an existing learning resource.
    """

    return update_resource(
        resource_id=resource_id,
        resource=resource,
        db=db,
    )


@router.delete(
    "/{resource_id}",
    status_code=status.HTTP_200_OK,
    summary="Delete resource",
)
def delete(
    resource_id: int,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin),
) -> dict:
    """
    Deletes a learning resource.
    """

    return delete_resource(
        resource_id=resource_id,
        db=db,
    )