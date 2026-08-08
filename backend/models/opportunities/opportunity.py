from sqlalchemy import (
    Boolean,
    Column,
    Date,
    DateTime,
    Integer,
    JSON,
    String,
    Text,
)

from sqlalchemy.sql import func

from database import Base


class Opportunity(Base):
    __tablename__ = "opportunities"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    # ==========================
    # Basic Information
    # ==========================

    category = Column(
        String(50),
        nullable=False,
    )

    title = Column(
        String(200),
        nullable=False,
    )

    provider = Column(
        String(200),
        nullable=False,
    )

    description = Column(
        Text,
        nullable=False,
    )

    # ==========================
    # Eligibility
    # ==========================

    eligibility = Column(
        Text,
    )

    # ==========================
    # Opportunity Details
    # ==========================

    official_link = Column(
        String(500),
        nullable=False,
    )

    deadline = Column(
        Date,
    )

    mode = Column(
        String(50),
    )

    location = Column(
        String(150),
    )

    is_free = Column(
        Boolean,
        default=True,
        nullable=False,
    )

    # ==========================
    # AI Search
    # ==========================

    tags = Column(
        JSON,
    )

    includes = Column(
        JSON,
    )

    benefit = Column(
        String(255),
    )

    # ==========================
    # Timestamp
    # ==========================

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )