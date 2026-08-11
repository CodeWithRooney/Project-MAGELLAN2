# Magellan API Documentation

## Overview

Magellan provides a RESTful API built with FastAPI.

The API acts as the communication layer between the frontend application and the backend services. It handles user authentication, profile management, application data, and other platform functionality.

The API is currently under active development. Endpoints and request or response structures may change as the project evolves.

---

## Base URL

During local development, the API is expected to run on a local server.

http://127.0.0.1:8000

The production base URL will be added when Magellan is deployed.

---

## API Documentation Interface

FastAPI automatically provides interactive API documentation.

When the backend is running locally, the documentation can be accessed at:

http://127.0.0.1:8000/docs

FastAPI also provides an alternative documentation interface at:

http://127.0.0.1:8000/redoc

These interfaces allow developers to inspect available endpoints, request parameters, schemas, and responses.

---

## API Architecture

The general API request flow is:

Frontend
   |
   | HTTP Request
   v
FastAPI Router
   |
   v
Request Validation
   |
   v
Service Layer
   |
   v
Database
   |
   v
API Response
   |
   v
Frontend

Protected endpoints additionally require authentication.

Frontend
   |
   | HTTP Request + JWT
   v
FastAPI Router
   |
   v
JWT Verification
   |
   +---- Invalid Token ----> Authentication Error
   |
   v
Request Validation
   |
   v
Service Layer
   |
   v
Database
   |
   v
Response

---

## API Conventions

Magellan follows standard REST API conventions.

### HTTP Methods

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST |	Create data or perform an action |
| PUT |	Replace existing data |
| PATCH | Partially update existing data |
| DELETE | Delete data |

Only methods required by a particular endpoint should be implemented.

### Content Type

Requests containing structured data should use:

Content-Type: application/json

Responses containing structured data are generally returned as JSON.

---

## Authentication

Magellan uses JWT based authentication for protected resources.

The general authentication process is:

User
 |
 v
Register
 |
 v
Login
 |
 v
Credential Verification
 |
 v
JWT Generated
 |
 v
JWT Sent With Protected Requests
 |
 v
Backend Verifies JWT
 |
 v
Protected Resource

Authenticated requests should provide the JWT using the appropriate authorization mechanism.

Example:

Authorization: Bearer <JWT>

Authentication implementation details are documented in authentication.md.

---

## API Endpoint Groups

The API is organized into logical groups rather than placing all functionality into a single router.

The current backend structure includes:

backend/
│
├── routers/
│   ├── home.py
│   └── user.py
│
├── schemas/
│   ├── auth.py
│   ├── user.py
│   ├── funding.py
│   ├── competition.py
│   ├── exam.py
│   ├── resource.py
│   └── benefit.py

Additional routers will be introduced as new platform functionality is implemented.

---

## Home API

The home router contains basic application level endpoints.

### Purpose

The home API is intended to provide basic endpoints used to verify that the backend is running and accessible.

The exact endpoints should be kept synchronized with the implementation in:

backend/routers/home.py

---

## User API

The user router handles user related functionality.

Potential responsibilities include:

- User registration
- User login related operations
- User profile information
- User profile updates
- Authenticated user information

The exact endpoints and schemas should be kept synchronized with:

backend/routers/user.py

---

## Data API Modules

Magellan is designed to expose structured information related to different opportunity and resource categories.

The current schema modules include:

- Funding
- Competition
- Exam
- Resource
- Benefit

These correspond to:

backend/schemas/funding.py
backend/schemas/competition.py
backend/schemas/exam.py
backend/schemas/resource.py
backend/schemas/benefit.py

The corresponding API endpoints will be documented here once their router implementations are finalized.

---

## Request Validation

Magellan uses Pydantic schemas to validate API requests and structure API responses.

For example, a registration request may contain structured user information such as:

{
  "full_name": "Example Student",
  "age": 18,
  "gender": "Other",
  "school_or_college": "Example College",
  "current_year": "First Year",
  "interests": ["Programming", "Astronomy"],
  "favorite_subjects": ["Computer Science", "Physics"],
  "skills": ["Python"],
  "hobbies": ["Reading"],
  "career_goal": "Software Engineer",
  "study_abroad": true,
  "preferred_countries": ["Germany", "Japan"]
}

The actual fields and validation rules must follow the current Pydantic schemas implemented in the backend.

---

## Response Format

Successful responses should return structured JSON data appropriate to the endpoint.

A typical response may look like:

{
  "success": true,
  "message": "Request completed successfully",
  "data": {}
}

The exact response structure should follow the corresponding response schema implemented by the API.

---

## HTTP Status Codes

The API should use appropriate HTTP status codes.

| Status Code |	Meaning |
|---|---|
| 200 |	Request completed successfully |
| 201 |	Resource created successfully |
| 204 |	Request completed with no response body |
| 400 |	Bad request |
| 401 |	Authentication required or credentials invalid |
| 403 |	Access forbidden |
| 404 |	Resource not found |
| 409 |	Resource conflict |
| 422 |	Validation error |
| 500 |	Internal server error |

The exact status code for each endpoint depends on its implementation.

---

## Error Handling

API errors should return a meaningful HTTP status code and an informative response.

Example:

{
  "detail": "User already exists"
}

Validation errors are handled by FastAPI and Pydantic according to the application's request schemas.

Clients should not depend on error messages alone for application logic. HTTP status codes should be used to determine the general type of failure.

---

## API Security

The API should follow these security principles:

- Passwords must never be stored as plaintext.
- Passwords must be securely hashed before storage.
- JWT secrets must not be hardcoded.
- Database credentials must not be committed to the repository.
- Sensitive configuration should be stored in environment variables.
- Protected endpoints should require authentication.
- User input should be validated before processing.
- Appropriate authorization checks should be applied to protected resources.

---

## API Versioning

API versioning is not currently required for the prototype.

As Magellan grows, versioned endpoints may be introduced to maintain compatibility between different frontend and backend versions.

A possible future structure is:

/api/v1/...

This should only be introduced when there is a practical need for API versioning.

---

## Development Status

The API is under active development.

The following areas are currently being developed or integrated:

- User authentication
- User registration
- User profile management
- JWT authentication
- PostgreSQL integration
- Funding data
- Competition data
- Examination data
- Learning resource data
- Benefit data
- Personalization
- Future AI assisted guidance

Therefore, this document should be updated whenever new endpoints are implemented or existing endpoints are modified.

---

## Maintaining This Documentation

Whenever an API endpoint is added, changed, or removed, this document should be updated.

For each finalized endpoint, the documentation should include:

- HTTP method
- Endpoint path
- Purpose
- Authentication requirement
- Request parameters
- Request body
- Response body
- Possible status codes
- Error responses
- Example request
- Example response