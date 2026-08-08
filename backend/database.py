import os
from typing import Generator

from dotenv import load_dotenv

from sqlalchemy import create_engine
from sqlalchemy.orm import (
    Session,
    declarative_base,
    sessionmaker,
)


load_dotenv()


DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError(
        "DATABASE_URL is not set in the .env file."
    )


engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    future=True,
)


SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False,
)


Base = declarative_base()


def get_db() -> Generator[Session, None, None]:
    """
    Provides a database session for each request.
    Automatically closes the session after use.
    """

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()