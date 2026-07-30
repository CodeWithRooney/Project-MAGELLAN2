from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.home import router as home_router
from routers.user import router as user_router

from routers.resources import router as resources_router
from routers.scholarships import router as scholarships_router
from routers.schemes import router as schemes_router
from routers.exams import router as exams_router
from routers.competitions import router as competitions_router
from routers.benefits import router as benefits_router
from routers.chat import router as chat_router

app = FastAPI(
    title="Project Magellan API",
    description="Backend API for Project Magellan",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(home_router)
app.include_router(user_router)
app.include_router(resources_router)
app.include_router(scholarships_router)
app.include_router(schemes_router)
app.include_router(exams_router)
app.include_router(competitions_router)
app.include_router(benefits_router)
app.include_router(chat_router)