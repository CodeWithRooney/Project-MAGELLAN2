from .auth import (
    UserRegister,
    LoginRequest,
    AuthResponse,
)

from .password import (
    ForgotPasswordRequest,
    ResetPasswordRequest,
    PasswordResetResponse,
)

from .user import (
    StudentProfileCreate,
    StudentProfileResponse,
)

from .chat import (
    ChatMessage,
    ChatRequest,
    ChatResponse,
    ChatHistoryResponse,
)

from .opportunities import (
    FundingCreate,
    FundingResponse,
    CompetitionCreate,
    CompetitionResponse,
    ExamCreate,
    ExamResponse,
    ResourceCreate,
    ResourceResponse,
    BenefitCreate,
    BenefitResponse,
)

__all__ = [
    "UserRegister",
    "LoginRequest",
    "AuthResponse",
    "ForgotPasswordRequest",
    "ResetPasswordRequest",
    "PasswordResetResponse",
    "StudentProfileCreate",
    "StudentProfileResponse",
    "ChatMessage",
    "ChatRequest",
    "ChatResponse",
    "ChatHistoryResponse",
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
]