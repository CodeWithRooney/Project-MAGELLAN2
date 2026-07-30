from pydantic import BaseModel
from typing import Optional


class Competition(BaseModel):
    title: str
    organizer: str
    category: str
    description: str
    eligibility: str
    prize: Optional[str] = None
    registration_deadline: Optional[str] = None
    official_link: str