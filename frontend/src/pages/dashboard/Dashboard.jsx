import React, { useEffect, useRef, useState } from "react";
import "./Dashboard.css";
import Chatbot from "../chatbot/Chatbot";
import {
    Plus,
    Minus,
    UserRound,
    Pencil,
    ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const careerRef = useRef(null);
    const [openCareer, setOpenCareer] = useState(null);

    const [profile, setProfile] = useState(null);
    const [loadingProfile, setLoadingProfile] = useState(true);
    const [profileError, setProfileError] = useState("");

    // =====================================================
    // FETCH USER PROFILE
    // =====================================================

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("access_token");

                if (!token) {
                    navigate("/login");
                    return;
                }

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/user/profile`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                console.log(
                    "Dashboard profile response:",
                    data
                );

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem(
                            "access_token"
                        );

                        localStorage.removeItem(
                            "user_id"
                        );

                        localStorage.removeItem(
                            "user_email"
                        );

                        navigate("/login");

                        return;
                    }

                    setProfileError(
                        data.detail ||
                        "Could not load your profile."
                    );

                    setLoadingProfile(false);

                    return;
                }

                setProfile(data);
                setLoadingProfile(false);

            } catch (error) {
                console.error(
                    "Could not fetch profile:",
                    error
                );

                setProfileError(
                    "Could not connect to the server."
                );

                setLoadingProfile(false);
            }
        };

        fetchProfile();
    }, [navigate]);


    // =====================================================
    // SCROLL TO CAREERS
    // =====================================================

    const handleBegin = () => {
        careerRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };


    // =====================================================
    // DISPLAY HELPER
    // =====================================================

    const displayValue = (
        value,
        fallback = "Not provided"
    ) => {
        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {
            return fallback;
        }

        return value;
    };


    // =====================================================
    // CAREER GOAL
    // =====================================================

    const careerGoal =
        profile?.career_goal_decided === "Yes"
            ? displayValue(
                profile?.career_goal,
                "Not provided"
            )
            : profile?.career_goal_decided === "No"
                ? "Not decided yet"
                : profile?.career_goal_decided === "Maybe"
                    ? "Still exploring"
                    : displayValue(
                        profile?.career_goal,
                        "Not provided"
                    );


    // =====================================================
    // INFORMATION CARDS
    // =====================================================

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


    // =====================================================
    // CAREERS
    // =====================================================

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
        "Indian Air Force officers lead, operate and manage missions across flying, engineering, weapon systems, administration, logistics, education, accounts and meteorology. The career combines military training, responsibility, technical knowledge, leadership and service to the nation.",

    interest:
        "Explore this career if you are interested in aviation, defence, technology, leadership, discipline, teamwork and high responsibility. Becoming an Air Force officer does not always mean becoming a pilot. Your entry route and academic background can lead to Flying, Ground Duty Technical or Ground Duty Non Technical branches.",
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
        "Actors bring characters and stories to life through performance in films, television, theatre, web series, advertisements, voice work and digital media. The work involves understanding characters, rehearsing, performing, taking direction and adapting to different audiences and production environments.",

    interest:
        "Explore this career if you enjoy performing, storytelling, observing people, expressing emotions, working creatively and improving through practice. Acting does not require one fixed academic stream or degree, but it does require strong communication, discipline, resilience, continuous practice and the ability to handle auditions and rejection.",
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


    // =====================================================
    // LOADING
    // =====================================================

    if (loadingProfile) {
        return (
            <div className="dashboard-loading">
                <p>Loading your profile...</p>
            </div>
        );
    }


    // =====================================================
    // ERROR
    // =====================================================

    if (profileError) {
        return (
            <div className="dashboard-loading">
                <p>{profileError}</p>

                <button
                    className="dashboard-retry"
                    onClick={() =>
                        window.location.reload()
                    }
                >
                    TRY AGAIN
                </button>
            </div>
        );
    }


    return (
        <div className="mainpage">


            {/* ================================================= */}
            {/* NAVBAR */}
            {/* ================================================= */}

            <div className="navbar">

                <div className="logo">
                    <img
                        src="/images/logo.svg"
                        alt="Magellan Logo"
                    />
                </div>

            </div>


            {/* ================================================= */}
            {/* WELCOME */}
            {/* ================================================= */}

            <div className="welcome">

                <div className="welcome-text">
                    <h1>
                        Welcome{" "}
                        {displayValue(
                            profile?.full_name,
                            "Student"
                        )}
                    </h1>
                </div>

                <div className="build">
                    <h2>
                        Let's build your future...
                    </h2>
                </div>

            </div>


            {/* ================================================= */}
            {/* PROFILE HEADING */}
            {/* ================================================= */}

            <div className="profile-text">

                <h2>
                    Profile Card
                </h2>

            </div>


            {/* ================================================= */}
            {/* PROFILE CARD */}
            {/* ================================================= */}

            <div className="profile">

                <div className="profile-card">


                    {/* ================= PROFILE HEADER ================= */}

                    <div className="profile-card-header">

                        <div className="profile-identity">

                            <div className="profile-icon">
                                <UserRound
                                    size={72}
                                    strokeWidth={2}
                                    color="#02071A"
                                />
                            </div>


                            <div className="profile-name-section">

                                <div className="profile-name">
                                    {displayValue(
                                        profile?.full_name,
                                        "Student"
                                    )}
                                </div>

                                <div className="profile-academic">
                                    {displayValue(
                                        profile?.current_class_year,
                                        "Class not provided"
                                    )}

                                    {" • "}

                                    {displayValue(
                                        profile?.board,
                                        "Board not provided"
                                    )}
                                </div>

                            </div>

                        </div>


                        {/* ================= EDIT PROFILE ================= */}

                        <button
                            className="edit-profile"
                            type="button"
                            onClick={() =>
                                navigate("/studentprofile")
                            }
                        >

                            <Pencil
                                size={17}
                                strokeWidth={2}
                            />

                            <span>
                                Edit Profile
                            </span>

                        </button>

                    </div>


                    {/* ================= PROFILE DETAILS ================= */}

                    <div className="profile-details">

                        <div className="profile-detail">

                            <span>
                                Age
                            </span>

                            <strong>
                                {displayValue(
                                    profile?.age
                                )}
                            </strong>

                        </div>


                        <div className="profile-detail">

                            <span>
                                Interests
                            </span>

                            <strong>
                                {displayValue(
                                    profile?.interests
                                )}
                            </strong>

                        </div>


                        <div className="profile-detail">

                            <span>
                                Favourite Subjects
                            </span>

                            <strong>
                                {displayValue(
                                    profile?.favorite_subject
                                )}
                            </strong>

                        </div>


                        <div className="profile-detail">

                            <span>
                                Career Goal
                            </span>

                            <strong>
                                {careerGoal}
                            </strong>

                        </div>

                    </div>

                </div>

            </div>


            {/* ================================================= */}
            {/* CONTINUE YOUR JOURNEY */}
            {/* ================================================= */}

            <div className="continue-section">

    <button
        className="continue-journey"
        onClick={handleBegin}
        type="button"
        aria-label="Continue to Explore Careers"
    >

        <span>
            Continue Your Journey
        </span>

        <ChevronDown
            size={32}
            strokeWidth={2}
        />

    </button>

</div>


            {/* ================================================= */}
            {/* EXPLORE CAREERS
                WE ARE NOT CHANGING THIS SECTION YET
            ================================================= */}

            <div
                className="career-section"
                ref={careerRef}
            >

                <h1>
                    Explore Careers
                </h1>


                {careers.map(
                    (career, index) => (

                        <div
                            className="career-card"
                            key={index}
                        >

                            <div
                                className="career-header"
                                onClick={() =>
                                    setOpenCareer(
                                        openCareer === index
                                            ? null
                                            : index
                                    )
                                }
                            >

                                <h2>
                                    {career.title}
                                </h2>


                                <button
                                    className="expand-btn"
                                    type="button"
                                >

                                    {openCareer === index ? (
                                        <Minus size={28} />
                                    ) : (
                                        <Plus size={28} />
                                    )}

                                </button>

                            </div>


                            {openCareer === index && (

                                <div className="career-content">

                                    <h3>
                                        What does this career do?
                                    </h3>

                                    <p>
                                        {career.description}
                                    </p>

                                    <h3>
                                        Why should you explore this career?
                                    </h3>

                                    <p>
                                        {career.interest}
                                    </p>

                                    <button
                                        className="continue-btn"
                                        onClick={() =>
                                            navigate(
                                                career.page
                                            )
                                        }
                                    >
                                        Continue
                                    </button>

                                </div>

                            )}

                        </div>
                    )
                )}

            </div>


            {/* ================================================= */}
            {/* INFORMATION CARDS
            ================================================= */}

            <div className="info-section">

                {infoCards.map(
                    (card, index) => (

                        <div
                            className="info-card"
                            key={index}
                        >

                            <h2>
                                {card.title}
                            </h2>

                            <h3>
                                Purpose
                                <span>
                                    {" "}
                                    {card.purpose}
                                </span>
                            </h3>

                            <ul>

                                {card.points.map(
                                    (point, i) => (
                                        <li key={i}>
                                            {point}
                                        </li>
                                    )
                                )}

                            </ul>

                        </div>
                    )
                )}

            </div>


            {/* ================================================= */}
            {/* CHATBOT */}
            {/* ================================================= */}

            <Chatbot />

        </div>
    );
};

export default Dashboard;