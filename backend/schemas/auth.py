from pydantic import BaseModel, EmailStr, Field


class UserRegister(BaseModel):
    email: EmailStr

    password: str = Field(
        ...,
        min_length=8,
        max_length=128,
    )


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class AuthResponse(BaseModel):
    access_token: str
    token_type: str
    user_id: int
    email: EmailStr
    profile_completed: bool


class RegisterResponse(BaseModel):
    message: str
    user_id: int
    email: EmailStr