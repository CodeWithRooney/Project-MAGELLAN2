from fastapi import HTTPException

def create_user(user):
    existing_emails = [
        "admin@athena.com",
        "test@gmail.com"
    ]

    if user.email in existing_emails:
        raise HTTPException(
    status_code=400,
    detail="Email already exists."
)

    return {
        "success": True,
        "message": "Registration successful.",
        "user": {
            "name": user.name,
            "email": user.email
        }
    }

def login_user(user):
    registered_user = {
        "email": "ronit@gmail.com",
        "password": "password123"
    }

    if (
        user.email == registered_user["email"]
        and user.password == registered_user["password"]
    ):
        return {
            "success": True,
            "message": "Login successful."
        }

    raise HTTPException(
    status_code=401,
    detail="Invalid email or password."
)