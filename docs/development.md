# Magellan Development Guide

## Overview

This document describes the development practices, project structure, workflow, and conventions used while building Magellan.

Magellan is being developed as a collaborative project with separate responsibilities for backend development, frontend development, database management, and overall project coordination.

The development process is intended to keep the codebase organized, maintainable, and easy for team members to work on together.

---

## Development Stack

The current development stack includes:

- Python
- FastAPI
- PostgreSQL
- Pydantic
- JSON Web Tokens
- Git
- GitHub

Additional technologies may be added as the project develops.

---

## Project Structure

The project is organized into separate areas based on responsibility.

Project-Magellan/
│
├── backend/
│
├── frontend/
│
├── database/
│
├── docs/
│
├── .gitignore
├── README.md
└── ...

The exact structure may change as development progresses.

---

## Backend Structure

The backend follows a modular structure.

backend/
│
├── main.py
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
│
├── services/
│   └── user_service.py
│
└── utils/
    ├── jwt.py
    └── password.py

The structure is modular so that API routing, validation, business logic, and reusable utilities remain separated.

---

## Development Environment

The backend should be developed inside a Python virtual environment.

A typical setup is:

Create virtual environment
        |
        v
Activate virtual environment
        |
        v
Install dependencies
        |
        v
Configure environment variables
        |
        v
Configure PostgreSQL
        |
        v
Run FastAPI application

The exact commands required for setup are documented in setup.md.

---

## Environment Variables

Sensitive configuration should be stored in environment variables.

Examples include:

DATABASE_URL
JWT_SECRET_KEY
JWT_ALGORITHM
JWT_ACCESS_TOKEN_EXPIRE_MINUTES

The exact variable names should follow the project's implementation.

Environment files containing secrets should not be committed to Git.

The .gitignore file should exclude local environment files.

---

## Running the Backend

The FastAPI backend can be run during development using Uvicorn.

A typical development command is:

python -m uvicorn main:app --reload

The exact command depends on the directory from which the backend is executed and the project's final structure.

Once the server is running, the API can be tested through the FastAPI documentation interface.

http://127.0.0.1:8000/docs

---

## Development Workflow

The general development workflow is:

Choose Task
    |
    v
Create / Switch Branch
    |
    v
Implement Changes
    |
    v
Run and Test Locally
    |
    v
Review Changes
    |
    v
Commit Changes
    |
    v
Push Branch
    |
    v
Create Pull Request
    |
    v
Code Review
    |
    v
Merge

Team members should avoid directly modifying shared branches without following the agreed workflow.

---

## Git Workflow

Git is used for version control.

GitHub is used to host and collaborate on the repository.

Each major piece of work should preferably be developed on an appropriate branch rather than directly on the main branch.

Example branch structure:

main
 |
 +---- backend
 |
 +---- frontend
 |
 +---- database
 |
 +---- feature/<feature-name>

The exact branch strategy may change as the team grows.

---

## Commits

Commits should describe the change they contain.

Good examples include:

Add user registration endpoint
Fix JWT validation
Add funding schema
Update database models
Improve dashboard API

Commits should avoid vague messages such as:

changes
update
stuff
final
test

Small, focused commits are generally easier to review and debug.

---

## Pull Requests

Changes intended for the shared project should be reviewed through pull requests when the team workflow requires it.

A pull request should ideally include:

- A clear title
- A short description
- The purpose of the change
- Important implementation details
- Testing information
- Any known limitations

Team members should review changes before merging them into protected or shared branches.

---

## Code Review

Code review should focus on:

- Correctness
- Security
- Readability
- Maintainability
- API design
- Error handling
- Validation
- Database interaction
- Unnecessary duplication
- Compatibility with the existing architecture

Code should not be merged only because it works locally.

It should also fit the overall project structure.

---

## Backend Development Practices

Backend development should follow the separation of responsibilities established by the architecture.

### Routers

Routers should primarily handle API endpoints and request related operations.

Business logic should not unnecessarily be placed directly inside route functions.

### Schemas

Pydantic schemas should be used to validate and structure API data.

Request and response schemas should clearly represent the data expected by the API.

### Services

Business logic should be placed in service modules when it becomes sufficiently complex or reusable.

This keeps routers easier to read and maintain.

### Utilities

Reusable functionality such as password handling and JWT operations should remain in appropriate utility modules.

---

## Database Development

Database changes should be coordinated with backend development.

Before changing the database structure, the team should consider:

- Existing relationships
- Existing data
- API dependencies
- Required constraints
- Future extensibility
- Query requirements

Database credentials must never be committed to the repository.

---

## API Development

New API endpoints should be:

1. Designed according to the application's requirements.
2. Added to the appropriate router.
3. Given appropriate request and response schemas.
4. Validated.
5. Tested locally.
6. Documented in api.md.

When an endpoint changes, the relevant API documentation should be updated.

---

## Testing

Testing should be performed throughout development rather than only before final submission.

Testing should include:

- API endpoint testing
- Authentication testing
- Request validation testing
- Database interaction testing
- Error handling
- Frontend and backend integration
- Important user flows

For authentication in particular, both successful and unsuccessful cases should be tested.

Examples include:

Valid credentials
Invalid password
Unknown user
Expired JWT
Invalid JWT
Missing JWT
Duplicate registration
Invalid request data

---

## Error Handling

Errors should be handled explicitly and consistently.

The API should return appropriate HTTP status codes and useful error information.

Developers should avoid exposing sensitive internal information through error responses.

For example, database credentials, secret keys, stack traces, and other internal configuration should never be returned to clients.

---

## Security Practices

Security should be considered during development rather than added at the end.

The project should follow these practices:

- Never store plaintext passwords.
- Never commit secrets.
- Validate user input.
- Protect authenticated endpoints.
- Verify JWTs.
- Use environment variables for sensitive configuration.
- Avoid exposing unnecessary user information.
- Keep dependencies reasonably up to date.
- Review third party packages before using them.

---

## Documentation

The docs/ directory contains project documentation.

Important documentation files include:

docs/
├── architecture.md
├── api.md
├── authentication.md
├── database.md
├── development.md
├── features.md
└── setup.md

Additional documentation can be added when a new area of the project requires it.

Documentation should be updated when important architectural, API, database, or development decisions change.

---

## Feature Development Process

A new feature should generally follow this process:

Requirement
    |
    v
Feature Design
    |
    v
Database Requirements
    |
    v
API Design
    |
    v
Backend Implementation
    |
    v
Frontend Integration
    |
    v
Testing
    |
    v
Documentation
    |
    v
Code Review
    |
    v
Merge

Not every feature will require every step, but major features should be considered across the relevant parts of the system.

---

## Development Principles

The team should prioritize:

- Simplicity
- Clear separation of responsibilities
- Readable code
- Secure implementation
- Reusable components
- Consistent naming
- Proper validation
- Meaningful error handling
- Documentation
- Regular testing
- Small and understandable changes

The goal is not only to make the application work, but to keep the codebase maintainable as Magellan grows.

---

## Current Development Status

Magellan is currently in active development.

The backend foundation includes FastAPI, modular routers, Pydantic schemas, authentication utilities, and user related services.

PostgreSQL is being integrated as the primary database.

Frontend and database development are progressing alongside backend development.

Several planned features and integrations are still under development.

---

## Future Development

As Magellan progresses, the development process may introduce:

- Automated testing
- Continuous integration
- Database migrations
- Automated deployment
- Code quality checks
- API versioning
- Production monitoring
- Logging and observability
- Automated data updates
- AI assisted recommendations

