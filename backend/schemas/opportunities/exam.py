from datetime import date
from typing import List, Optional

from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
    HttpUrl,
)


# ==========================================
# Exam Create
# ==========================================

class ExamCreate(BaseModel):

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
# Exam Response
# ==========================================

class ExamResponse(ExamCreate):

    id: int

    model_config = ConfigDict(
        from_attributes=True,
    )