from pydantic import BaseModel
from typing import Optional


class Resource(BaseModel):
    title: str
    provider: str
    category: str
    level: str
    duration: Optional[str] = None
    rating: Optional[float] = None
    is_free: bool
    certificate_available: bool
    link: str