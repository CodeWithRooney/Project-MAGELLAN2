import bcrypt


def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode("utf-8"), salt)
    return hashed.decode("utf-8")


def verify_password(password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(
        password.encode("utf-8"),
        hashed_password.encode("utf-8")
    )


if __name__ == "__main__":
    password = "password123"

    hashed = hash_password(password)

    print("Original Password:", password)
    print("Hashed Password:", hashed)

    print("Correct Password:",
          verify_password("password123", hashed))

    print("Wrong Password:",
          verify_password("hello123", hashed))