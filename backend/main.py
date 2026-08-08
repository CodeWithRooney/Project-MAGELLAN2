import models

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from routers.opportunities import search

from exceptions import (
    UserAlreadyExistsError,
    UserNotFoundError,
    InvalidPasswordError,
    ProfileAlreadyExistsError,
    ProfileNotFoundError,
    OpportunityNotFoundError,
    ChatGenerationError,
)

app = FastAPI()

from database import (
    Base,
    engine,
)

from routers import (
    auth_router,
    user_router,
    chat_router,
    home_router,
    funding_router,
    competition_router,
    exam_router,
    benefit_router,
    resource_router,
)

# Create all database tables
#Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Project Magellan API",
    description="AI-powered career guidance platform for students.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*",
    ],
    allow_credentials=True,
    allow_methods=[
        "*",
    ],
    allow_headers=[
        "*",
    ],
)

# Home
app.include_router(home_router)

# Authentication
app.include_router(auth_router)

# User
app.include_router(user_router)

# AI Chat
app.include_router(chat_router)

# Opportunities
app.include_router(funding_router)
app.include_router(competition_router)
app.include_router(exam_router)
app.include_router(benefit_router)
app.include_router(resource_router)
app.include_router(search.router)

@app.exception_handler(OpportunityNotFoundError)
async def opportunity_not_found_handler(
    request: Request,
    exc: OpportunityNotFoundError,
):
    return JSONResponse(
        status_code=404,
        content={
            "detail": str(exc),
        },
    )