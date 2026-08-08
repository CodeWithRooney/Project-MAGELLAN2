from datetime import date
from typing import List, Optional

from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
    HttpUrl,
)


# ==========================================
# Resource Create
# ==========================================

class ResourceCreate(BaseModel):

    title: str = Field(
        ...,
        max_length=200,
    )

    provider: str = Field(
        ...,
        max_length=200,
    )

    description: str = Field(
        ...,
        min_length=10,
    )

    eligibility: Optional[str] = None

    official_link: HttpUrl

    deadline: Optional[date] = None

    mode: Optional[str] = Field(
        default=None,
        max_length=50,
    )

    location: Optional[str] = Field(
        default=None,
        max_length=150,
    )

    is_free: bool = True

    tags: Optional[List[str]] = None

    includes: Optional[List[str]] = None

    benefit: Optional[str] = Field(
        default=None,
        max_length=255,
    )


# ==========================================
# Resource Response
# ==========================================

class ResourceResponse(ResourceCreate):

    id: int

    model_config = ConfigDict(
        from_attributes=True,
    )