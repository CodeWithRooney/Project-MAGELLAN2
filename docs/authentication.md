# Magellan Authentication

## Overview

Magellan uses authentication to protect user accounts and restricted API resources.

The backend handles authentication using password hashing and JSON Web Tokens.

The authentication system is designed to ensure that user credentials are securely stored and that protected resources are accessible only to authenticated users.

---

## Authentication Flow

The general authentication flow is:

                    User
                      |
                      v
                Create Account
                      |
                      v
              Password Hashing
                      |
                      v
              Store User Data
                      |
                      v
                   Database
                      |
                      v
                    Login
                      |
                      v
             Verify Credentials
                      |
              +-------+-------+
              |               |
          Invalid          Valid
              |               |
              v               v
        Login Error      Create JWT
                              |
                              v
                     Authenticated User
                              |
                              v
                    Protected API Request
                              |
                              v
                         JWT Validation
                              |
                              v
                       Protected Resource
                       
---

## User Registration

During registration, the user provides the information required to create a personalized Magellan profile.

The registration process may include information such as:

- Full name
- Age
- Gender
- School or college
- Current class or year
- Interests
- Favorite subjects
- Skills
- Hobbies
- Career goal
- Higher education preferences
- Preferred countries

The exact fields are defined by the current user schemas.

The registration process follows these general steps:

User Information
       |
       v
Request Validation
       |
       v
Check Existing User
       |
       v
Hash Password
       |
       v
Create User Record
       |
       v
Database

Passwords must never be stored as plaintext.

---

## Password Security

Magellan uses password hashing rather than storing original passwords.

The general process is:

Plaintext Password
       |
       v
Password Hashing Algorithm
       |
       v
Password Hash
       |
       v
Database

When the user logs in, the supplied password is verified against the stored password hash.

Login Password
       |
       v
Password Verification
       |
       +---- Invalid ----> Authentication Error
       |
       v
Valid Credentials

The hashing implementation is handled by the backend password utility.

backend/utils/password.py

The exact hashing library and configuration should follow the implementation currently used by the project.

---

## Login

The login process verifies the user's credentials.

User
 |
 v
Login Request
 |
 v
Validate Credentials
 |
 v
Find User
 |
 v
Verify Password
 |
 +---- Invalid ----> Authentication Error
 |
 v
Generate JWT
 |
 v
Return Authentication Response

After successful authentication, the client can use the JWT when accessing protected endpoints.

---

## JSON Web Tokens

Magellan uses JSON Web Tokens for authenticated API requests.

The JWT allows the backend to verify that a request is associated with an authenticated user.

The general flow is:

Successful Login
      |
      v
JWT Creation
      |
      v
JWT Returned to Client
      |
      v
Client Stores Token
      |
      v
Protected API Request
      |
      v
Backend Verifies Token
      |
      v
Authenticated Request

The JWT implementation is handled by:

backend/utils/jwt.py

---

## Authorization Header

Protected requests should send the JWT using the Bearer authentication scheme.

Authorization: Bearer <JWT>

The backend verifies the token before allowing access to protected resources.

---

## JWT Validation

When a protected endpoint receives a request, the backend should:

1. Extract the JWT from the request.
2. Verify the token.
3. Validate the token's signature.
4. Check whether the token is valid and has not expired.
5. Identify the authenticated user.
6. Allow access to the protected resource.

The general flow is:

Protected Request
       |
       v
Extract JWT
       |
       v
Verify Signature
       |
       v
Validate Claims
       |
       +---- Invalid ----> 401 Unauthorized
       |
       v
Identify User
       |
       v
Continue Request

---

## Token Expiration

JWTs should have an expiration time.

Expired tokens should not be accepted for protected requests.

Valid Token
    |
    v
Access Granted

Expired Token
    |
    v
Access Denied

The exact expiration duration should be defined in the backend authentication configuration.

---

## Protected Endpoints

Endpoints that require an authenticated user should validate the JWT before executing protected operations.

Examples of functionality that may require authentication include:

- Viewing a personalized profile
- Updating a user profile
- Accessing personalized recommendations
- Viewing personalized roadmaps
- Tracking user progress
- Managing user specific data

Public endpoints should not require authentication unless there is a specific security reason to do so.

---

## Environment Variables

Authentication secrets must not be hardcoded in the source code.

Sensitive configuration should be stored in environment variables.

Examples include:

JWT_SECRET_KEY
JWT_ALGORITHM
JWT_ACCESS_TOKEN_EXPIRE_MINUTES
DATABASE_URL

The exact environment variable names must match the project's actual configuration.

The .env file containing secrets must not be committed to Git.

A .gitignore file should ensure that local environment files are excluded from version control.

---

## Security Principles

Magellan authentication follows these principles:

- Never store plaintext passwords.
- Never hardcode JWT secrets.
- Never commit authentication secrets to the repository.
- Validate all authentication input.
- Use secure password hashing.
- Use token expiration.
- Protect authenticated endpoints.
- Verify JWT signatures.
- Do not expose sensitive user information through API responses.
- Keep authentication logic separated from unrelated application logic.

---

## Current Authentication Architecture

The current backend authentication related structure includes:

backend/
│
├── routers/
│   └── user.py
│
├── schemas/
│   ├── auth.py
│   └── user.py
│
├── services/
│   └── user_service.py
│
└── utils/
    ├── jwt.py
    └── password.py

The exact structure may change as the authentication system develops.

---

## Current Status

Authentication is under development as part of the Magellan backend.

The current architecture includes:

- User registration
- Password hashing
- Password verification
- JWT based authentication
- Protected API access
- Environment based secret configuration

Additional authentication features may be introduced later if required.

Possible future additions include:

- Refresh tokens
- Password reset
- Email verification
- Account recovery
- OAuth or social login
- Multi factor authentication

These features are not considered part of the current core implementation unless they are explicitly added to the project.