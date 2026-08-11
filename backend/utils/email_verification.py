from datetime import datetime, timedelta, timezone

from jose import jwt

from config import settings


VERIFICATION_TOKEN_EXPIRE_HOURS = 24


def create_email_verification_token(user_id: int) -> str:
    expire = datetime.now(timezone.utc) + timedelta(
        hours=VERIFICATION_TOKEN_EXPIRE_HOURS
    )

    payload = {
        "sub": str(user_id),
        "purpose": "email_verification",
        "exp": expire,
    }

    return jwt.encode(
    payload,
    settings.SECRET_KEY,
    algorithm=settings.ALGORITHM,
)


def verify_email_verification_token(token: str) -> int:
    payload = jwt.decode(
        token,
        settings.SECRET_KEY,
        algorithms=[settings.ALGORITHM],
    )

    if payload.get("purpose") != "email_verification":
        raise ValueError("Invalid verification token.")

    user_id = payload.get("sub")

    if not user_id:
        raise ValueError("Invalid verification token.")

    return int(user_id)