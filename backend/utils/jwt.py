from datetime import datetime, timedelta, timezone

from jose import JWTError, jwt

from config import settings


SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES


def create_access_token(data: dict) -> str:
    """
    Create a JWT access token.
    """

    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update(
        {
            "exp": expire,
            "type": "access",
        }
    )

    return jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM,
    )


def create_reset_token(data: dict) -> str:
    """
    Create a password reset token.
    """

    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + timedelta(
        minutes=30
    )

    to_encode.update(
        {
            "exp": expire,
            "type": "reset",
            "purpose": "password_reset",
        }
    )

    return jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM,
    )


def verify_access_token(token: str) -> dict | None:
    """
    Verify an access token.
    """

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM],
        )

        if payload.get("type") != "access":
            return None

        return payload

    except JWTError:
        return None


def verify_reset_token(token: str) -> dict | None:
    """
    Verify a password reset token.
    """

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM],
        )

        if payload.get("type") != "reset":
            return None

        if payload.get("purpose") != "password_reset":
            return None

        return payload

    except JWTError:
        return None