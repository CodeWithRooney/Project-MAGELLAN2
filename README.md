<img width="500" height="500" alt="Logo" src="https://github.com/user-attachments/assets/c2c44e11-8186-461f-b483-6764a7e72f44" />


# Magellan

Magellan is a personalized career guidance platform designed to help students make informed decisions about their education and career.

It brings career information, educational opportunities, scholarships, competitions, examinations, learning resources, and personalized guidance into one platform.

The goal of Magellan is to reduce the confusion students face when choosing a career and help them understand not only what they can pursue, but also how they can work towards their goals.

---

## Problem Statement

Choosing a career can be difficult when students do not have access to reliable and personalized guidance.

Information about careers, scholarships, universities, competitions, examinations, learning resources, and other opportunities is often scattered across different platforms. Students may not know which opportunities are relevant to them or what steps they should take to reach a particular career.

This can lead to uninformed decisions, missed opportunities, and uncertainty about the future.

---

## Our Solution

Magellan brings important career and education related information together in one platform.

Students create a personalized profile containing information such as their academic background, interests, subjects, skills, hobbies, career goals, and higher education preferences.

This information can then be used to provide a more personalized experience.

Magellan aims to help students:

- Explore career paths that match their interests and abilities
- Understand different career options and their requirements
- Discover scholarships and financial aid opportunities
- Explore universities and higher education opportunities
- Find competitions, hackathons, Olympiads, internships, and other opportunities
- Discover relevant examinations and resources
- Follow learning roadmaps for their career goals
- Receive personalized career guidance
- Use AI assisted guidance to support career exploration and planning

---

## Key Features

### User Authentication

- User registration
- User login
- Secure password hashing
- JWT based authentication

### Personalized User Profile

Students can create a profile containing information such as:

- Academic background
- Interests
- Favorite subjects
- Skills
- Hobbies
- Career goals
- Interest in studying abroad
- Preferred countries for higher education

### Career Exploration

Explore different career paths and understand their education requirements, skills, and opportunities.

### Scholarships and Funding

Discover scholarships and funding opportunities relevant to students and their educational goals.

### Universities and Higher Education

Explore universities and higher education opportunities based on interests and future plans.

### Competitions and Opportunities

Discover opportunities such as:

- Competitions
- Hackathons
- Olympiads
- Internships

### Examinations

Discover examinations relevant to different academic and career paths.

### Learning Resources

Find useful resources for learning and preparing for future academic and career goals.

### Personalized Learning Roadmaps

Get structured guidance on the skills, education, and steps required to work towards a chosen career.

### AI Assisted Guidance

Use AI assisted guidance to support career exploration, recommendations, and planning based on the student's profile and goals.

---

## Technology Stack

### Backend

- Python
- FastAPI
- Pydantic
- PostgreSQL
- Uvicorn

### Database

- PostgreSQL
- SQLAlchemy
- Alembic

### Frontend 

- React.js
- Lucide React
- Vite
- Tailwind CSS
- ReactRouter

### Authentication 

- JWT
- Argon2 password hashing through the configured password library

### AI

- Google Gemini API

### Email

- Brevo email API

### Deployment 

- Vercel
- Render
- Render PostgreSQL 

### Development Tools

- Git
- GitHub
- Visual Studio Code

---

## Project Structure

Project-MAGELLAN2/
│
├── backend/
│   ├── main.py
│   ├── models/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   ├── utils/
│   ├── database/
│   ├── migrations/
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── ...
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   └── vercel.json
│
├── docs/
│   ├── architecture.md
│   ├── api.md
│   ├── authentication.md
│   ├── database.md
│   ├── development.md
│   ├── features.md
│   └── setup.md
│
├── .gitignore
└── README.md

---

## API Documentation

Magellan's backend is built with FastAPI, which provides automatically generated interactive API documentation.

When the backend is running locally:

- Swagger UI is available at `/docs`
- ReDoc is available at `/redoc`

---

## Getting Started

### Prerequisites

- Python 3.x
- PostgreSQL
- Git

### Clone the Repository

    git clone <repository-url>
    cd Project-MAGELLAN2

### Backend Setup

    cd backend
    python -m venv venv

Activate the virtual environment.

#### Windows

    venv\Scripts\activate

#### Linux / macOS

    source venv/bin/activate

Install the required dependencies:

    pip install -r requirements.txt

### Frontend Setup

Navigate to the frontend directory.

    cd frontend

Install the required dependencies.

    npm install

Start the development server.

    npm run dev

The frontend will then be available at `http://localhost:5173`.

### Environment Variables

Create a `.env` file and configure the required environment variables.

These include:

- Database connection details
- JWT configuration
- Secret keys
- Frontend URL
- Brevo email configuration 
- Other application settings

### Security

Do not commit the `.env` file or expose API keys, database credentials, JWT secrets, or other sensitive configuration values.

Use environment variables provided by the deployment platform for production configuration.

### Run the Full Application

Start the backend and frontend development servers separately.

Backend

    cd backend
    python -m uvicorn main:app --reload

Frontend

    cd frontend
    npm run dev

The frontend communicates with the FastAPI backend through the configured API URL.

---

## Development Status

Magellan is currently under active development.

The backend, frontend, database, authentication, personalization, and other platform features are being developed and integrated progressively.

Some features described in this README represent the intended functionality and may still be under development.

---

## Future Scope

Future versions of Magellan may include:

- Advanced career recommendation systems
- Improved AI based career guidance
- Career comparison tools
- University and course comparison
- Skill gap analysis
- Personalized learning plans
- Student progress tracking
- Opportunity deadline reminders
- Application tracking
- Expanded scholarship and funding databases
- Expanded competition and internship databases
- Integration with additional educational resources
- Live mentors and career counsellors
- Mentor matching based on career interests and goals
- One to one career counselling sessions
- Parent and mentor dashboards for collaborative guidance
- AI assisted preparation for interviews, entrance exams and applications
- Real time opportunity and deadline updates
- Peer communities for students with similar career interests

---

## Vision

Magellan aims to make career exploration and planning simpler and more accessible for students by bringing relevant information, opportunities, resources, and personalized guidance into one platform.

Our long term goal is to help students move from uncertainty about their future to a clear and actionable path towards their chosen career.

---

## Team

| Team Member | Responsibility |
|---|---|
| Ronit | Backend and API Development |
| Rajdip | Frontend Development |
| Ananyaa | Frontend Development |
| Ritikarsh | Database Design and Management |
| Team | Project Management, Product Development, Testing and Documentation, Product Deployment|

---

## License

This project is currently being developed as a student project.

License information will be added after the project's licensing decision is finalized.