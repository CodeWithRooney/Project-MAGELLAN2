# Magellan Setup Guide

## Overview

This guide explains how to set up the Magellan project for local development.

The current backend uses Python, FastAPI, and PostgreSQL.

The project is still under development, so some setup steps and dependencies may change as the architecture evolves.

## Prerequisites

Before setting up Magellan, install the following:

- Python
- PostgreSQL
- Git
- A code editor such as Visual Studio Code

The backend currently uses Python 3.13.

## Clone the Repository

Clone the Magellan repository from GitHub.

git clone https://github.com/CodeWithRooney/Project-Magellan.git

Move into the project directory.

cd Project-Magellan

## Project Structure

The project is organized into separate areas for the main application components.

Project-Magellan/
│
├── backend/
├── frontend/
├── database/
├── docs/
├── .gitignore
└── README.md

The structure may change as development continues.

## Backend Setup

Move into the backend directory.

cd backend

## Create a Virtual Environment

Create a Python virtual environment.

python -m venv venv

### Windows

Activate the virtual environment using:

venv\Scripts\activate

### macOS or Linux

Activate the virtual environment using:

source venv/bin/activate

After activation, the terminal should indicate that the virtual environment is active.

## Install Dependencies

Install the required Python packages using the project's dependency file if one is available.

pip install -r requirements.txt

If the dependency file is not yet available, install the packages required by the current backend implementation and update the dependency file afterward.

The project currently uses technologies including:

- FastAPI
- Uvicorn
- Pydantic
- PostgreSQL related packages
- JWT related packages
- Password hashing related packages

The exact package versions should be maintained in the project's dependency configuration.

## PostgreSQL Setup

Install PostgreSQL and ensure that the PostgreSQL server is running.

Create a database for Magellan.

The database name can be chosen according to the project's current configuration.

Example:

magellan

The database credentials should be stored securely and should not be committed to Git.

## Environment Variables

Magellan uses environment variables for sensitive configuration.

Create a local .env file in the appropriate backend directory if required by the current implementation.

Example configuration:

DATABASE_URL=your_database_connection_string
JWT_SECRET_KEY=your_secret_key
JWT_ALGORITHM=your_algorithm
JWT_ACCESS_TOKEN_EXPIRE_MINUTES=your_expiration_time

The exact variable names must match those used by the backend implementation.

Do not use the example values as production credentials.

## Important Security Rule

Never commit the .env file or other files containing secrets to GitHub.

The .gitignore file should include the appropriate environment files.

Example:

.env
venv/
__pycache__/
*.pyc

The exact .gitignore configuration should follow the requirements of the project.

## Database Connection

The backend should obtain the PostgreSQL connection information from the configured environment variables.

The general architecture is:

Environment Variables
        |
        v
FastAPI Backend
        |
        v
PostgreSQL

The frontend should not connect directly to PostgreSQL.

## Run the Backend

From the appropriate backend directory, start the FastAPI application with Uvicorn.

python -m uvicorn main:app --reload

The --reload option automatically reloads the development server when source files change.

This option should be used for development only.

## Verify the Backend

After starting the server, the application should be available at:

http://127.0.0.1:8000

The interactive FastAPI documentation is available at:

http://127.0.0.1:8000/docs

The alternative ReDoc documentation is available at:

http://127.0.0.1:8000/redoc

These interfaces can be used to verify that the API is running correctly.

## Running the Backend Without Reloading

For a normal server process, run:

python -m uvicorn main:app

For local development, --reload is generally more convenient.

## Verify PostgreSQL

Before testing database dependent endpoints, confirm that:

- PostgreSQL is installed
- PostgreSQL is running
- The Magellan database exists
- Database credentials are correct
- The backend can connect to PostgreSQL

If the backend cannot connect to the database, check the database URL and PostgreSQL service first.

## Common Setup Problems

### Uvicorn Not Found

If the uvicorn command is not recognized, use:

python -m uvicorn main:app --reload

This ensures that Uvicorn is executed through the active Python environment.

### Virtual Environment Not Activated

If installed packages cannot be found, verify that the virtual environment is activated.

On Windows:

venv\Scripts\activate

On macOS or Linux:

source venv/bin/activate

### Package Installation Errors

If a package fails to install:

1. Check the Python version.
2. Confirm that the virtual environment is active.
3. Upgrade pip if necessary.
4. Check the package version specified by the project.
5. Verify that the package supports the current Python version.

Example:

python --version
pip --version

### Database Connection Errors

Check:

- PostgreSQL is running.
- The database exists.
- The username is correct.
- The password is correct.
- The host and port are correct.
- The DATABASE_URL is correctly configured.

### Environment Variable Errors

If the backend reports missing configuration values, verify that:

- The .env file exists where expected.
- The variable names match the backend code.
- The environment variables are loaded correctly.
- No accidental spaces or formatting errors exist.

## Development Setup Workflow

A typical local setup follows this process:

Clone Repository
       |
       v
Enter Project Directory
       |
       v
Create Virtual Environment
       |
       v
Activate Virtual Environment
       |
       v
Install Dependencies
       |
       v
Install / Configure PostgreSQL
       |
       v
Create Database
       |
       v
Configure Environment Variables
       |
       v
Run FastAPI Backend
       |
       v
Open /docs
       |
       v
Test API

## Frontend Setup

The frontend is developed separately from the backend.

Frontend setup instructions should be added here once the frontend technology, package manager, dependencies, and final project structure are established.

The frontend should communicate with the backend through the documented API rather than connecting directly to the database.

## Database Setup

Database initialization and schema setup should follow the database implementation used by the project.

As database migrations and models are finalized, the exact database setup commands should be added to this section.

Until then, PostgreSQL should be configured according to the current database development requirements.

## Git Setup

After setting up the project locally, verify the Git repository.

git status

Check the configured remote:

git remote -v

The project should use the official Magellan repository as its remote.

## Recommended Development Process

After completing the initial setup:

Setup Environment
       |
       v
Run Backend
       |
       v
Verify API
       |
       v
Verify Database Connection
       |
       v
Create Development Branch
       |
       v
Implement Changes
       |
       v
Test Changes
       |
       v
Commit Changes
       |
       v
Push Branch
       |
       v
Create Pull Request