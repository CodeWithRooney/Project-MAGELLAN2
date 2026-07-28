from fastapi import FastAPI

from routers.home import router as home_router
from routers.user import router as user_router

app = FastAPI()

app.include_router(home_router)
app.include_router(user_router)