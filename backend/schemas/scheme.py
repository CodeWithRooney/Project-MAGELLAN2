from pydantic import BaseModel
from typing import Optional


class GovernmentScheme(BaseModel):
    title: str
    provider: str
    description: str
    eligibility: str
    benefits: str
    official_link: str
    deadline: Optional[str] = None