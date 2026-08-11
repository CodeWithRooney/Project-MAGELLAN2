import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Actor.css";

import {
    GraduationCap,
    BookOpen,
    FileCheck,
    Clapperboard,
    Users,
    TrendingUp,
    Clock3,
    IndianRupee,
    ShieldCheck,
    ChevronDown,
    ArrowLeft,
    Mic2,
    Camera,
    Dumbbell,
    Award,
    WalletCards,
} from "lucide-react";


const roadmap = [

    {
        title: "Choose Your Stream",

        icon: <GraduationCap size={28} />,

        items: [

            {
                type: "heading",
                text: "Eligible Streams",
            },

            {
                type: "item",
                text: "Humanities / Arts",
            },

            {
                type: "item",
                text: "Commerce",
            },

            {
                type: "item",
                text: "Science",
            },

            {
                type: "heading",
                text: "Recommended Strategy",
            },

            {
                type: "item",
                text: "You can choose any stream after Class 10.",
            },

            {
                type: "item",
                text: "Humanities / Arts can help develop literature, character study, psychology and language foundations.",
            },

            {
                type: "item",
                text: "Focus on communication, observation and creative expression regardless of your stream.",
            },

        ],
    },


    {
        title: "Understand Academic Requirements",

        icon: <BookOpen size={28} />,

        items: [

            {
                type: "heading",
                text: "Class 12",
            },

            {
                type: "item",
                text: "Passing Class 12 is generally sufficient to begin pursuing acting opportunities.",
            },

            {
                type: "item",
                text: "There is no universal Class 12 percentage requirement for film, television or theatre auditions.",
            },

            {
                type: "heading",
                text: "Performing Arts Degrees",
            },

            {
                type: "item",
                text: "Some colleges offering theatre, drama or performing arts degrees may have their own Class 12 eligibility requirements.",
            },

            {
                type: "heading",
                text: "Important",
            },

            {
                type: "item",
                text: "Academic marks are usually less important to casting decisions than acting ability, training, portfolio quality and suitability for a role.",
            },

        ],
    },


    {
        title: "Choose Your Training Route",

        icon: <FileCheck size={28} />,

        items: [

            {
                type: "heading",
                text: "Route A — Professional Acting Training",
            },

            {
                type: "item",
                text: "Join a recognised acting, theatre or performing arts institute.",
            },

            {
                type: "item",
                text: "Develop voice, movement, improvisation, character work and stage presence.",
            },

            {
                type: "heading",
                text: "Route B — Degree in Performing Arts",
            },

            {
                type: "item",
                text: "Study theatre, drama or performing arts through a structured degree programme.",
            },

            {
                type: "item",
                text: "Gain experience through productions and performances during college.",
            },

            {
                type: "heading",
                text: "Route C — Degree + Acting",
            },

            {
                type: "item",
                text: "Pursue another academic degree while building acting experience through theatre, workshops, short films and auditions.",
            },

            {
                type: "item",
                text: "This route can provide an additional career option while you establish yourself as an actor.",
            },

        ],
    },


    {
        title: "Build Your Acting Skills",

        icon: <Clapperboard size={28} />,

        items: [

            {
                type: "heading",
                text: "Performance Skills",
            },

            {
                type: "item",
                text: "Facial expressions and emotional expression",
            },

            {
                type: "item",
                text: "Body language and movement",
            },

            {
                type: "item",
                text: "Voice modulation and diction",
            },

            {
                type: "item",
                text: "Dialogue delivery",
            },

            {
                type: "item",
                text: "Improvisation",
            },

            {
                type: "item",
                text: "Character observation and interpretation",
            },

            {
                type: "heading",
                text: "Camera Acting",
            },

            {
                type: "item",
                text: "Learn eyelines, marks, framing and subtle expressions.",
            },

            {
                type: "item",
                text: "Practise performing naturally for close-up and medium shots.",
            },

            {
                type: "heading",
                text: "Supporting Skills",
            },

            {
                type: "item",
                text: "Basic dance or movement training can expand opportunities.",
            },

            {
                type: "item",
                text: "Language and accent training can help with different roles.",
            },

            {
                type: "item",
                text: "Public speaking and communication can improve audition performance.",
            },

        ],
    },


    {
        title: "Build Your Portfolio",

        icon: <Camera size={28} />,

        items: [

            {
                type: "heading",
                text: "Essential Materials",
            },

            {
                type: "item",
                text: "Professional or clean, well-lit headshots",
            },

            {
                type: "item",
                text: "Short introduction or profile slate",
            },

            {
                type: "item",
                text: "Monologue recordings",
            },

            {
                type: "item",
                text: "Acting showreel",
            },

            {
                type: "heading",
                text: "Build Real Experience",
            },

            {
                type: "item",
                text: "Participate in theatre productions.",
            },

            {
                type: "item",
                text: "Work on student films and short films.",
            },

            {
                type: "item",
                text: "Attend legitimate acting workshops.",
            },

            {
                type: "item",
                text: "Document strong performances for your portfolio.",
            },

            {
                type: "heading",
                text: "Avoid Scams",
            },

            {
                type: "item",
                text: "Be cautious of agencies or casting opportunities demanding large upfront payments in exchange for guaranteed roles.",
            },

        ],
    },


    {
        title: "Find Auditions & Opportunities",

        icon: <Users size={28} />,

        items: [

            {
                type: "heading",
                text: "Primary Opportunities",
            },

            {
                type: "item",
                text: "Films",
            },

            {
                type: "item",
                text: "Web series and OTT productions",
            },

            {
                type: "item",
                text: "Television",
            },

            {
                type: "item",
                text: "Theatre productions",
            },

            {
                type: "item",
                text: "Commercial advertisements",
            },

            {
                type: "heading",
                text: "Additional Opportunities",
            },

            {
                type: "item",
                text: "Short films",
            },

            {
                type: "item",
                text: "Voice acting and dubbing",
            },

            {
                type: "item",
                text: "Audiobooks",
            },

            {
                type: "item",
                text: "Digital content",
            },

            {
                type: "heading",
                text: "Audition Pipeline",
            },

            {
                type: "item",
                text: "Casting call → Profile submission → Audition → Callback → Selection",
            },

        ],
    },


    {
        title: "Develop Your Professional Network",

        icon: <Mic2 size={28} />,

        items: [

            {
                type: "heading",
                text: "Build Genuine Connections",
            },

            {
                type: "item",
                text: "Work with theatre groups and independent filmmakers.",
            },

            {
                type: "item",
                text: "Attend legitimate workshops and industry events.",
            },

            {
                type: "item",
                text: "Build relationships through your work rather than relying only on social media.",
            },

            {
                type: "heading",
                text: "Professional Presence",
            },

            {
                type: "item",
                text: "Keep your portfolio and showreel updated.",
            },

            {
                type: "item",
                text: "Maintain professional communication with casting teams.",
            },

            {
                type: "item",
                text: "Be punctual and prepared for auditions and shoots.",
            },

        ],
    },


    {
        title: "Build a Sustainable Career",

        icon: <TrendingUp size={28} />,

        items: [

            {
                type: "heading",
                text: "Typical Progression",
            },

            {
                type: "item",
                text: "Training → Theatre / Short Films → Commercials / Supporting Roles → Larger Screen Roles",
            },

            {
                type: "heading",
                text: "Long Term Opportunities",
            },

            {
                type: "item",
                text: "Film and OTT acting",
            },

            {
                type: "item",
                text: "Theatre",
            },

            {
                type: "item",
                text: "Advertising",
            },

            {
                type: "item",
                text: "Voice acting",
            },

            {
                type: "item",
                text: "Content creation",
            },

            {
                type: "item",
                text: "Direction and creative production",
            },

            {
                type: "item",
                text: "Brand endorsements",
            },

        ],
    },

];


function Actor() {

    const navigate = useNavigate();

    const [open, setOpen] = useState(null);


    const toggleCard = (index) => {

        if (open === index) {

            setOpen(null);

        } else {

            setOpen(index);

        }

    };


    return (

        <div className="actor-page">


            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="actor-hero">


                <button
                    className="actor-back-button"
                    type="button"
                    onClick={() => navigate("/dashboard")}
                >

                    <ArrowLeft size={19} />

                    Back to Explore Careers

                </button>



                <div className="actor-hero-content">


                    <div className="actor-eyebrow">
                        CREATIVE & PERFORMANCE CAREER
                    </div>


                    <h1>
                        Actor Career Roadmap
                    </h1>


                    <p>
                        Explore the skills, training, portfolio building,
                        auditions, networking and professional development
                        involved in building a career across film, television,
                        theatre, OTT and digital media.
                    </p>


                </div>



                <div className="actor-stats">


                    <div className="actor-stat-card">

                        <Clock3 size={32} />

                        <h3>
                            Flexible Entry
                        </h3>

                        <span>
                            Acting can begin alongside school or college
                        </span>

                    </div>



                    <div className="actor-stat-card">

                        <Camera size={32} />

                        <h3>
                            Portfolio Driven
                        </h3>

                        <span>
                            Auditions, showreels and performance experience matter
                        </span>

                    </div>



                    <div className="actor-stat-card">

                        <TrendingUp size={32} />

                        <h3>
                            Highly Variable
                        </h3>

                        <span>
                            Income and career progression vary widely
                        </span>

                    </div>


                </div>


            </section>



            {/* =====================================================
                CAREER ORIENTATION
            ====================================================== */}

            <section className="actor-orientation">


                <div className="actor-section-heading">

                    <div className="actor-section-label">
                        UNDERSTAND THE CAREER
                    </div>

                    <h2>
                        Acting is more than performing on camera.
                    </h2>

                    <p>
                        Professional actors combine performance skills,
                        preparation, communication, discipline, networking
                        and continuous practice. There is no single route
                        into the profession.
                    </p>

                </div>



                <div className="actor-orientation-grid">


                    <div className="actor-orientation-card">

                        <div className="actor-orientation-icon">
                            <Clapperboard size={27} />
                        </div>

                        <h3>
                            Performance
                        </h3>

                        <p>
                            Interpret characters, communicate emotions and
                            perform naturally for theatre or camera.
                        </p>

                    </div>



                    <div className="actor-orientation-card">

                        <div className="actor-orientation-icon">
                            <Camera size={27} />
                        </div>

                        <h3>
                            Portfolio
                        </h3>

                        <p>
                            Build headshots, monologues, showreels and real
                            performance experience.
                        </p>

                    </div>



                    <div className="actor-orientation-card">

                        <div className="actor-orientation-icon">
                            <Users size={27} />
                        </div>

                        <h3>
                            Professional Network
                        </h3>

                        <p>
                            Develop genuine professional relationships through
                            theatre, workshops, productions and auditions.
                        </p>

                    </div>


                </div>


            </section>



            {/* =====================================================
                ROADMAP
            ====================================================== */}

            <section className="actor-roadmap">


                <div className="actor-section-heading">

                    <div className="actor-section-label">
                        YOUR ROADMAP
                    </div>

                    <h2>
                        From Interest to Professional Work
                    </h2>

                    <p>
                        There is no guaranteed timeline in acting. Use this
                        roadmap as a framework rather than a fixed schedule.
                    </p>

                </div>



                <div className="actor-timeline">


                    {roadmap.map((step, index) => (

                        <div
                            className="actor-timeline-item"
                            key={index}
                        >


                            <div className="actor-timeline-left">


                                <button
                                    className={`actor-timeline-circle ${
                                        open === index
                                            ? "active"
                                            : ""
                                    }`}
                                    type="button"
                                    onClick={() => toggleCard(index)}
                                    aria-label={`Open ${step.title}`}
                                >

                                    {step.icon}

                                </button>


                                {index !== roadmap.length - 1 && (

                                    <div className="actor-timeline-line"></div>

                                )}


                            </div>



                            <div className="actor-timeline-right">


                                <button
                                    className={`actor-timeline-title ${
                                        open === index
                                            ? "active"
                                            : ""
                                    }`}
                                    type="button"
                                    onClick={() => toggleCard(index)}
                                >

                                    <span>

                                        <small>
                                            STEP {String(index + 1).padStart(2, "0")}
                                        </small>

                                        <strong>
                                            {step.title}
                                        </strong>

                                    </span>


                                    <ChevronDown
                                        size={27}
                                        className={
                                            open === index
                                                ? "actor-arrow rotated"
                                                : "actor-arrow"
                                        }
                                    />

                                </button>



                                {open === index && (

                                    <div className="actor-dropdown">

                                        {step.items.map(
                                            (item, itemIndex) => (

                                                item.type === "heading"

                                                    ? (

                                                        <h4
                                                            key={itemIndex}
                                                            className="actor-dropdown-heading"
                                                        >
                                                            {item.text}
                                                        </h4>

                                                    )

                                                    : (

                                                        <div
                                                            key={itemIndex}
                                                            className="actor-dropdown-item"
                                                        >

                                                            <span>
                                                                •
                                                            </span>

                                                            <p>
                                                                {item.text}
                                                            </p>

                                                        </div>

                                                    )

                                            )
                                        )}

                                    </div>

                                )}


                            </div>


                        </div>

                    ))}


                </div>


            </section>



            {/* =====================================================
                CAREER REALITY
            ====================================================== */}

            <section className="actor-reality">


                <div className="actor-section-heading">

                    <div className="actor-section-label">
                        BEFORE YOU CHOOSE
                    </div>

                    <h2>
                        Know the reality of the profession.
                    </h2>

                    <p>
                        Acting can be creatively rewarding, but building
                        consistent professional work can be difficult.
                    </p>

                </div>



                <div className="actor-reality-grid">


                    <div className="actor-reality-card">

                        <div className="actor-reality-icon">
                            <ShieldCheck size={27} />
                        </div>

                        <h3>
                            Competition
                        </h3>

                        <p>
                            Many people pursue acting, while professional
                            opportunities are limited. Strong preparation
                            and persistence are important.
                        </p>

                    </div>



                    <div className="actor-reality-card">

                        <div className="actor-reality-icon">
                            <Clock3 size={27} />
                        </div>

                        <h3>
                            Unpredictable Work
                        </h3>

                        <p>
                            Actors may experience periods of regular work
                            followed by periods without paid projects.
                        </p>

                    </div>



                    <div className="actor-reality-card">

                        <div className="actor-reality-icon">
                            <Dumbbell size={27} />
                        </div>

                        <h3>
                            Continuous Improvement
                        </h3>

                        <p>
                            Regular practice, physical preparation, voice
                            work and performance training can help maintain
                            and improve professional ability.
                        </p>

                    </div>



                    <div className="actor-reality-card">

                        <div className="actor-reality-icon">
                            <Award size={27} />
                        </div>

                        <h3>
                            Creative Opportunities
                        </h3>

                        <p>
                            Successful actors can work across films, OTT,
                            television, theatre, advertisements, voice work
                            and digital media.
                        </p>

                    </div>


                </div>


            </section>



            {/* =====================================================
                COMPENSATION
            ====================================================== */}

            <section className="actor-compensation">


                <div className="actor-section-heading">

                    <div className="actor-section-label">
                        COMPENSATION
                    </div>

                    <h2>
                        What can an actor earn?
                    </h2>

                    <p>
                        Acting does not have a fixed salary. Earnings depend
                        heavily on experience, medium, role, project size,
                        location, reputation and the number of paid projects.
                    </p>

                </div>



                <div className="actor-compensation-grid">


                    <div className="actor-compensation-card">

                        <div className="actor-compensation-icon">
                            <IndianRupee size={27} />
                        </div>

                        <span>
                            REPORTED AVERAGE
                        </span>

                        <h3>
                            ₹26,296 / month
                        </h3>

                        <p>
                            Indeed's India salary page reports an average
                            base salary of ₹26,296 per month, based on
                            14 reported salaries.
                        </p>

                    </div>



                    <div className="actor-compensation-card">

                        <div className="actor-compensation-icon">
                            <WalletCards size={27} />
                        </div>

                        <span>
                            EARLY CAREER
                        </span>

                        <h3>
                            Often project based
                        </h3>

                        <p>
                            Beginners may receive relatively small payments
                            for individual projects or work without payment
                            while building experience and a portfolio.
                        </p>

                    </div>



                    <div className="actor-compensation-card">

                        <div className="actor-compensation-icon">
                            <TrendingUp size={27} />
                        </div>

                        <span>
                            ESTABLISHED ACTORS
                        </span>

                        <h3>
                            Highly variable
                        </h3>

                        <p>
                            Established actors can earn substantially more
                            through films, OTT productions, advertising,
                            endorsements and other commercial work.
                        </p>

                    </div>



                    <div className="actor-compensation-card">

                        <div className="actor-compensation-icon">
                            <ShieldCheck size={27} />
                        </div>

                        <span>
                            IMPORTANT
                        </span>

                        <h3>
                            No guaranteed income
                        </h3>

                        <p>
                            The reported average should not be interpreted as
                            a guaranteed salary. Acting income can vary greatly
                            between individuals and from year to year.
                        </p>

                    </div>


                </div>



                <div className="actor-compensation-note">

                    <IndianRupee size={24} />

                    <p>
                        Salary information is approximate and should be treated
                        as an indication rather than a promise of earnings.
                        Reported salary datasets for acting can be small and
                        may not represent high earning film or OTT performers.
                    </p>

                </div>


            </section>



            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="actor-final">


                <div className="actor-final-icon">
                    <Clapperboard size={34} />
                </div>


                <h2>
                    Build the craft before chasing the spotlight.
                </h2>


                <p>
                    Start with training, practise consistently, perform
                    wherever you can and build a professional portfolio.
                    A sustainable acting career is usually built through
                    repeated work rather than one opportunity.
                </p>


                <button
                    className="actor-dashboard-button"
                    type="button"
                    onClick={() => navigate("/dashboard")}
                >

                    <ArrowLeft size={19} />

                    Explore More Careers

                </button>


            </section>


        </div>

    );

}


export default Actor;