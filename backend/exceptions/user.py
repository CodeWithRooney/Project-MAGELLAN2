class ProfileAlreadyExistsError(Exception):
    """
    Raised when a user already has a profile.
    """

    pass


class ProfileNotFoundError(Exception):
    """
    Raised when a profile cannot be found.
    """

    pass


__all__ = [
    "ProfileAlreadyExistsError",
    "ProfileNotFoundError",
]