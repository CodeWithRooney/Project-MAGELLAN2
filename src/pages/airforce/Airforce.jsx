import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Airforce.css";

import {
    GraduationCap,
    BookOpen,
    FileCheck,
    Plane,
    Wrench,
    Users,
    TrendingUp,
    Clock3,
    ShieldCheck,
    ChevronDown,
    ArrowLeft,
    HeartPulse,
    Brain,
    Radar,
    Target,
    Award,
    Dumbbell,
    Route,
    AlertTriangle,
    IndianRupee,
} from "lucide-react";


const roadmap = [

    {
        title: "Understand the Air Force Officer Career",

        icon: <Plane size={28} />,

        items: [

            {
                type: "heading",
                text: "An Air Force Officer Is Not Necessarily a Pilot",
            },

            {
                type: "item",
                text: "Flying Branch officers operate aircraft and perform flying related duties.",
            },

            {
                type: "item",
                text: "Ground Duty Technical officers work with aircraft systems, engineering, electronics, technology and maintenance related responsibilities.",
            },

            {
                type: "item",
                text: "Ground Duty Non Technical officers work across areas such as administration, logistics, accounts, education, meteorology and weapon systems.",
            },

            {
                type: "heading",
                text: "What the Career Demands",
            },

            {
                type: "item",
                text: "Leadership, discipline, physical fitness, decision making, communication and the ability to work effectively in teams.",
            },

            {
                type: "item",
                text: "The profession carries significant responsibility because officers work within a military organisation and may be assigned operational duties.",
            },

        ],
    },


    {
        title: "Choose Your School Stream",

        icon: <GraduationCap size={28} />,

        items: [

            {
                type: "heading",
                text: "If You Want to Keep the Most Options Open",
            },

            {
                type: "item",
                text: "Science with Physics and Mathematics is the most flexible choice for students interested in Flying and many technical routes.",
            },

            {
                type: "item",
                text: "For NDA Air Force entry, Physics, Chemistry and Mathematics are required at 10+2 level.",
            },

            {
                type: "heading",
                text: "If You Are Certain About Ground Duty Non Technical Careers",
            },

            {
                type: "item",
                text: "Some graduate officer branches accept broader academic backgrounds, depending on the specific entry and notification.",
            },

            {
                type: "heading",
                text: "Important",
            },

            {
                type: "item",
                text: "Do not choose a stream only because someone says it is the Air Force stream. Choose according to the branch you want to keep open and your wider academic goals.",
            },

        ],
    },


    {
        title: "Understand the Main Entry Routes",

        icon: <Route size={28} />,

        items: [

            {
                type: "heading",
                text: "NDA Entry",
            },

            {
                type: "item",
                text: "For eligible students after Class 12.",
            },

            {
                type: "item",
                text: "The written examination is conducted by UPSC.",
            },

            {
                type: "item",
                text: "Candidates then undergo Air Force Selection Board assessment, medical examination and merit based selection.",
            },

            {
                type: "heading",
                text: "AFCAT Entry",
            },

            {
                type: "item",
                text: "For eligible graduates and final year students according to the applicable notification.",
            },

            {
                type: "item",
                text: "Can provide access to Flying, Ground Duty Technical and Ground Duty Non Technical branches depending on qualifications.",
            },

            {
                type: "heading",
                text: "CDS Entry",
            },

            {
                type: "item",
                text: "UPSC Combined Defence Services is another graduate level route for eligible candidates.",
            },

            {
                type: "item",
                text: "Branch, gender, age and educational requirements must be checked in the current CDS notification.",
            },

            {
                type: "heading",
                text: "Other Routes",
            },

            {
                type: "item",
                text: "NCC Special Entry and other specialised entries may be available depending on the current recruitment notification.",
            },

        ],
    },


    {
        title: "Choose Your Officer Branch",

        icon: <Radar size={28} />,

        items: [

            {
                type: "heading",
                text: "Flying Branch",
            },

            {
                type: "item",
                text: "Fighter aircraft",
            },

            {
                type: "item",
                text: "Transport aircraft",
            },

            {
                type: "item",
                text: "Helicopters",
            },

            {
                type: "heading",
                text: "Ground Duty Technical",
            },

            {
                type: "item",
                text: "Aeronautical engineering and aircraft systems",
            },

            {
                type: "item",
                text: "Electronics, avionics, communications and related technology",
            },

            {
                type: "item",
                text: "Engineering, maintenance and technical operations",
            },

            {
                type: "heading",
                text: "Ground Duty Non Technical",
            },

            {
                type: "item",
                text: "Weapon Systems",
            },

            {
                type: "item",
                text: "Administration",
            },

            {
                type: "item",
                text: "Logistics",
            },

            {
                type: "item",
                text: "Accounts",
            },

            {
                type: "item",
                text: "Education",
            },

            {
                type: "item",
                text: "Meteorology",
            },

        ],
    },


    {
        title: "Build Your Academic Foundation",

        icon: <BookOpen size={28} />,

        items: [

            {
                type: "heading",
                text: "For NDA Preparation",
            },

            {
                type: "item",
                text: "Mathematics",
            },

            {
                type: "item",
                text: "Physics",
            },

            {
                type: "item",
                text: "Chemistry",
            },

            {
                type: "item",
                text: "English",
            },

            {
                type: "item",
                text: "General Knowledge and current affairs",
            },

            {
                type: "heading",
                text: "For Graduate Entries",
            },

            {
                type: "item",
                text: "Maintain strong performance throughout graduation.",
            },

            {
                type: "item",
                text: "Check the exact degree and percentage requirements for the branch you intend to apply for.",
            },

            {
                type: "item",
                text: "Engineering and Computer Science graduates may have technical branch opportunities depending on the current notification.",
            },

            {
                type: "heading",
                text: "Do Not Ignore English",
            },

            {
                type: "item",
                text: "Clear communication is important during written examinations, interviews and officer selection.",
            },

        ],
    },


    {
        title: "Build Officer Qualities",

        icon: <Users size={28} />,

        items: [

            {
                type: "heading",
                text: "Leadership",
            },

            {
                type: "item",
                text: "Learn to take responsibility instead of simply giving instructions.",
            },

            {
                type: "item",
                text: "Practise making decisions when information is incomplete.",
            },

            {
                type: "heading",
                text: "Communication",
            },

            {
                type: "item",
                text: "Speak clearly and organise your thoughts before responding.",
            },

            {
                type: "item",
                text: "Develop public speaking, group discussion and listening skills.",
            },

            {
                type: "heading",
                text: "Personal Qualities",
            },

            {
                type: "item",
                text: "Discipline",
            },

            {
                type: "item",
                text: "Teamwork",
            },

            {
                type: "item",
                text: "Adaptability",
            },

            {
                type: "item",
                text: "Responsibility",
            },

            {
                type: "item",
                text: "Problem solving",
            },

            {
                type: "item",
                text: "Situational awareness",
            },

        ],
    },


    {
        title: "Build Physical Fitness",

        icon: <Dumbbell size={28} />,

        items: [

            {
                type: "heading",
                text: "Build a General Fitness Base",
            },

            {
                type: "item",
                text: "Running and cardiovascular endurance",
            },

            {
                type: "item",
                text: "Bodyweight strength such as push ups, pull ups and squats",
            },

            {
                type: "item",
                text: "Core strength",
            },

            {
                type: "item",
                text: "Mobility and flexibility",
            },

            {
                type: "item",
                text: "Swimming can be a useful additional skill.",
            },

            {
                type: "heading",
                text: "Why Fitness Matters",
            },

            {
                type: "item",
                text: "Military training and officer selection involve physical demands, so fitness should be developed gradually rather than only before an examination.",
            },

            {
                type: "heading",
                text: "Medical Standards",
            },

            {
                type: "item",
                text: "Medical eligibility is determined according to official military medical standards.",
            },

            {
                type: "item",
                text: "Flying Branch medical standards can be different from other branches, so students should check the current official standards instead of relying on generic fitness advice.",
            },

        ],
    },


    {
        title: "Prepare for the Written Examination",

        icon: <FileCheck size={28} />,

        items: [

            {
                type: "heading",
                text: "NDA",
            },

            {
                type: "item",
                text: "Prepare Mathematics, General Ability and the subjects specified in the current UPSC notification.",
            },

            {
                type: "heading",
                text: "AFCAT",
            },

            {
                type: "item",
                text: "Prepare the subjects and sections specified in the current AFCAT notification.",
            },

            {
                type: "item",
                text: "Practise timed questions and previous examination papers.",
            },

            {
                type: "heading",
                text: "CDS",
            },

            {
                type: "item",
                text: "Follow the current UPSC CDS syllabus and examination pattern.",
            },

            {
                type: "heading",
                text: "Preparation Rule",
            },

            {
                type: "item",
                text: "Use the latest official notification as the final authority because examination patterns, dates and eligibility conditions can change.",
            },

        ],
    },


    {
        title: "Clear AFSB Selection",

        icon: <Brain size={28} />,

        items: [

            {
                type: "heading",
                text: "Stage I",
            },

            {
                type: "item",
                text: "Officer Intelligence Rating Test",
            },

            {
                type: "item",
                text: "Picture Perception and Discussion Test",
            },

            {
                type: "item",
                text: "Stage I is a screening stage. Candidates who do not qualify do not proceed to the later testing stages.",
            },

            {
                type: "heading",
                text: "Stage II",
            },

            {
                type: "item",
                text: "Psychological testing",
            },

            {
                type: "item",
                text: "Group testing",
            },

            {
                type: "item",
                text: "Personal interview",
            },

            {
                type: "item",
                text: "Board conference",
            },

            {
                type: "heading",
                text: "Flying Branch",
            },

            {
                type: "item",
                text: "Recommended Flying Branch candidates undergo the applicable pilot selection assessment.",
            },

            {
                type: "heading",
                text: "Important",
            },

            {
                type: "item",
                text: "Do not try to memorise artificial selection answers. Focus on developing genuine communication, reasoning, teamwork and leadership qualities.",
            },

        ],
    },


    {
        title: "Complete Medical and Merit Selection",

        icon: <HeartPulse size={28} />,

        items: [

            {
                type: "heading",
                text: "Medical Examination",
            },

            {
                type: "item",
                text: "Candidates recommended by the selection board undergo military medical examination.",
            },

            {
                type: "item",
                text: "Medical standards depend on the entry and branch.",
            },

            {
                type: "heading",
                text: "Final Merit",
            },

            {
                type: "item",
                text: "Being recommended at AFSB does not by itself guarantee joining.",
            },

            {
                type: "item",
                text: "Final selection depends on medical fitness, merit and available vacancies according to the applicable entry.",
            },

            {
                type: "heading",
                text: "Joining",
            },

            {
                type: "item",
                text: "Selected candidates receive joining instructions for the applicable training establishment.",
            },

        ],
    },


    {
        title: "Complete Military Training",

        icon: <Award size={28} />,

        items: [

            {
                type: "heading",
                text: "Training",
            },

            {
                type: "item",
                text: "Officer cadets undergo military and professional training appropriate to their entry and branch.",
            },

            {
                type: "item",
                text: "Training develops discipline, leadership, physical fitness, military knowledge and professional competence.",
            },

            {
                type: "heading",
                text: "Flying Branch",
            },

            {
                type: "item",
                text: "Flying training follows the applicable military aviation training pathway after selection.",
            },

            {
                type: "heading",
                text: "Technical and Other Branches",
            },

            {
                type: "item",
                text: "Professional training is aligned with the officer's branch and responsibilities.",
            },

            {
                type: "heading",
                text: "Final Stage",
            },

            {
                type: "item",
                text: "Successful completion of the required training leads to commissioning as an Indian Air Force officer.",
            },

        ],
    },


    {
        title: "Build Your Career as an Officer",

        icon: <TrendingUp size={28} />,

        items: [

            {
                type: "heading",
                text: "Early Career",
            },

            {
                type: "item",
                text: "Begin service as a commissioned officer in the selected branch.",
            },

            {
                type: "item",
                text: "Develop professional expertise while taking increasing responsibility.",
            },

            {
                type: "heading",
                text: "Long Term Opportunities",
            },

            {
                type: "item",
                text: "Operational leadership",
            },

            {
                type: "item",
                text: "Command responsibilities",
            },

            {
                type: "item",
                text: "Specialised training",
            },

            {
                type: "item",
                text: "Instruction and training",
            },

            {
                type: "item",
                text: "Technical and aviation related responsibilities",
            },

            {
                type: "item",
                text: "Higher command and staff appointments",
            },

            {
                type: "heading",
                text: "Career Progression",
            },

            {
                type: "item",
                text: "Officers progress through ranks and appointments according to service rules, performance, vacancies and applicable policies.",
            },

        ],
    },

];


function Airforce() {

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

        <div className="airforce-page">


            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="airforce-hero">


                <button
                    className="airforce-back-button"
                    type="button"
                    onClick={() => navigate("/dashboard")}
                >

                    <ArrowLeft size={19} />

                    Back to Explore Careers

                </button>



                <div className="airforce-hero-content">

                    <div className="airforce-eyebrow">
                        DEFENCE & AVIATION CAREER
                    </div>


                    <h1>
                        Indian Air Force Officer Roadmap
                    </h1>


                    <p>
                        Explore the routes, branches, academic requirements,
                        officer selection process, physical preparation and
                        training involved in becoming an Indian Air Force officer.
                    </p>

                </div>



                <div className="airforce-stats">


                    <div className="airforce-stat-card">

                        <Route size={32} />

                        <h3>
                            Multiple Routes
                        </h3>

                        <span>
                            NDA, AFCAT, CDS and other eligible entries
                        </span>

                    </div>



                    <div className="airforce-stat-card">

                        <Plane size={32} />

                        <h3>
                            3 Major Directions
                        </h3>

                        <span>
                            Flying, Ground Duty Technical and Ground Duty Non Technical
                        </span>

                    </div>



                    <div className="airforce-stat-card">

                        <ShieldCheck size={32} />

                        <h3>
                            Officer Selection
                        </h3>

                        <span>
                            Written examination, AFSB, medical and merit
                        </span>

                    </div>


                </div>


            </section>



            {/* =====================================================
                QUICK ORIENTATION
            ====================================================== */}

            <section className="airforce-orientation">


                <div className="airforce-section-heading">

                    <div className="airforce-section-label">
                        FIRST DECISION
                    </div>

                    <h2>
                        Which Air Force Career Interests You?
                    </h2>

                    <p>
                        You do not have to decide your exact branch immediately.
                        But understanding the broad directions will help you
                        choose your subjects and preparation strategy.
                    </p>

                </div>



                <div className="airforce-branch-grid">


                    <div className="airforce-branch-card">

                        <div className="airforce-branch-icon">
                            <Plane size={28} />
                        </div>

                        <h3>
                            Flying Branch
                        </h3>

                        <p>
                            Aircraft operations including fighter, transport
                            and helicopter flying roles.
                        </p>

                    </div>



                    <div className="airforce-branch-card">

                        <div className="airforce-branch-icon">
                            <Wrench size={28} />
                        </div>

                        <h3>
                            Ground Duty Technical
                        </h3>

                        <p>
                            Engineering, aircraft systems, electronics,
                            avionics, technology and technical operations.
                        </p>

                    </div>



                    <div className="airforce-branch-card">

                        <div className="airforce-branch-icon">
                            <Radar size={28} />
                        </div>

                        <h3>
                            Ground Duty Non Technical
                        </h3>

                        <p>
                            Weapon Systems, administration, logistics,
                            accounts, education and meteorology.
                        </p>

                    </div>


                </div>

            </section>



            {/* =====================================================
                ROADMAP
            ====================================================== */}

            <section className="airforce-roadmap">


                <div className="airforce-section-heading">

                    <div className="airforce-section-label">
                        YOUR ROADMAP
                    </div>

                    <h2>
                        From School to Commissioning
                    </h2>

                    <p>
                        Follow the stages in order, but remember that your
                        exact route depends on your age, education, branch
                        preference and the entry notification.
                    </p>

                </div>



                <div className="airforce-timeline">


                    {roadmap.map((step, index) => (

                        <div
                            className="airforce-timeline-item"
                            key={index}
                        >


                            <div className="airforce-timeline-left">


                                <button
                                    className={`airforce-timeline-circle ${
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

                                    <div className="airforce-timeline-line"></div>

                                )}

                            </div>



                            <div className="airforce-timeline-right">


                                <button
                                    className={`airforce-timeline-title ${
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
                                                ? "airforce-arrow rotated"
                                                : "airforce-arrow"
                                        }
                                    />

                                </button>



                                {open === index && (

                                    <div className="airforce-dropdown">


                                        {step.items.map(
                                            (item, itemIndex) => (

                                                item.type === "heading"

                                                    ? (

                                                        <h4
                                                            key={itemIndex}
                                                            className="airforce-dropdown-heading"
                                                        >
                                                            {item.text}
                                                        </h4>

                                                    )

                                                    : (

                                                        <div
                                                            key={itemIndex}
                                                            className="airforce-dropdown-item"
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

            <section className="airforce-reality">


                <div className="airforce-section-heading">

                    <div className="airforce-section-label">
                        BEFORE YOU CHOOSE
                    </div>

                    <h2>
                        Know What You Are Signing Up For
                    </h2>

                    <p>
                        An Air Force officer career offers responsibility,
                        training and professional growth, but it also comes
                        with demanding military service.
                    </p>

                </div>



                <div className="airforce-reality-grid">


                    <div className="airforce-reality-card">

                        <div className="airforce-reality-icon">
                            <Target size={27} />
                        </div>

                        <h3>
                            High Responsibility
                        </h3>

                        <p>
                            Officers are responsible for people, equipment,
                            operations and decisions. The level of responsibility
                            increases as your career progresses.
                        </p>

                    </div>



                    <div className="airforce-reality-card">

                        <div className="airforce-reality-icon">
                            <Dumbbell size={27} />
                        </div>

                        <h3>
                            Demanding Training
                        </h3>

                        <p>
                            Military training requires discipline, physical
                            conditioning, teamwork, adaptability and the ability
                            to perform under pressure.
                        </p>

                    </div>



                    <div className="airforce-reality-card">

                        <div className="airforce-reality-icon">
                            <AlertTriangle size={27} />
                        </div>

                        <h3>
                            Operational Demands
                        </h3>

                        <p>
                            Depending on branch and appointment, service can
                            involve operational deployments, difficult working
                            environments and significant professional risk.
                        </p>

                    </div>



                    <div className="airforce-reality-card">

                        <div className="airforce-reality-icon">
                            <Award size={27} />
                        </div>

                        <h3>
                            Long Term Development
                        </h3>

                        <p>
                            Officers can develop expertise, leadership experience,
                            specialised skills and command responsibilities over
                            the course of their service.
                        </p>

                    </div>


                </div>

            </section>



            {/* =====================================================
                COMPENSATION
            ====================================================== */}

            <section className="airforce-compensation">


                <div className="airforce-section-heading">

                    <div className="airforce-section-label">
                        COMPENSATION
                    </div>

                    <h2>
                        Pay & Financial Benefits
                    </h2>

                    <p>
                        Air Force officers follow an official military pay
                        structure. Compensation depends on rank, branch,
                        years of service, posting and applicable allowances.
                    </p>

                </div>



                <div className="airforce-compensation-grid">


                    <div className="airforce-compensation-card">

                        <div className="airforce-compensation-icon">
                            <Clock3 size={27} />
                        </div>

                        <span className="airforce-compensation-label">
                            DURING TRAINING
                        </span>

                        <h3>
                            ₹56,100 / month
                        </h3>

                        <p>
                            Flight Cadets receive a fixed stipend of
                            ₹56,100 per month during the applicable
                            one year training period.
                        </p>

                    </div>



                    <div className="airforce-compensation-card">

                        <div className="airforce-compensation-icon">
                            <Award size={27} />
                        </div>

                        <span className="airforce-compensation-label">
                            FLYING OFFICER
                        </span>

                        <h3>
                            ₹56,100–₹1,77,500
                        </h3>

                        <p>
                            Flying Officers are placed in Pay Level 10 with
                            a basic pay range of ₹56,100 to ₹1,77,500.
                        </p>

                    </div>



                    <div className="airforce-compensation-card">

                        <div className="airforce-compensation-icon">
                            <IndianRupee size={27} />
                        </div>

                        <span className="airforce-compensation-label">
                            MILITARY SERVICE PAY
                        </span>

                        <h3>
                            ₹15,500 / month
                        </h3>

                        <p>
                            Military Service Pay is applicable according to
                            the applicable service rules.
                        </p>

                    </div>



                    <div className="airforce-compensation-card">

                        <div className="airforce-compensation-icon">
                            <TrendingUp size={27} />
                        </div>

                        <span className="airforce-compensation-label">
                            ADDITIONAL ALLOWANCES
                        </span>

                        <h3>
                            Depends on duty
                        </h3>

                        <p>
                            Depending on branch, nature of duty and place of
                            posting, applicable allowances can include flying,
                            technical, transport, risk and hardship allowances.
                        </p>

                    </div>


                </div>



                <div className="airforce-compensation-note">

                    <ShieldCheck size={24} />

                    <p>
                        These are official pay structure figures rather than
                        an average salary. Actual total compensation can vary
                        with rank, branch, service, posting and applicable
                        allowances. Always verify the latest official
                        recruitment notification.
                    </p>

                </div>


            </section>



            {/* =====================================================
                ELIGIBILITY NOTE
            ====================================================== */}

            <section className="airforce-note">


                <div className="airforce-note-icon">
                    <ShieldCheck size={30} />
                </div>


                <div>

                    <h3>
                        Eligibility Changes With the Entry
                    </h3>

                    <p>
                        Age limits, educational qualifications, vacancies,
                        branch availability, medical standards and commission
                        conditions can differ between NDA, AFCAT, CDS and other
                        entries. Always verify the latest official notification
                        before applying.
                    </p>

                </div>

            </section>



            {/* =====================================================
                FINAL
            ====================================================== */}

            <section className="airforce-final">


                <div className="airforce-final-icon">
                    <Plane size={34} />
                </div>


                <h2>
                    Become an Officer, Not Just an Applicant
                </h2>


                <p>
                    Start preparing long before the examination. Build your
                    academics, fitness, communication, leadership and decision
                    making together. The aim is not simply to clear one test.
                    It is to become capable of handling the responsibilities
                    of an Air Force officer.
                </p>


                <button
                    className="airforce-dashboard-button"
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


export default Airforce;