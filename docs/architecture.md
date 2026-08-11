# Magellan Architecture

## Overview

Magellan is a personalized career guidance platform designed to help students make informed decisions about education and careers.

The system brings career information, scholarships, universities, competitions, examinations, learning resources, and personalized guidance into a single platform.

Magellan follows a client server architecture with a frontend application, a FastAPI backend, and a PostgreSQL database.

The architecture is modular so that additional features such as recommendation systems and AI assisted guidance can be added as the project develops.

---

## System Architecture
                    +----------------------+
                    |       Frontend       |
                    |   Student Interface  |
                    +----------+-----------+
                               |
                               | HTTP / REST API
                               |
                    +----------v-----------+
                    |       Backend        |
                    |       FastAPI        |
                    +----------+-----------+
                               |
                 +-------------+-------------+
                 |                           |
                 v                           v
        +----------------+          +-------------------+
        |   PostgreSQL   |          | Authentication    |
        |    Database    |          |    and JWT        |
        +----------------+          +-------------------+

---

## Main Components

### Frontend

The frontend is responsible for providing the user interface and handling interaction with students.

Its responsibilities include:

- User onboarding
- Account creation and login
- Profile management
- Personalized dashboard
- Career exploration
- Scholarship and funding discovery
- University exploration
- Competition and opportunity discovery
- Examination discovery
- Learning resource discovery
- Learning roadmap presentation
- Personalized guidance

The frontend communicates with the backend through REST APIs.

### Backend

The backend is being developed using Python and FastAPI.

It acts as the application layer between the frontend and the database.

Its responsibilities include:

- Providing REST API endpoints
- Validating requests
- Managing users
- Handling authentication
- Hashing and verifying passwords
- Creating and validating JWTs
- Executing business logic
- Communicating with PostgreSQL
- Managing user data
- Providing application data
- Supporting personalization
- Supporting future AI functionality

### Database

PostgreSQL is used as the primary relational database.

The database provides persistent storage for application data such as:

- User information
- User preferences
- Career information
- Funding opportunities
- Competitions
- Examinations
- Learning resources
- Benefits

The database structure may change as new features are implemented.

### Authentication

Authentication is handled by the backend.

The authentication system uses password hashing and JSON Web Tokens.

The general authentication flow is:

User
 |
 v
Login
 |
 v
Credential Verification
 |
 v
JWT Generation
 |
 v
Authenticated Requests
 |
 v
JWT Verification
 |
 v
Protected API Resources

Sensitive configuration such as database credentials and JWT secrets is stored using environment variables.

### AI Assisted Guidance

AI assisted guidance is planned as part of Magellan.

The intended purpose of the AI component is to help students with:

- Career exploration
- Career recommendations
- Understanding career paths
- Skill recommendations
- Learning suggestions
- Personalized career planning

AI functionality is intended to assist students rather than replace their own decisions.

The exact AI architecture will be defined when the AI component is implemented.

---

## User Flow

### First Time User

Student
   |
   v
Welcome
   |
   v
Introduction to Magellan
   |
   v
Platform Explanation
   |
   v
Create Account
   |
   v
Profile Setup
   |
   v
Personalized Dashboard

### Returning User

Returning Student
       |
       v
Login
       |
       v
Authentication
       |
       v
Personalized Dashboard

---

## Personalization Flow

Personalization is one of the core concepts of Magellan.

The platform collects information from the student's profile and uses it to provide more relevant content.

                 Student Profile
                       |
        +--------------+--------------+
        |              |              |
        v              v              v
   Education       Interests        Skills
        |              |              |
        +--------------+--------------+
                       |
                       v
                 Career Goals
                       |
                       v
          Higher Education Preferences
                       |
                       v
              Personalization
                       |
          +------------+------------+
          |            |            |
          v            v            v
       Careers   Opportunities   Resources
          |            |            |
          +------------+------------+
                       |
                       v
              Personalized Experience

Potential personalization information includes:

- Academic background
- Current class or year
- Interests
- Favorite subjects
- Skills
- Hobbies
- Career goals
- Higher education preferences
- Preferred countries

The recommendation logic is still under development.

---

## API Request Flow

A standard API request follows this structure:

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
Service Layer
   |
   v
API Response
   |
   v
Frontend

For protected endpoints:

Frontend
   |
   | Request + JWT
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
Business Logic
   |
   v
PostgreSQL
   |
   v
Response

---

## Backend Structure

The backend is organized into separate modules for routing, schemas, services, and utilities.

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

This structure may evolve as development continues.

---

## Backend Layers

### Application Entry Point

main.py initializes the FastAPI application and registers the required routers and configuration.

### Routers

Routers define the API endpoints exposed by the backend.

Current routers include:

- home.py
- user.py

### Schemas

Schemas define and validate the structure of API request and response data.

Current schema modules include:

- auth.py
- user.py
- funding.py
- competition.py
- exam.py
- resource.py
- benefit.py

### Services

The service layer contains application specific business logic.

The current service module is:

- user_service.py

Additional service modules can be added as new functionality is developed.

### Utilities

The utility layer contains reusable backend functionality.

Current utilities include:

- jwt.py
- password.py

These utilities support authentication and password security.

---

## Security Architecture

Magellan follows basic application security practices.

### Password Storage

Passwords must never be stored as plaintext.

Plaintext Password
        |
        v
Password Hashing
        |
        v
Password Hash
        |
        v
Database

When a user logs in, the supplied password is verified against the stored password hash.

### JWT Authentication

JWTs are used to authenticate users when accessing protected resources.

The JWT contains authentication information required by the backend to identify an authenticated request.

### Environment Variables

Sensitive values should be stored in environment variables rather than directly in source code.

Examples include:

- Database credentials
- JWT secret keys
- API keys
- Other application secrets

Sensitive values must not be committed to the repository.

---

## Separation of Responsibilities

| Component	| Responsibility |
|---|---|
| Frontend | User interface and user interaction |
| Backend |	APIs, validation, authentication, and business logic |
| PostgreSQL |	Persistent data storage |
| Routers |	API endpoint handling |
| Schemas |	Request and response validation |
| Services |	Application business logic |
| Reusable | backend functionality |
| AI Component |	Planned personalized assistance and recommendations |

---

## Scalability

The modular architecture allows Magellan to be extended as the project grows.

Possible future architectural additions include:

- Recommendation services
- AI services
- Caching
- Background processing
- Notification services
- External data integrations
- Advanced search
- Analytics
- Additional authorization mechanisms
- Database optimization
- API versioning

These components are future considerations and are not necessarily part of the current implementation.

---

## Current Architecture Status

The current architecture is based on:

- Python
- FastAPI
- PostgreSQL
- Pydantic schemas
- Modular API routers
- Service modules
- Authentication utilities
- JWT based authentication

The frontend, backend, and database are being developed as separate parts of the project.

Some components described in this document represent planned functionality and may not yet be implemented.

