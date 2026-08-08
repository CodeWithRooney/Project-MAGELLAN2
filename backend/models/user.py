from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Integer,
    String,
)

from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    name = Column(
        String(100),
        nullable=False,
    )

    email = Column(
        String(255),
        unique=True,
        index=True,
        nullable=False,
    )

    hashed_password = Column(
        String(255),
        nullable=False,
    )

    is_active = Column(
        Boolean,
        default=True,
        nullable=False,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )

    profile = relationship(
        "StudentProfile",
        back_populates="owner",
        uselist=False,
        cascade="all, delete-orphan",
    )

    chat_history = relationship(
        "ChatHistory",
        back_populates="user",
        cascade="all, delete-orphan",
    )