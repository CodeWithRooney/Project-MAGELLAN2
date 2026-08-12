import React, { useState } from "react";
import "./StudentProfile.css";
import { useNavigate } from "react-router-dom";

import { indianStates } from "./indianStates";
import { educationBoards } from "./educationBoards";
import { technicalSkills } from "./technicalSkills";
import { softSkills } from "./softSkills";
import { hobbies } from "./hobbies";

// =====================================================
// INTEREST OPTIONS
// =====================================================

const interestOptions = [
    "Technology and Computing",
    "Science and Research",
    "Mathematics and Analytics",
    "Engineering",
    "Medicine and Healthcare",
    "Business and Entrepreneurship",
    "Finance and Economics",
    "Law and Public Service",
    "Arts and Media",
    "Teaching and Academia",
    "Psychology and Human Behaviour",
    "Social Impact and NGOs",
    "History and Heritage",
    "Defence and Armed Forces",
    "Writing and Communication",
];

// =====================================================
// FAVOURITE SUBJECT OPTIONS
// =====================================================

const subjectOptions = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "English",
    "Hindi",
    "Social Science",
    "History",
    "Geography",
    "Political Science",
    "Economics",
    "Accountancy",
    "Business Studies",
    "Psychology",
    "Physical Education",
    "Art",
    "Other",
];

// =====================================================
// REGISTERED MAGELLAN CAREERS
// =====================================================

const careerOptions = [
    "Software Developer",
    "Data Scientist",
    "Chartered Accountant (CA)",
    "Chartered Financial Analyst (CFA)",
    "Doctor",
    "Dentist",
    "Mechanical / Civil Engineering",
    "Aerospace Engineering",
    "IAS / IPS / IFS",
    "Army / Navy / Air Force",
    "Entrepreneur",
    "Content Creator",
    "Video Editor",
    "Lawyer",
    "School Teacher",
    "Professor",
    "NGO Manager",
    "Psychologist",
    "Actor",
    "Historian",
];

// =====================================================
// STEP ICONS
// =====================================================

const PersonalProfileIcon = () => (
    <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <circle
            cx="12"
            cy="8"
            r="3.5"
        />

        <path
            d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"
        />
    </svg>
);

const InterestsIcon = () => (
    <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M9 18h6" />
        <path d="M9.5 21h5" />

        <path
            d="M8.2 14.5C6.8 13.3 6 11.5 6 9.5a6 6 0 1 1 12 0c0 2-.8 3.8-2.2 5"
        />

        <path d="M9 14.5h6" />
    </svg>
);

const SkillsGoalsIcon = () => (
    <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <circle
            cx="12"
            cy="12"
            r="8"
        />

        <circle
            cx="12"
            cy="12"
            r="4"
        />

        <circle
            cx="12"
            cy="12"
            r="1.5"
        />
    </svg>
);

// =====================================================
// STUDENT PROFILE
// =====================================================

const StudentProfile = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState(1);

    // =====================================================
    // PERSONAL INFORMATION
    // =====================================================

    const [personalData, setPersonalData] = useState({
        full_name: "",
        age: "",
        gender: "",
        state: "",
        school_college: "",
        current_class_year: "",
        board: "",
    });

    // =====================================================
    // INTERESTS
    // =====================================================

    const [interestData, setInterestData] = useState({
        interest: "",
        favorite_subject: "",
    });

    // =====================================================
    // SKILLS
    // =====================================================

    const [skillsData, setSkillsData] = useState({
        technical: [],
        soft: [],
        hobbies: [],

        customTechnical: "",
        customSoft: "",
        customHobby: "",
    });

    // =====================================================
    // CAREER INFORMATION
    // =====================================================

    const [careerData, setCareerData] = useState({
        career_goal_decided: "",
        career_goal: "",
        higher_studies_abroad: "",
    });

    // =====================================================
    // HANDLE PERSONAL DATA
    // =====================================================

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;

        setPersonalData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // =====================================================
    // HANDLE INTEREST DATA
    // =====================================================

    const handleInterestChange = (e) => {
        const { name, value } = e.target;

        setInterestData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // =====================================================
    // STEP 2 SUBMIT
    // =====================================================

    const handleInterestSubmit = () => {
        if (interestData.interest === "") {
            alert("Please select your primary interest.");
            return;
        }

        if (interestData.favorite_subject === "") {
            alert("Please select your favourite subject.");
            return;
        }

        setStep(3);
    };

    // =====================================================
    // HANDLE CAREER DATA
    // =====================================================

    const handleCareerChange = (e) => {
        const { name, value } = e.target;

        setCareerData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (
            name === "career_goal_decided" &&
            value !== "Yes"
        ) {
            setCareerData((prev) => ({
                ...prev,
                career_goal: "",
            }));
        }
    };

    // =====================================================
    // HANDLE MULTI SELECT
    // =====================================================

    const handleMultiSelect = (category, value) => {
        setSkillsData((prev) => {
            const exists = prev[category].includes(value);

            return {
                ...prev,

                [category]: exists
                    ? prev[category].filter(
                        (item) => item !== value
                    )
                    : [
                        ...prev[category],
                        value,
                    ],
            };
        });
    };

    // =====================================================
    // HANDLE CUSTOM INPUT
    // =====================================================

    const handleCustomInput = (e) => {
        const { name, value } = e.target;

        setSkillsData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // =====================================================
    // STEP 1 SUBMIT
    // =====================================================

    const handlePersonalSubmit = () => {
        if (
            personalData.full_name === "" ||
            personalData.age === "" ||
            personalData.gender === "" ||
            personalData.state === "" ||
            personalData.school_college === "" ||
            personalData.current_class_year === "" ||
            personalData.board === ""
        ) {
            alert(
                "Please fill all personal and education details."
            );

            return;
        }

        const age = Number(personalData.age);

        if (age < 10 || age > 100) {
            alert(
                "Age must be between 10 and 100 years."
            );

            return;
        }

        if (
            personalData.current_class_year !== "Class 10"
        ) {
            alert(
                "The current prototype supports Class 10 students only."
            );

            return;
        }

        if (
            personalData.board !== "CBSE"
        ) {
            alert(
                "The current prototype supports CBSE students only."
            );

            return;
        }

        setStep(2);
    };

    // =====================================================
    // STEP 3 SUBMIT
    // =====================================================

    const handleFinalSubmit = async () => {
        if (
            skillsData.technical.length === 0 &&
            skillsData.customTechnical.trim() === ""
        ) {
            alert(
                "Please select at least one technical skill."
            );

            return;
        }

        if (
            skillsData.soft.length === 0 &&
            skillsData.customSoft.trim() === ""
        ) {
            alert(
                "Please select at least one soft skill."
            );

            return;
        }

        if (
            skillsData.hobbies.length === 0 &&
            skillsData.customHobby.trim() === ""
        ) {
            alert(
                "Please select at least one hobby."
            );

            return;
        }

        if (careerData.career_goal_decided === "") {
            alert(
                "Please select whether you have decided your career goal."
            );

            return;
        }

        if (
            careerData.career_goal_decided === "Yes" &&
            careerData.career_goal === ""
        ) {
            alert(
                "Please select your career goal."
            );

            return;
        }

        if (careerData.higher_studies_abroad === "") {
            alert(
                "Please select whether you have plans for higher studies abroad."
            );

            return;
        }

        const technicalSkills = [
            ...skillsData.technical,

            ...(skillsData.customTechnical.trim()
                ? [skillsData.customTechnical.trim()]
                : []),
        ].join(", ");

        const softSkills = [
            ...skillsData.soft,

            ...(skillsData.customSoft.trim()
                ? [skillsData.customSoft.trim()]
                : []),
        ].join(", ");

        const hobbyList = [
            ...skillsData.hobbies,

            ...(skillsData.customHobby.trim()
                ? [skillsData.customHobby.trim()]
                : []),
        ].join(", ");

        const profileData = {
            full_name:
                personalData.full_name,

            age:
                Number(personalData.age),

            gender:
                personalData.gender,

            state:
                personalData.state,

            school_college:
                personalData.school_college,

            board:
                personalData.board,

            current_class_year:
                personalData.current_class_year,

            favorite_subject:
                interestData.favorite_subject,

            technical_skills:
                technicalSkills,

            soft_skills:
                softSkills,

            interests:
                interestData.interest,

            hobbies:
                hobbyList,

            career_goal_decided:
                careerData.career_goal_decided,

            career_goal:
                careerData.career_goal_decided === "Yes"
                    ? careerData.career_goal
                    : null,

            higher_studies_abroad:
                careerData.higher_studies_abroad,
        };

        try {
            const token =
                localStorage.getItem(
                    "access_token"
                );

            if (!token) {
                alert(
                    "You are not logged in. Please login again."
                );

                navigate("/login");

                return;
            }

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/user/profile`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`,
                    },

                    body:
                        JSON.stringify(
                            profileData
                        ),
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                if (response.status === 401) {
                    alert(
                        "Your session has expired. Please login again."
                    );

                    localStorage.removeItem(
                        "access_token"
                    );

                    navigate("/login");

                    return;
                }

                alert(
                    data.detail ||
                    "Could not create your profile."
                );

                return;
            }

            alert(
                "Profile Submitted Successfully!"
            );

            navigate("/dashboard");

        } catch (error) {
            alert(
                "Could not connect to the server. Please make sure the backend is running."
            );
        }
    };

    // =====================================================
    // STEP INFORMATION
    // =====================================================

    const stepInformation = {
        1: {
            title: "Tell us about yourself",
            description:
                "Help Magellan understand your background and education.",
        },

        2: {
            title: "Discover what interests you",
            description:
                "Tell us what you enjoy learning and exploring.",
        },

        3: {
            title: "Build your direction",
            description:
                "Your skills, hobbies and goals help Magellan personalize your path.",
        },
    };

    return (
        <div className="student-profile-page">

            {/* ================================================= */}
            {/* TOP PROGRESS INDICATOR */}
            {/* ================================================= */}

            <div className="profile-sidebar">

                <div className="progress-header">

                    <div className="progress-steps">

                        {/* PERSONAL PROFILE */}

                        <div
                            className={`sidebar-item ${
                                step === 1
                                    ? "active"
                                    : step > 1
                                        ? "completed"
                                        : ""
                            }`}
                        >

                            <div className="circle">
                                <PersonalProfileIcon />
                            </div>

                            <button type="button">
                                PERSONAL PROFILE
                            </button>

                        </div>

                        {/* INTERESTS */}

                        <div
                            className={`sidebar-item ${
                                step === 2
                                    ? "active"
                                    : step > 2
                                        ? "completed"
                                        : ""
                            }`}
                        >

                            <div className="circle">
                                <InterestsIcon />
                            </div>

                            <button type="button">
                                INTERESTS
                            </button>

                        </div>

                        {/* SKILLS AND GOALS */}

                        <div
                            className={`sidebar-item ${
                                step === 3
                                    ? "active"
                                    : ""
                            }`}
                        >

                            <div className="circle">
                                <SkillsGoalsIcon />
                            </div>

                            <button type="button">
                                SKILLS AND GOALS
                            </button>

                        </div>

                    </div>

                    <div className="progress-info">

                        <span>
                            STEP {step} OF 3
                        </span>

                    </div>

                    <div className="progress-track">

                        <div
                            className="progress-fill"
                            style={{
                                width:
                                    `${((step - 1) / 2) * 100}%`,
                            }}
                        />

                    </div>

                </div>

            </div>

            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

            <div className="profile-content">

                {/* ================================================= */}
                {/* STEP HEADING */}
                {/* ================================================= */}

                <div className="profile-form-wrapper">

                    <div className="step-introduction">

                        <div className="step-eyebrow">
                            MAGELLAN PROFILE
                        </div>

                        <h1>
                            {stepInformation[step].title}
                        </h1>

                        <p>
                            {stepInformation[step].description}
                        </p>

                    </div>

                    {/* ================================================= */}
                    {/* STEP 1 */}
                    {/* ================================================= */}

                    {step === 1 && (

                        <div className="personal-section">

                            <div className="form-row">

                                <div className="input-group">

                                    <label>
                                        NAME
                                    </label>

                                    <input
                                        type="text"
                                        name="full_name"
                                        value={
                                            personalData.full_name
                                        }
                                        onChange={
                                            handlePersonalChange
                                        }
                                        placeholder="Enter your name"
                                    />

                                </div>

                                <div className="input-group">

                                    <label>
                                        AGE
                                    </label>

                                    <input
                                        type="number"
                                        name="age"
                                        value={
                                            personalData.age
                                        }
                                        onChange={
                                            handlePersonalChange
                                        }
                                        placeholder="Enter your age"
                                        min="10"
                                        max="100"
                                    />

                                </div>

                            </div>

                            <div className="form-row">

                                <div className="input-group">

                                    <label>
                                        GENDER
                                    </label>

                                    <select
                                        name="gender"
                                        value={
                                            personalData.gender
                                        }
                                        onChange={
                                            handlePersonalChange
                                        }
                                    >

                                        <option value="">
                                            Select Gender
                                        </option>

                                        <option value="Male">
                                            Male
                                        </option>

                                        <option value="Female">
                                            Female
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>

                                        <option value="Prefer not to say">
                                            Prefer not to say
                                        </option>

                                    </select>

                                </div>

                                <div className="input-group">

                                    <label>
                                        STATE
                                    </label>

                                    <select
                                        name="state"
                                        value={
                                            personalData.state
                                        }
                                        onChange={
                                            handlePersonalChange
                                        }
                                    >

                                        <option value="">
                                            Select State
                                        </option>

                                        {indianStates.map(
                                            (state) => (

                                                <option
                                                    key={state}
                                                    value={state}
                                                >
                                                    {state}
                                                </option>

                                            )
                                        )}

                                    </select>

                                </div>

                            </div>

                            <div className="form-row">

                                <div className="input-group">

                                    <label>
                                        SCHOOL / UNIVERSITY
                                    </label>

                                    <input
                                        type="text"
                                        name="school_college"
                                        value={
                                            personalData.school_college
                                        }
                                        onChange={
                                            handlePersonalChange
                                        }
                                        placeholder="Enter School / University"
                                    />

                                </div>

                                <div className="input-group">

                                    <label>
                                        CURRENT CLASS / YEAR
                                    </label>

                                    <select
                                        name="current_class_year"
                                        value={
                                            personalData.current_class_year
                                        }
                                        onChange={
                                            handlePersonalChange
                                        }
                                    >

                                        <option value="">
                                            Select Class / Year
                                        </option>

                                        <option
                                            value="Class 9"
                                            disabled
                                        >
                                            Class 9
                                        </option>

                                        <option value="Class 10">
                                            Class 10
                                        </option>

                                        <option
                                            value="Class 11"
                                            disabled
                                        >
                                            Class 11
                                        </option>

                                        <option
                                            value="Class 12"
                                            disabled
                                        >
                                            Class 12
                                        </option>

                                        <option
                                            value="1st Year"
                                            disabled
                                        >
                                            1st Year
                                        </option>

                                        <option
                                            value="2nd Year"
                                            disabled
                                        >
                                            2nd Year
                                        </option>

                                        <option
                                            value="3rd Year"
                                            disabled
                                        >
                                            3rd Year
                                        </option>

                                        <option
                                            value="4th Year"
                                            disabled
                                        >
                                            4th Year
                                        </option>

                                        <option
                                            value="PG"
                                            disabled
                                        >
                                            PG
                                        </option>

                                        <option
                                            value="Job"
                                            disabled
                                        >
                                            Job
                                        </option>

                                        <option
                                            value="Startup"
                                            disabled
                                        >
                                            Startup
                                        </option>

                                        <option
                                            value="Studying Abroad"
                                            disabled
                                        >
                                            Studying Abroad
                                        </option>

                                    </select>

                                </div>

                            </div>

                            <div className="form-row center-row">

                                <div className="input-group board-group">

                                    <label>
                                        BOARD
                                    </label>

                                    <select
                                        name="board"
                                        value={
                                            personalData.board
                                        }
                                        onChange={
                                            handlePersonalChange
                                        }
                                    >

                                        <option value="">
                                            Select Board
                                        </option>

                                        {educationBoards.map(
                                            (board) => (

                                                <option
                                                    key={board}
                                                    value={board}
                                                    disabled={
                                                        board !== "CBSE"
                                                    }
                                                >
                                                    {board}
                                                </option>

                                            )
                                        )}

                                    </select>

                                </div>

                            </div>

                            <div className="button-container">

                                <button
                                    className="submit-btn next-btn"
                                    onClick={
                                        handlePersonalSubmit
                                    }
                                >
                                    NEXT
                                    <span>→</span>
                                </button>

                            </div>

                        </div>

                    )}

                    {/* ================================================= */}
                    {/* STEP 2 */}
                    {/* ================================================= */}

                    {step === 2 && (

                        <div className="academic-section">

                            <div className="form-row">

                                <div className="input-group">

                                    <label>
                                        PRIMARY INTEREST
                                    </label>

                                    <select
                                        name="interest"
                                        value={
                                            interestData.interest
                                        }
                                        onChange={
                                            handleInterestChange
                                        }
                                    >

                                        <option value="">
                                            Select your primary interest
                                        </option>

                                        {interestOptions.map(
                                            (interest) => (

                                                <option
                                                    key={interest}
                                                    value={interest}
                                                >
                                                    {interest}
                                                </option>

                                            )
                                        )}

                                    </select>

                                </div>

                                <div className="input-group">

                                    <label>
                                        FAVOURITE SUBJECT
                                    </label>

                                    <select
                                        name="favorite_subject"
                                        value={
                                            interestData.favorite_subject
                                        }
                                        onChange={
                                            handleInterestChange
                                        }
                                    >

                                        <option value="">
                                            Select Favourite Subject
                                        </option>

                                        {subjectOptions.map(
                                            (subject) => (

                                                <option
                                                    key={subject}
                                                    value={subject}
                                                >
                                                    {subject}
                                                </option>

                                            )
                                        )}

                                    </select>

                                </div>

                            </div>

                            <div className="navigation-buttons">

                                <button
                                    className="back-btn"
                                    onClick={() => setStep(1)}
                                >
                                    ← BACK
                                </button>

                                <button
                                    className="submit-btn"
                                    onClick={
                                        handleInterestSubmit
                                    }
                                >
                                    NEXT
                                    <span>→</span>
                                </button>

                            </div>

                        </div>

                    )}

                    {/* ================================================= */}
                    {/* STEP 3 */}
                    {/* ================================================= */}

                    {step === 3 && (

                        <div className="skills-section">

                            <div className="skill-block">

                                <h3>
                                    TECHNICAL SKILLS
                                </h3>

                                <div className="checkbox-grid">

                                    {technicalSkills.map(
                                        (skill) => (

                                            <label
                                                key={skill}
                                                className="checkbox-item"
                                            >

                                                <input
                                                    type="checkbox"
                                                    checked={
                                                        skillsData
                                                            .technical
                                                            .includes(skill)
                                                    }
                                                    onChange={() =>
                                                        handleMultiSelect(
                                                            "technical",
                                                            skill
                                                        )
                                                    }
                                                />

                                                <span>
                                                    {skill}
                                                </span>

                                            </label>

                                        )
                                    )}

                                </div>

                                <input
                                    type="text"
                                    name="customTechnical"
                                    placeholder="Other Technical Skill"
                                    value={
                                        skillsData.customTechnical
                                    }
                                    onChange={
                                        handleCustomInput
                                    }
                                />

                            </div>

                            <div className="skill-block">

                                <h3>
                                    SOFT SKILLS
                                </h3>

                                <div className="checkbox-grid">

                                    {softSkills.map(
                                        (skill) => (

                                            <label
                                                key={skill}
                                                className="checkbox-item"
                                            >

                                                <input
                                                    type="checkbox"
                                                    checked={
                                                        skillsData
                                                            .soft
                                                            .includes(skill)
                                                    }
                                                    onChange={() =>
                                                        handleMultiSelect(
                                                            "soft",
                                                            skill
                                                        )
                                                    }
                                                />

                                                <span>
                                                    {skill}
                                                </span>

                                            </label>

                                        )
                                    )}

                                </div>

                                <input
                                    type="text"
                                    name="customSoft"
                                    placeholder="Other Soft Skill"
                                    value={
                                        skillsData.customSoft
                                    }
                                    onChange={
                                        handleCustomInput
                                    }
                                />

                            </div>

                            <div className="skill-block">

                                <h3>
                                    HOBBIES
                                </h3>

                                <div className="checkbox-grid">

                                    {hobbies.map(
                                        (hobby) => (

                                            <label
                                                key={hobby}
                                                className="checkbox-item"
                                            >

                                                <input
                                                    type="checkbox"
                                                    checked={
                                                        skillsData
                                                            .hobbies
                                                            .includes(hobby)
                                                    }
                                                    onChange={() =>
                                                        handleMultiSelect(
                                                            "hobbies",
                                                            hobby
                                                        )
                                                    }
                                                />

                                                <span>
                                                    {hobby}
                                                </span>

                                            </label>

                                        )
                                    )}

                                </div>

                                <input
                                    type="text"
                                    name="customHobby"
                                    placeholder="Other Hobby"
                                    value={
                                        skillsData.customHobby
                                    }
                                    onChange={
                                        handleCustomInput
                                    }
                                />

                            </div>

                            <div className="skill-block career-goal-block">

                                <h3>
                                    CAREER GOAL DECIDED
                                </h3>

                                <select
                                    name="career_goal_decided"
                                    value={
                                        careerData
                                            .career_goal_decided
                                    }
                                    onChange={
                                        handleCareerChange
                                    }
                                    className="career-select"
                                >

                                    <option value="">
                                        Select Option
                                    </option>

                                    <option value="Yes">
                                        Yes
                                    </option>

                                    <option value="No">
                                        No
                                    </option>

                                    <option value="Maybe">
                                        Maybe
                                    </option>

                                </select>

                                {careerData.career_goal_decided === "Yes" && (

                                    <select
                                        name="career_goal"
                                        value={
                                            careerData.career_goal
                                        }
                                        onChange={
                                            handleCareerChange
                                        }
                                        className="career-select"
                                    >

                                        <option value="">
                                            Select Career
                                        </option>

                                        {careerOptions.map(
                                            (career) => (

                                                <option
                                                    key={career}
                                                    value={career}
                                                >
                                                    {career}
                                                </option>

                                            )
                                        )}

                                    </select>

                                )}

                            </div>

                            <div className="skill-block">

                                <h3>
                                    PLANS FOR HIGHER STUDIES ABROAD
                                </h3>

                                <select
                                    name="higher_studies_abroad"
                                    value={
                                        careerData
                                            .higher_studies_abroad
                                    }
                                    onChange={
                                        handleCareerChange
                                    }
                                    className="career-select"
                                >

                                    <option value="">
                                        Select Option
                                    </option>

                                    <option value="Yes">
                                        Yes
                                    </option>

                                    <option value="No">
                                        No
                                    </option>

                                    <option value="Not Sure">
                                        Not Sure
                                    </option>

                                </select>

                            </div>

                            <div className="navigation-buttons">

                                <button
                                    className="back-btn"
                                    onClick={() => setStep(2)}
                                >
                                    ← BACK
                                </button>

                                <button
                                    className="submit-btn"
                                    onClick={
                                        handleFinalSubmit
                                    }
                                >
                                    SUBMIT PROFILE
                                    <span>→</span>
                                </button>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default StudentProfile;