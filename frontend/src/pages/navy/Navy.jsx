import React, { useState } from "react";
import "./Navy.css"; // Keep or change CSS import name as needed

import {
  GraduationCap,
  BookOpen,
  FileCheck,
  Code2,
  HeartPulse,
  Users,
  Briefcase,
  TrendingUp,
  Clock3,
  IndianRupee,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const roadmap = [
  {
    title: "Choose Your Stream",
    icon: <GraduationCap size={28} />,
    items: [
      { type: "heading", text: "Mandatory Subjects" },
      { type: "item", text: "Physics" },
      { type: "item", text: "Mathematics" },
      { type: "item", text: "Chemistry / Computer Science (Class 12)" },

      { type: "heading", text: "Eligible Stream" },
      { type: "item", text: "Science (PCM)" },
      { type: "item", text: "PCM is mandatory for Officer entry routes in the Indian Navy." },

      { type: "heading", text: "Important Note" },
      { type: "item", text: "Humanities and Commerce streams are not eligible for Indian Navy Officer entries." },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "NDA Naval Wing" },
      { type: "item", text: "Pass Class 12 with Physics, Chemistry & Mathematics." },
      { type: "item", text: "No fixed minimum percentage for UPSC written exam, passing PCM is required." },

      { type: "heading", text: "10+2 B.Tech Cadet Entry Scheme" },
      { type: "item", text: "Minimum 70% aggregate in Physics, Chemistry & Mathematics (PCM)." },
      { type: "item", text: "Minimum 50% in English (in Class 10 or Class 12)." },
      { type: "item", text: "Valid JEE Main rank required for shortlisting." },
    ],
  },

  {
    title: "Entrance Exams & Entries",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Route 1 — After Class 12" },
      { type: "item", text: "UPSC NDA & NA Examination (Naval Academy)" },
      { type: "item", text: "10+2 B.Tech Cadet Entry Scheme (Direct SSB via JEE Main Rank)" },

      { type: "heading", text: "NDA Written Exam Syllabus" },
      { type: "item", text: "Mathematics" },
      { type: "item", text: "General Ability Test (GAT)" },
      { type: "item", text: "English" },
      { type: "item", text: "Physics (High Weightage)" },
      { type: "item", text: "Chemistry" },
      { type: "item", text: "General Science" },
      { type: "item", text: "History, Geography & Current Affairs" },

      { type: "heading", text: "Route 2 — After Graduation / B.E. / B.Tech" },
      { type: "item", text: "UPSC CDS — Executive & Technical Branches (INA)" },
      { type: "item", text: "INET / Direct INET Entries (Executive, Educational, Technical Branches)" },
      { type: "item", text: "NCC Special Entry (Naval Wing C-Certificate Holders)" },
    ],
  },

  {
    title: "Complete Selection Process",
    icon: <ShieldCheck size={28} />,
    items: [
      { type: "heading", text: "NDA / 10+2 B.Tech Route" },
      { type: "item", text: "Class 12 (PCM)" },
      { type: "item", text: "NDA Exam / JEE Main Shortlisting" },
      { type: "item", text: "5-Day SSB Interview" },
      { type: "item", text: "PABT / CPSS (if opting for Pilot/Naval Aviation)" },
      { type: "item", text: "Naval Medical Examination" },
      { type: "item", text: "Final Merit List" },
      { type: "item", text: "Indian Naval Academy (INA), Ezhimala Training" },
      { type: "item", text: "Commission as Sub Lieutenant" },

      { type: "heading", text: "CDS / Direct Entry Route" },
      { type: "item", text: "Graduation (B.Sc / B.E. / B.Tech)" },
      { type: "item", text: "CDS Exam / Application Shortlisting" },
      { type: "item", text: "SSB Interview & Medicals" },
      { type: "item", text: "Training at INA Ezhimala" },
      { type: "item", text: "Commission as Naval Officer" },
    ],
  },

  {
    title: "Build Important Skills",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Technical & Analytical Skills" },
      { type: "item", text: "Navigation & Nautical Basics" },
      { type: "item", text: "Engineering Concepts & Applied Physics" },
      { type: "item", text: "Quick Decision Making under Pressure" },
      { type: "item", text: "Logical Reasoning & Spatial Awareness" },
      { type: "item", text: "Adaptability to Marine Environments" },

      { type: "heading", text: "Communication & Leadership" },
      { type: "item", text: "English Fluency (Essential for Operations)" },
      { type: "item", text: "Command & Group Dynamics" },
      { type: "item", text: "Public Speaking & Effective Debating" },
      { type: "item", text: "Crisis Management & Coordination" },

      { type: "heading", text: "Extracurriculars" },
      { type: "item", text: "NCC Naval Wing" },
      { type: "item", text: "Sailing, Rowing & Water Sports" },
      { type: "item", text: "Technical Clubs & Robotics" },
      { type: "item", text: "Team Sports & Community Leadership" },
    ],
  },

  {
    title: "Physical & Medical Fitness",
    icon: <HeartPulse size={28} />,
    items: [
      { type: "heading", text: "Physical Fitness Standards" },
      { type: "item", text: "Swimming (Essential Requirement during training)" },
      { type: "item", text: "Distance Running (2.4 km run)" },
      { type: "item", text: "Push-ups, Pull-ups & Sit-ups" },
      { type: "item", text: "Core Balance & Stamina" },

      { type: "heading", text: "Useful Fitness Targets" },
      { type: "item", text: "Comfortable in deep water (Swimming ability)" },
      { type: "item", text: "2.4 km run in under 12 minutes" },
      { type: "item", text: "30+ Push-ups and 8+ Pull-ups" },
      { type: "item", text: "High Cardiovascular Endurance" },

      { type: "heading", text: "Strict Medical Standards" },
      { type: "item", text: "Eyesight (Strict limits depending on Executive/Technical Branch)" },
      { type: "item", text: "Color Vision (Standard CP-1 for most branches)" },
      { type: "item", text: "No history of Chronic Seasickness" },
      { type: "item", text: "Hearing, Height/Weight proportional standards" },
    ],
  },

  {
    title: "Prepare for Naval SSB",
    icon: <Users size={28} />,
    items: [
      { type: "heading", text: "SSB Assessment Stages" },
      { type: "item", text: "Stage 1: OIR Test & PPDT (Picture Perception & Description)" },
      { type: "item", text: "Stage 2: Psychological Tests (TAT, WAT, SRT, SD)" },
      { type: "item", text: "Group Testing Officer (GTO) Tasks & Obstacles" },
      { type: "item", text: "Personal Interview with President/Vice President of Board" },
      { type: "item", text: "Conference" },

      { type: "heading", text: "Core Qualities (OLQs)" },
      { type: "item", text: "Officer-Like Qualities (OLQs)" },
      { type: "item", text: "Effective Intelligence & Reasoning Ability" },
      { type: "item", text: "Social Adaptability & Teamwork" },
      { type: "item", text: "Courage, Stamina & Mental Toughness" },
    ],
  },

  {
    title: "Apply for the Navy",
    icon: <Briefcase size={28} />,
    items: [
      { type: "heading", text: "UPSC Application" },
      { type: "item", text: "Check UPSC notifications for NDA/NA and CDS exams." },
      { type: "item", text: "Submit applications via upsc.gov.in." },

      { type: "heading", text: "Direct Navy Entry Application" },
      { type: "item", text: "Register at Join Indian Navy official portal (joinindiannavy.gov.in)." },
      { type: "item", text: "Apply for 10+2 B.Tech Entry, INET, or SSC Officer entries." },

      { type: "heading", text: "Important" },
      { type: "item", text: "Keep tracking eligibility criteria, age limits, and notification release dates regularly." },
    ],
  },

  {
    title: "Career Growth & Branches",
    icon: <TrendingUp size={28} />,
    items: [
      { type: "heading", text: "Officer Rank Progression" },
      { type: "item", text: "Sub Lieutenant" },
      { type: "item", text: "Lieutenant" },
      { type: "item", text: "Lieutenant Commander" },
      { type: "item", text: "Commander" },
      { type: "item", text: "Captain" },
      { type: "item", text: "Commodore and Higher Flag Ranks" },

      { type: "heading", text: "Specialized Branches & Roles" },
      { type: "item", text: "Executive (General Service, Hydro, Logistics, Naval Aviation)" },
      { type: "item", text: "Engineering (Ship's Propulsion, Marine Systems)" },
      { type: "item", text: "Electrical & Weapons Electronics" },
      { type: "item", text: "Submarine Arm" },
      { type: "item", text: "Naval Armament Inspection & Education" },
      { type: "item", text: "International Fleet Reviews & Diplomatic Missions" },
    ],
  },
];

function Navy() {
  const [open, setOpen] = useState(null);

  const toggleCard = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="army">
      {/* HERO */}
      <section className="hero">
        <h1>Indian Navy Officer Roadmap</h1>

        <p>
          Follow this roadmap to become an Indian Navy Officer through routes such as
          NDA (Naval Wing), 10+2 B.Tech Entry, and CDS/INET. Build strong academics in PCM,
          technical aptitude, physical endurance, leadership qualities and prepare for the Naval SSB selection process.
        </p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>After 12th PCM</h3>
            <span>Earliest Entry</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>NDA / B.Tech / CDS</h3>
            <span>Main Exams</span>
          </div>

          <div className="stat-card">
            <ShieldCheck size={34} />
            <h3>Prestigious</h3>
            <span>Career growth</span>
          </div>
        </div>
      </section>

      {/* ROADMAP TIMELINE */}
      <section className="timeline">
        {roadmap.map((step, index) => (
          <div className="timeline-item" key={index}>
            <div className="left">
              <div className="circle" onClick={() => toggleCard(index)}>
                {step.icon}
              </div>
              {index !== roadmap.length - 1 && <div className="line"></div>}
            </div>

            <div className="right">
              <div className="title" onClick={() => toggleCard(index)}>
                <h2>{step.title}</h2>
                <div className={`arrow ${open === index ? "rotate" : ""}`}>
                  <ChevronDown />
                </div>
              </div>

              {open === index && (
                <div className="dropdown">
                  {step.items.map((item, i) =>
                    item.type === "heading" ? (
                      <h4 key={i} className="dropdown-heading">
                        {item.text}
                      </h4>
                    ) : (
                      <p key={i} className="dropdown-item">
                        • {item.text}
                      </p>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* CAREER FEASIBILITY */}
      <section className="career">
        <h1>Career Feasibility</h1>
        <div className="career-container">
          <div className="career-card">
            <h2>Risk Factor</h2>
            <p>
              <strong>High</strong> — A career as a Naval Officer involves long deployments at sea,
              isolation, extreme maritime weather conditions, submarine operations, and high-stakes combat readiness. Officers are entrusted with critical naval assets and high personal responsibility in defence of maritime boundaries.
            </p>
          </div>

          <div className="career-card">
            <h3>Minimum Time to Become an Officer</h3>

            <p>
              Through the NDA (Naval Academy) or 10+2 B.Tech Entry routes, you can start right after Class 12 (PCM).
              Training spans 4 years at the Indian Naval Academy (INA) Ezhimala before commissioning as a Sub Lieutenant.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navy;