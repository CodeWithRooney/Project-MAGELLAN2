import React, { useState } from "react";
import "./StudentProfile.css";
import { useNavigate } from "react-router-dom";


import { indianStates } from "./indianStates";
import { educationBoards } from "./educationBoards";
import { technicalSkills } from "./technicalSkills";
import { softSkills } from "./softSkills";
import { hobbies } from "./hobbies";

const StudentProfile = () => {
    const navigate = useNavigate();

  // ================= CURRENT STEP =================
  const [step, setStep] = useState(1);

  // ================= PERSONAL INFO =================
  const [personalData, setPersonalData] = useState({
    name: "",
    state: "",
    school: "",
    classYear: ""
  });

  // ================= ACADEMIC INFO =================
  const [academicData, setAcademicData] = useState({
    percentage: "",
    highestSubject: "",
    lowestSubject: "",
    favouriteSubject: "",
    board: ""
  });

  // ================= SKILLS =================
  const [skillsData, setSkillsData] = useState({
    technical: [],
    soft: [],
    hobbies: [],

    customTechnical: "",
    customSoft: "",
    customHobby: "",
     careerGoal: ""
  });

  // ================= HANDLE PERSONAL =================
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;

    setPersonalData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ================= HANDLE ACADEMIC =================
  const handleAcademicChange = (e) => {
    const { name, value } = e.target;

    setAcademicData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ================= MULTI SELECT =================
  const handleMultiSelect = (category, value) => {

    setSkillsData((prev) => {

      const exists = prev[category].includes(value);

      return {

        ...prev,

        [category]: exists
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value]

      };

    });

  };

  // ================= CUSTOM INPUT =================
  const handleCustomInput = (e) => {

    const { name, value } = e.target;

    setSkillsData((prev) => ({
      ...prev,
      [name]: value
    }));

  };
  // ================= NEXT =================

  const handlePersonalSubmit = () => {

    if (
      personalData.name === "" ||
      personalData.state === "" ||
      personalData.school === "" ||
      personalData.classYear === ""
    ) {

      alert("Please fill all fields.");

      return;
    }

    if (personalData.classYear !== "Class 10") {

      alert("Prototype currently supports only Class 10 students.");

      return;
    }

    setStep(2);

  };

  // ================= NEXT =================

  const handleAcademicSubmit = () => {

    if (

      academicData.percentage === "" ||
      academicData.highestSubject === "" ||
      academicData.lowestSubject === "" ||
      academicData.favouriteSubject === "" ||
      academicData.board === ""

    ) {

      alert("Please fill all academic details.");

      return;

    }

    if (academicData.board !== "CBSE") {

      alert("Prototype currently supports only CBSE students.");

      return;

    }

    setStep(3);

  };

  // ================= FINAL SUBMIT =================

const handleFinalSubmit = () => {
  console.log({
    personalData,
    academicData,
    skillsData
  });

  alert("Profile Submitted Successfully!");

  navigate("/dashboard");
};
  return (

<div className="student-profile-page">

    {/* LEFT PANEL */}

    <div className="profile-sidebar">

        <div
            className={`sidebar-item ${step===1 ? "active" : step>1 ? "completed" : ""}`}
        >

            <div className="circle"></div>

            <button>

                PERSONAL PROFILE

            </button>

        </div>

        <div
            className={`sidebar-item ${step===2 ? "active" : step>2 ? "completed" : ""}`}
        >

            <div className="circle"></div>

            <button>

                EDUCATION

            </button>

        </div>

        <div
            className={`sidebar-item ${step===3 ? "active" : ""}`}
        >

            <div className="circle"></div>

            <button>

                SKILLS AND KNOWLEDGE

            </button>

        </div>

    </div>

    {/* RIGHT PANEL */}

    <div className="profile-content">

{/* ================= PERSONAL INFORMATION ================= */}


{step === 1 && (

<div className="personal-section">

    <div className="form-row">

        <div className="input-group">

            <label>NAME</label>

            <input
                type="text"
                name="name"
                value={personalData.name}
                onChange={handlePersonalChange}
                placeholder="Enter your name"
            />

        </div>

        <div className="input-group">

            <label>STATE</label>

            <select
                name="state"
                value={personalData.state}
                onChange={handlePersonalChange}
            >

                <option value="">
                    Select State
                </option>

                {indianStates.map((state) => (

                    <option
                        key={state}
                        value={state}
                    >

                        {state}

                    </option>

                ))}

            </select>

        </div>

    </div>

    <div className="form-row">

        <div className="input-group">

            <label>SCHOOL / UNIVERSITY</label>

            <input
                type="text"
                name="school"
                value={personalData.school}
                onChange={handlePersonalChange}
                placeholder="Enter School / University"
            />

        </div>

        <div className="input-group">

            <label>CLASS / YEAR</label>

            <select
                name="classYear"
                value={personalData.classYear}
                onChange={handlePersonalChange}
            >

                <option value="">
                    Select
                </option>

                <option disabled>Class 9</option>

                <option value="Class 10">Class 10</option>

                <option disabled>Class 11</option>

                <option disabled>Class 12</option>

                <option disabled>1st Year</option>

                <option disabled>2nd Year</option>

                <option disabled>3rd Year</option>

                <option disabled>4th Year</option>

                <option disabled>PG</option>

                <option disabled>Job</option>

                <option disabled>Startup</option>

                <option disabled>Studying Abroad</option>

            </select>

        </div>

    </div>

    <div className="button-container">

        <button
            className="submit-btn"
            onClick={handlePersonalSubmit}
        >

            SUBMIT

        </button>

    </div>

</div>

)}


{/* ================= ACADEMIC INFORMATION ================= */}

{step === 2 && (

<div className="academic-section">

    <div className="form-row">

        <div className="input-group">

            <label>PERCENTAGE (LAST EXAM)</label>

            <input
                type="number"
                name="percentage"
                value={academicData.percentage}
                onChange={handleAcademicChange}
                placeholder="Enter Percentage"
                min="0"
                max="100"
            />

        </div>

        <div className="input-group">

            <label>HIGHEST SCORING SUBJECT</label>

            <input
                type="text"
                name="highestSubject"
                value={academicData.highestSubject}
                onChange={handleAcademicChange}
                placeholder="Enter Subject"
            />

        </div>

    </div>

    <div className="form-row">

        <div className="input-group">

            <label>LOWEST SCORING SUBJECT</label>

            <input
                type="text"
                name="lowestSubject"
                value={academicData.lowestSubject}
                onChange={handleAcademicChange}
                placeholder="Enter Subject"
            />

        </div>

        <div className="input-group">

            <label>FAVOURITE SUBJECT</label>

            <input
                type="text"
                name="favouriteSubject"
                value={academicData.favouriteSubject}
                onChange={handleAcademicChange}
                placeholder="Enter Subject"
            />

        </div>

    </div>

    <div className="form-row center-row">

        <div className="input-group board-group">

            <label>BOARD OF STUDYING</label>

            <select
                name="board"
                value={academicData.board}
                onChange={handleAcademicChange}
            >

                <option value="">
                    Select Board
                </option>

                {educationBoards.map((board) => (

                    <option
        key={board}
        value={board}
        disabled={board !== "CBSE"}
    >
        {board}
    </option>

                ))}

            </select>

        </div>

    </div>

    <div className="button-container">

        <button
            className="submit-btn"
            onClick={handleAcademicSubmit}
        >

            SUBMIT

        </button>

    </div>

</div>

)}

{/* ================= SKILLS & INTERESTS ================= */}

{step === 3 && (

<div className="skills-section">

    {/* ================= TECHNICAL SKILLS ================= */}

    <div className="skill-block">

        <h3>TECHNICAL SKILLS</h3>

        <div className="checkbox-grid">

            {technicalSkills.map((skill) => (

                <label key={skill} className="checkbox-item">

                    <input
                        type="checkbox"
                        checked={skillsData.technical.includes(skill)}
                        onChange={() =>
                            handleMultiSelect("technical", skill)
                        }
                    />

                    <span>{skill}</span>

                </label>

            ))}

        </div>

        <input
            type="text"
            name="customTechnical"
            placeholder="Other Technical Skill"
            value={skillsData.customTechnical}
            onChange={handleCustomInput}
        />

    </div>



    {/* ================= SOFT SKILLS ================= */}

    <div className="skill-block">

        <h3>SOFT SKILLS</h3>

        <div className="checkbox-grid">

            {softSkills.map((skill) => (

                <label key={skill} className="checkbox-item">

                    <input
                        type="checkbox"
                        checked={skillsData.soft.includes(skill)}
                        onChange={() =>
                            handleMultiSelect("soft", skill)
                        }
                    />

                    <span>{skill}</span>

                </label>

            ))}

        </div>

        <input
            type="text"
            name="customSoft"
            placeholder="Other Soft Skill"
            value={skillsData.customSoft}
            onChange={handleCustomInput}
        />

    </div>



    {/* ================= HOBBIES ================= */}

    <div className="skill-block">

        <h3>HOBBIES</h3>

        <div className="checkbox-grid">

            {hobbies.map((hobby) => (

                <label key={hobby} className="checkbox-item">

                    <input
                        type="checkbox"
                        checked={skillsData.hobbies.includes(hobby)}
                        onChange={() =>
                            handleMultiSelect("hobbies", hobby)
                        }
                    />

                    <span>{hobby}</span>

                </label>

            ))}

        </div>

        <input
            type="text"
            name="customHobby"
            placeholder="Other Hobby"
            value={skillsData.customHobby}
            onChange={handleCustomInput}
        />

    </div>
    {/* ================= CAREER GOAL ================= */}

<div className="skill-block career-goal-block">

    <h3>CAREER GOAL DECIDED</h3>

    <select
        name="careerGoal"
        value={skillsData.careerGoal}
        onChange={handleCustomInput}
        className="career-select"
    >
        <option value="">Select Option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Maybe">Maybe</option>
    </select>

</div>



    <div className="button-container">

        <button
            className="submit-btn"
            onClick={handleFinalSubmit}
        >

            SUBMIT PROFILE

        </button>

    </div>

</div>

)}
    </div>

</div>

);

};

export default StudentProfile;