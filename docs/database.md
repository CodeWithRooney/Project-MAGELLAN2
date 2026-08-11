# Magellan Database Documentation

## Overview

Magellan uses PostgreSQL as its primary relational database.

The database stores structured information required by the platform, including user profiles, career related information, educational opportunities, competitions, examinations, learning resources, and other platform data.

The database is accessed through the backend rather than directly by the frontend.

---

## Database Architecture

The general data flow is:

Frontend
   |
   | HTTP / REST API
   v
FastAPI Backend
   |
   | Database Operations
   v
PostgreSQL

The frontend should never connect directly to the PostgreSQL database.

All database operations should pass through the backend API and application logic.

---

## Database Responsibilities

The database is responsible for:

- Persistent storage of application data
- Storing user information
- Storing user preferences
- Storing career related information
- Storing funding and scholarship opportunities
- Storing competitions and other opportunities
- Storing examinations
- Storing learning resources
- Storing benefits
- Maintaining relationships between related data
- Supporting retrieval and filtering of platform information

---

## Main Data Categories

The database is expected to contain several major categories of information.

### Users

The user data represents students using Magellan.

Potential information includes:

- User ID
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
- Study abroad preference
- Preferred countries
- Authentication related information
- Account related timestamps

The exact fields should follow the finalized database schema and user models.

### Careers

Career data represents different career paths that students can explore.

Potential information may include:

- Career ID
- Career name
- Description
- Required skills
- Relevant subjects
- Educational requirements
- Related fields
- Career opportunities

Career data will eventually support career exploration and personalization.

### Funding

Funding data represents scholarships and other financial assistance opportunities.

Potential information may include:

- Funding ID
- Name
- Description
- Provider
- Eligibility criteria
- Application information
- Deadline
- Country or region
- Official application source

The exact fields will depend on the finalized funding model.

### Competitions

Competition data represents opportunities such as:

- Hackathons
- Olympiads
- Academic competitions
- Technical competitions
- Other student opportunities

Potential information may include:

- Competition ID
- Name
- Description
- Organizer
- Eligibility
- Deadline
- Location
- Registration information
- Official source

### Examinations

Examination data represents examinations that may be relevant to students.

Potential information may include:

- Exam ID
- Examination name
- Description
- Eligibility
- Relevant academic level
- Application information
- Important dates
- Official source

### Resources

Resources represent learning and preparation materials that students can use to develop relevant knowledge and skills.

Potential resources may include:

- Resource ID
- Resource name
- Description
- Resource type
- Subject or skill
- Difficulty level
- Source
- Related career

### Benefits

Benefits represent additional opportunities or advantages that may be relevant to students.

Potential information may include:

- Benefit ID
- Name
- Description
- Eligibility
- Provider
- Availability
- Related opportunity or category

---

## Current Backend Schema Modules

The backend currently contains schema modules corresponding to several database related entities.

backend/
└── schemas/
    ├── auth.py
    ├── user.py
    ├── funding.py
    ├── competition.py
    ├── exam.py
    ├── resource.py
    └── benefit.py

These schemas define the structure of data exchanged through the API.

They should not automatically be considered the final database schema because API schemas and database models serve different purposes.

---

## User Data and Personalization

User information is important for Magellan's personalization system.

The general relationship is:

User Profile
     |
     +---- Academic Background
     |
     +---- Interests
     |
     +---- Subjects
     |
     +---- Skills
     |
     +---- Hobbies
     |
     +---- Career Goals
     |
     +---- Higher Education Preferences
     |
     v
Personalization System
     |
     +---- Careers
     +---- Funding
     +---- Competitions
     +---- Examinations
     +---- Resources
     +---- Learning Roadmaps

The database provides the structured information required by the personalization layer.

---

## Relationships

As the database is developed, related entities should be connected using appropriate relational database relationships.

A conceptual relationship may look like:

User
 |
 +----> Interests
 |
 +----> Skills
 |
 +----> Career Goals
 |
 +----> Preferred Countries
 |
 v
Personalization
 |
 +----> Careers
 |
 +----> Funding
 |
 +----> Competitions
 |
 +----> Exams
 |
 +----> Resources

The exact relationships, foreign keys, and junction tables should be documented once the final database design is established.

---

## Database Design Principles

The database should follow standard relational database design principles.

### Primary Keys

Each major entity should have a unique primary key.

For example:

User        → user_id
Career      → career_id
Funding     → funding_id
Competition → competition_id
Exam        → exam_id
Resource    → resource_id
Benefit     → benefit_id

The final naming convention should remain consistent throughout the project.

### Foreign Keys

Foreign keys should be used where relationships between entities require them.

For example, a user specific record may reference the corresponding user through user_id.

### Data Integrity

The database should maintain data integrity through:

- Primary keys
- Foreign keys
- Appropriate data types
- Unique constraints
- Not null constraints where required
- Appropriate validation
- Referential integrity

### Normalization

The database should avoid unnecessary duplication of data.

Related information should be separated into appropriate tables and connected through relationships where necessary.

The level of normalization should balance data integrity with practical query performance.

---

## Authentication Data

Authentication related information should be stored securely.

Passwords must never be stored in plaintext.

Only the required password hash should be stored.

Sensitive authentication secrets such as JWT secret keys should not be stored in database records unless there is a specific architectural requirement.

Authentication configuration should instead be managed through secure environment variables.

---

## Database Security

The following practices should be followed:

- Never expose the PostgreSQL database directly to the frontend.
- Never commit database credentials to Git.
- Store sensitive credentials in environment variables.
- Use strong database credentials.
- Restrict database access to authorized services.
- Validate data before inserting it into the database.
- Apply appropriate database permissions.
- Avoid exposing sensitive database information through API responses.

---

## Database Connection

The backend communicates with PostgreSQL using a database connection configured through the application's environment.

A typical configuration may use:

DATABASE_URL

The actual environment variable name should match the implementation used by the project.

The database connection configuration should not contain hardcoded credentials.

---

## Database Development Workflow

Database changes should be coordinated with backend development.

The general workflow is:

Database Requirement
        |
        v
Database Design
        |
        v
Schema / Model Definition
        |
        v
Database Implementation
        |
        v
Backend Integration
        |
        v
API Integration
        |
        v
Testing

Changes to the database structure should be reviewed before being integrated into the main project.

---

## Data Sources

Magellan may eventually collect information from multiple sources for categories such as:

- Scholarships
- Competitions
- Examinations
- Universities
- Learning resources
- Career information

Whenever possible, information should be obtained from reliable and preferably official sources.

The system should preserve source information where appropriate so users can verify important details themselves.

---

## Data Freshness

Some Magellan data will be time sensitive.

Examples include:

- Scholarship deadlines
- Competition registration dates
- Examination dates
- Application deadlines
- University application periods

Therefore, the long term system should support updating and reviewing time sensitive information.

Outdated information should not be presented as current.

---

## Future Database Improvements

As Magellan grows, the database may be extended to support:

-  recommendation data
- University and course data
- Learning roadmaps
- User progress tracking
- Saved opportunities
- Application tracking
- Notifications
- Recommendation history
- User activity
- AI related personalization data
- Data source tracking
- Opportunity expiration tracking
- Advanced search and filtering

These features should be added only when they are required by the application.

---

## Current Database Status

PostgreSQL has been selected as the database technology for Magellan.

The database structure is being developed alongside the backend and frontend.

