from fastapi import (
    APIRouter,
    Depends,
    status,
)
from sqlalchemy.orm import Session

from database import get_db

from schemas.opportunities import (
    CompetitionCreate,
    CompetitionResponse,
)

from services.opportunities.competition_service import (
    create_competition,
    delete_competition,
    get_all_competitions,
    get_competition,
    update_competition,
)


router = APIRouter(
    prefix="/competitions",
    tags=["Competitions"],
)


@router.post(
    "/",
    response_model=CompetitionResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create competition",
)
def create(
    competition: CompetitionCreate,
    db: Session = Depends(get_db),
) -> CompetitionResponse:
    """
    Creates a new competition opportunity.
    """

    return create_competition(
        competition=competition,
        db=db,
    )


@router.get(
    "/",
    response_model=list[CompetitionResponse],
    status_code=status.HTTP_200_OK,
    summary="Get all competitions",
)
def get_all(
    db: Session = Depends(get_db),
) -> list[CompetitionResponse]:
    """
    Returns all competition opportunities.
    """

    return get_all_competitions(db)


@router.get(
    "/{competition_id}",
    response_model=CompetitionResponse,
    status_code=status.HTTP_200_OK,
    summary="Get competition",
)
def get(
    competition_id: int,
    db: Session = Depends(get_db),
) -> CompetitionResponse:
    """
    Returns a competition by ID.
    """

    return get_competition(
        competition_id=competition_id,
        db=db,
    )


@router.put(
    "/{competition_id}",
    response_model=CompetitionResponse,
    status_code=status.HTTP_200_OK,
    summary="Update competition",
)
def update(
    competition_id: int,
    competition: CompetitionCreate,
    db: Session = Depends(get_db),
) -> CompetitionResponse:
    """
    Updates an existing competition.
    """

    return update_competition(
        competition_id=competition_id,
        competition=competition,
        db=db,
    )


@router.delete(
    "/{competition_id}",
    status_code=status.HTTP_200_OK,
    summary="Delete competition",
)
def delete(
    competition_id: int,
    db: Session = Depends(get_db),
) -> dict:
    """
    Deletes a competition.
    """

    return delete_competition(
        competition_id=competition_id,
        db=db,
    )