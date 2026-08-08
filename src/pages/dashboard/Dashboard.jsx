
import React, { useRef, useState } from "react";
import "./Dashboard.css";
import Chatbot from "../chatbot/Chatbot";
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { UserRound } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const careerRef = useRef(null);
  const [openCareer, setOpenCareer] = useState(null);

  const handleBegin = () => {
    careerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const roadmapSteps = [
    "Class 10",
    "Choose Stream",
    "Class 11",
    "Class 12",
    "Entrance Exam",
    "College",
    "Skills",
    "Projects",
    "Internship",
    "Placement",
    "Higher Studies",
    "Career",
  ];

  const infoCards = [
    {
      title: "Government Schemes and Scholarships",
      purpose:
        "Help students find financial support and government benefits",
      points: [
        "Central and state government scholarships",
        "Merit-based scholarships",
        "Financial assistance schemes",
        "Eligibility criteria",
        "Last date to apply",
        "Direct application links",
      ],
    },
    {
      title: "Upcoming Exams and Olympiads",
      purpose:
        "Inform students about important exams they can participate in to improve their profile and skills",
      points: [
        "National and international Olympiads",
        "Competitive exams",
        "Registration dates",
        "Eligibility criteria",
        "Exam schedule",
        "Official application links",
      ],
    },
    {
      title: "Competitions and Challenges",
      purpose:
        "Help students participate in competitions that strengthen their profile and practical skills",
      points: [
        "Coding competitions",
        "Science exhibitions",
        "Quiz competitions",
        "Debate competitions",
        "Essay writing competitions",
        "Innovation challenges",
        "Robotics competitions",
      ],
    },
  ];

  const careers = [
  {
  title: "Software Engineer",
  page: "/software-developer",
  description:
    "Software Engineers create websites, mobile apps and computer software that people use every day.",
  interest:
    "If you enjoy solving puzzles, using computers and creating new things, this career can be exciting.",
},
  {
    title: "Doctor",
    page: "/doctor",
    description:
      "Doctors help people stay healthy by treating diseases and preventing illnesses.",
    interest:
      "If you enjoy Biology and love helping people, this career can be very rewarding.",
  },
  {
    title: "Data Scientist",
    page: "/datascientist",
    description:
      "Data Scientists study information and use it to solve real-world problems.",
    interest:
      "Perfect for students who enjoy Mathematics, coding and logical thinking.",
  },
  {
    title: "Lawyer",
    page: "/lawyer",
    description:
      "Lawyers help people understand laws and fight for justice.",
    interest:
      "A great career for students who enjoy speaking, debating and solving problems.",
  },
  {
    title: "Pilot",
    page: "/pilot",
    description:
      "Pilots fly airplanes safely and transport passengers or goods.",
    interest:
      "Ideal for students who dream of flying and love adventure.",
  },
{
  title: "Army Officer",
  page: "/army",
  description:
    "Leads soldiers, plans military operations, and serves the nation with courage and responsibility.",
  interest:
    "Great for students who are disciplined, physically active, confident, and interested in leadership and serving the country.",
},
{
title: "Air Force Officer",
page: "/airforce",
description:
"Leads air operations, commands personnel, and serves the nation through aviation, technology, and strategic defence.",
interest:
"Great for students who are disciplined, physically fit, confident, interested in aviation and technology, and passionate about serving the country.",
},
{
title: "Navy Officer",
page: "/navy",
description:
"Leads naval personnel, commands operations at sea, and protects the nation's maritime interests with courage and responsibility.",
interest:
"Great for students who are disciplined, physically fit, confident, interested in the sea, technology, and leadership, and passionate about serving the country.",
},

  {
    title: "IAS Officer",
    page: "/ias",
    description:
      "IAS Officers manage government departments and improve society.",
    interest:
      "Perfect for students who want to serve the country.",
  },
  {
    title: "Teacher",
    page: "/teacher",
    description:
      "Teachers educate and inspire future generations.",
    interest:
      "Best for students who enjoy explaining concepts to others.",
  },
  {
    title: "Chartered Accountant",
    page: "/ca",
    description:
      "Chartered Accountants manage finance and taxation.",
    interest:
      "Best for students who enjoy numbers and business.",
  },
  {
    title: "Chartered Financial Analyst",
    page: "/cfa",
    description:
      "Chartered Financial Analysts specialize in investment management and financial analysis.",
    interest:
      "Best for students who enjoy numbers, finance, and analytical thinking.",
  },
  {
title: "Actor",
page: "/actor",
description:
"Performs characters in films, television, theatre, and digital media, bringing stories and emotions to life through acting.",
interest:
"Great for students who are creative, expressive, confident, observant, and passionate about storytelling and performance.",
},
{
title: "Archaeologist",
page: "/archaeologist",
description:
"Studies ancient cultures, excavates archaeological sites, and preserves historical artefacts and heritage.",
interest:
"Great for students who are curious, research-oriented, patient, interested in history and ancient civilizations, and enjoy fieldwork and discovery.",
},
{
  title: "YouTuber",
  page: "/youtuber",
  description:
    "Creates engaging video content, builds an online audience, and grows a personal brand through storytelling, creativity, and digital media.",
  interest:
    "Great for students who are creative, confident, expressive, curious about trends, interested in media and entertainment, and enjoy communicating ideas with an audience.",
},
{
title: "Psychologist",
page: "/psychologist",
description:
"Studies human behavior and mental processes, helps people understand and manage emotional and psychological challenges, and supports their mental well-being through assessment, counselling, and evidence-based approaches.",
interest:
"Great for students who are empathetic, patient, good listeners, curious about human behavior, interested in mental health, emotionally aware, and enjoy helping and communicating with people.",
},
];

  return (
    <div className="mainpage">

      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img src="./images/logo.svg" alt="Logo" />
        </div>
      </div>

      {/* Welcome */}
      <div className="welcome">
        <div className="welcome-text">
          <h1>Welcome Ananyaa</h1>
        </div>

        <div className="build">
          <h2>Let's Build your future...</h2>
        </div>
      </div>

      {/* Profile */}
      <div className="profile-text">
        <h2>Profile Card</h2>
      </div>

      <div className="profile">
        <div className="card">
          <div className="icon">
            <UserRound size={200} strokeWidth={2.5} color="#02071A" />
          </div>

          <div className="name">Ananyaa</div>
          <div className="class">Class 10</div>
          <div className="board">CBSE</div>
        </div>

        <button className="start" onClick={handleBegin}>
          Let's Begin
        </button>
      </div>

      <div className="career-section" ref={careerRef}>

  <h1>Explore Careers</h1>

  {careers.map((career, index) => (

    <div className="career-card" key={index}>

      <div
        className="career-header"
        onClick={() =>
          setOpenCareer(openCareer === index ? null : index)
        }
      >

        <h2>{career.title}</h2>

        <button className="expand-btn">

          {openCareer === index ? (
            <Minus size={28} 
          />
          ) : (
            <Plus size={28}  />
          )}

        </button>

      </div>

      {openCareer === index && (

        <div className="career-content">

          <h3>What does this career do?</h3>

          <p>{career.description}</p>

          <h3>Why should you explore this career?</h3>

          <p>{career.interest}</p>

          <button
  className="continue-btn"
  onClick={() => navigate(career.page)}
>
  Continue
</button>

        </div>

      )}

    </div>

  ))}

</div>



      {/* Information Cards */}
      <div className="info-section">
        {infoCards.map((card, index) => (
          <div className="info-card" key={index}>

            <h2>{card.title}</h2>

            <h3>
              Purpose - <span>{card.purpose}</span>
            </h3>

            <ul>
              {card.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      <Chatbot />

    </div>
  );
};

export default Dashboard;