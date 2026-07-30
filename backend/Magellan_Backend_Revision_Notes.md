# Project Magellan Backend Revision Notes

## backend/main.py

Purpose: - Starts FastAPI application. - Includes routers. - Registers
Home, About and User APIs.

Key items: - Creates `app = FastAPI()` - Includes: - home router - user
router

------------------------------------------------------------------------

## backend/routers/home.py

Endpoints: - `GET /` - Home endpoint. - `GET /about` - About endpoint.

------------------------------------------------------------------------

## backend/routers/user.py

Imports: - UserRegister - LoginRequest - ForgotPasswordRequest -
ResetPasswordRequest - JWT utilities - Password utilities

Temporary storage: - `FAKE_USER`

Endpoints: - `POST /user/register` - `POST /user/login` -
`POST /user/forgot-password` - `POST /user/reset-password` -
`GET /user/profile`

Current limitation: - Uses `FAKE_USER`. - Tomorrow this will be replaced
with PostgreSQL.

------------------------------------------------------------------------

## backend/schemas/user.py

Contains: - UserRegister model

Fields: - name - email - password

Purpose: - Validates registration data.

------------------------------------------------------------------------

## backend/schemas/auth.py

Contains: - LoginRequest

Fields: - email - password

Purpose: - Validates login request.

------------------------------------------------------------------------

## backend/schemas/password.py

Contains: - ForgotPasswordRequest - ResetPasswordRequest

Purpose: - Validate forgot/reset password APIs.

------------------------------------------------------------------------

## backend/utils/password.py

Functions: - hash_password() - verify_password()

Purpose: - Hash passwords. - Verify passwords.

Uses: - pwdlib (Argon2)

------------------------------------------------------------------------

## backend/utils/jwt.py

Constants: - SECRET_KEY - ALGORITHM - ACCESS_TOKEN_EXPIRE_MINUTES

Functions: - create_access_token() - verify_access_token() -
verify_reset_token()

Purpose: - Create JWT. - Verify login token. - Verify password-reset
token.

------------------------------------------------------------------------

## backend/services/user_service.py

Purpose: - Business logic related to users. - Currently minimal because
FAKE_USER is used. - Will contain database operations later.

------------------------------------------------------------------------

## backend/generate_hash.py

Purpose: - Generates a password hash. - Used to create initial hashed
passwords.

------------------------------------------------------------------------

## Request Flow

Register

Frontend → /user/register → Validate data → Register user → Response

Login

Frontend → /user/login → Verify password → Create JWT → Return token

Profile

Frontend → /user/profile → Verify JWT → Return profile

Forgot Password

Frontend → /user/forgot-password → Generate reset token → Return token
(temporary)

Reset Password

Frontend → /user/reset-password → Verify reset token → Hash new password
→ Update FAKE_USER → Success

------------------------------------------------------------------------

## Files that will change after PostgreSQL integration

-   routers/user.py
-   services/user_service.py
-   Database connection file (to be added)
-   Models (if used)

Files that will mostly remain unchanged: - utils/password.py -
utils/jwt.py - schemas/\* - home.py - main.py
