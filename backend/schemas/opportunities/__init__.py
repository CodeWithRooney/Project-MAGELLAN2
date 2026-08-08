from datetime import date
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, HttpUrl

from .funding import FundingCreate, FundingResponse
from .competition import CompetitionCreate, CompetitionResponse
from .exam import ExamCreate, ExamResponse
from .resource import ResourceCreate, ResourceResponse
from .benefit import BenefitCreate, BenefitResponse


class OpportunitySearchResponse(BaseModel):
    id: int
    category: str

    title: str
    provider: str
    description: str

    eligibility: Optional[str] = None

    official_link: HttpUrl

    deadline: Optional[date] = None

    mode: Optional[str] = None
    location: Optional[str] = None

    is_free: bool = True

    tags: Optional[List[str]] = None
    includes: Optional[List[str]] = None

    benefit: Optional[str] = None

    model_config = ConfigDict(
        from_attributes=True,
    )


__all__ = [
    "FundingCreate",
    "FundingResponse",
    "CompetitionCreate",
    "CompetitionResponse",
    "ExamCreate",
    "ExamResponse",
    "ResourceCreate",
    "ResourceResponse",
    "BenefitCreate",
    "BenefitResponse",
    "OpportunitySearchResponse",
]