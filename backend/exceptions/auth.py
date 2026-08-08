class UserAlreadyExistsError(Exception):
    """
    Raised when trying to register with an existing email.
    """

    pass


class UserNotFoundError(Exception):
    """
    Raised when a user account cannot be found.
    """

    pass


class InvalidPasswordError(Exception):
    """
    Raised when the password is incorrect.
    """

    pass


__all__ = [
    "UserAlreadyExistsError",
    "UserNotFoundError",
    "InvalidPasswordError",
]