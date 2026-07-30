from fastapi import APIRouter

router = APIRouter(
    prefix="/schemes",
    tags=["Government Schemes"]
)


@router.get("/")
def get_all_schemes():
    return {
        "message": "Government schemes endpoint is under development.",
        "schemes": []
    }


@router.get("/{scheme_id}")
def get_scheme(scheme_id: int):
    return {
        "scheme_id": scheme_id,
        "message": "Scheme details will be available after database integration."
    }