from .auth import router as auth_router
from .chat import router as chat_router
from .home import router as home_router

from .opportunities import (
    benefit_router,
    competition_router,
    exam_router,
    funding_router,
    resource_router,
)

from .user import router as user_router


__all__ = [
    "auth_router",
    "benefit_router",
    "chat_router",
    "competition_router",
    "exam_router",
    "funding_router",
    "home_router",
    "resource_router",
    "user_router",
]