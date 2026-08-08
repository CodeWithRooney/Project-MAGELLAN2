from .benefit import router as benefit_router
from .competition import router as competition_router
from .exam import router as exam_router
from .funding import router as funding_router
from .resource import router as resource_router


__all__ = [
    "benefit_router",
    "competition_router",
    "exam_router",
    "funding_router",
    "resource_router",
]