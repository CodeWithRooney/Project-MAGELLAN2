from pydantic import BaseModel
from typing import Optional


class StudentBenefit(BaseModel):
    title: str
    provider: str
    category: str
    description: str
    eligibility: str
    validity: Optional[str] = None
    official_link: str