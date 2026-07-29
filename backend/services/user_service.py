from utils.password import hash_password, verify_password

# Temporary fake user (will be replaced with PostgreSQL later)
FAKE_USER = {
    "email": "ronit@gmail.com",
    "hashed_password": "$2b$12$WjC4YVLVLhcMGtfWLC.FCu8aSq1.7P4SJNaKb/Mug5RXy7WZNAKhm"
}


def register_user(name: str, email: str, password: str):
    hashed_password = hash_password(password)

    return {
        "message": "User registered successfully",
        "name": name,
        "email": email,
        "hashed_password": hashed_password
    }


def authenticate_user(email: str, password: str):
    if email != FAKE_USER["email"]:
        return None

    if not verify_password(password, FAKE_USER["hashed_password"]):
        return None

    return FAKE_USER