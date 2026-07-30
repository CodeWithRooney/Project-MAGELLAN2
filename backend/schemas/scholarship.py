from pydantic import BaseModel
from typing import Optional


class Scholarship(BaseModel):
    title: str
    provider: str
    eligibility: str
    amount: Optional[str] = None
    deadline: Optional[str] = None
    official_link: str