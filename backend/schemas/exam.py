from pydantic import BaseModel
from typing import Optional


class Exam(BaseModel):
    title: str
    category: str
    description: str
    eligibility: str
    exam_date: Optional[str] = None
    registration_deadline: Optional[str] = None
    official_link: str