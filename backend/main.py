from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.home import router as home_router
from routers.user import router as user_router

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