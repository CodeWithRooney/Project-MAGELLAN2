import React, { useState } from "react";
import "./Army.css";

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
      { type: "heading", text: "Eligible Streams" },
      { type: "item", text: "Science" },
      { type: "item", text: "Commerce" },
      { type: "item", text: "Humanities / Arts" },

      { type: "heading", text: "Recommended" },
      { type: "item", text: "Science (PCM)" },
      { type: "item", text: "Keeps Army + Navy + Air Force options open." },

      { type: "heading", text: "Important" },
      { type: "item", text: "PCM is additionally required for Naval and Air Force wings of NDA." },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "NDA Army Wing" },
      { type: "item", text: "Pass Class 12" },
      { type: "item", text: "No prescribed minimum percentage such as 60%." },

      { type: "heading", text: "Recommended" },
      { type: "item", text: "Target 70–80%+ in Class 12." },
    ],
  },

  {
    title: "Entrance Exams",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Route 1 — After Class 12" },
      { type: "item", text: "UPSC NDA & NA Examination" },
      { type: "item", text: "Usually conducted twice a year." },

      { type: "heading", text: "NDA Written Exam" },
      { type: "item", text: "Mathematics" },
      { type: "item", text: "General Ability Test" },
      { type: "item", text: "English" },
      { type: "item", text: "General Knowledge" },
      { type: "item", text: "Physics" },
      { type: "item", text: "Chemistry" },
      { type: "item", text: "General Science" },
      { type: "item", text: "History" },
      { type: "item", text: "Geography" },
      { type: "item", text: "Current Affairs" },

      { type: "heading", text: "Route 2 — After Graduation" },
      { type: "item", text: "UPSC CDS — Combined Defence Services Examination" },

      { type: "heading", text: "Other Army Entries" },
      { type: "item", text: "NCC Special Entry" },
      { type: "item", text: "Technical Entry Scheme (TES)" },
      { type: "item", text: "Other entries as per latest notification." },
    ],
  },

  {
    title: "Complete Selection Process",
    icon: <ShieldCheck size={28} />,
    items: [
      { type: "heading", text: "NDA Route" },
      { type: "item", text: "Class 12" },
      { type: "item", text: "NDA Written Examination" },
      { type: "item", text: "SSB Interview" },
      { type: "item", text: "Medical Examination" },
      { type: "item", text: "Final Merit" },
      { type: "item", text: "NDA Training" },
      { type: "item", text: "Indian Military Academy (IMA)" },
      { type: "item", text: "Commission as Lieutenant" },

      { type: "heading", text: "CDS Route" },
      { type: "item", text: "Graduation" },
      { type: "item", text: "CDS Examination" },
      { type: "item", text: "SSB Interview" },
      { type: "item", text: "Medical Examination" },
      { type: "item", text: "Final Merit" },
      { type: "item", text: "IMA / OTA Training" },
      { type: "item", text: "Commission as Army Officer" },
    ],
  },

  {
    title: "Build Important Skills",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Mental Skills" },
      { type: "item", text: "Decision Making" },
      { type: "item", text: "Logical Thinking" },
      { type: "item", text: "Problem Solving" },
      { type: "item", text: "Confidence" },
      { type: "item", text: "Discipline" },
      { type: "item", text: "Mental Toughness" },
      { type: "item", text: "Leadership" },
      { type: "item", text: "Responsibility" },

      { type: "heading", text: "Communication Skills" },
      { type: "item", text: "English" },
      { type: "item", text: "Hindi" },
      { type: "item", text: "Public Speaking" },
      { type: "item", text: "Group Discussion" },
      { type: "item", text: "Clear Expression" },
      { type: "item", text: "Listening Skills" },

      { type: "heading", text: "Leadership Development" },
      { type: "item", text: "NCC" },
      { type: "item", text: "Sports Teams" },
      { type: "item", text: "Volunteering" },
      { type: "item", text: "School / College Clubs" },
      { type: "item", text: "Event Management" },
      { type: "item", text: "Group Projects" },
    ],
  },

  {
    title: "Physical Fitness & Medical",
    icon: <HeartPulse size={28} />,
    items: [
      { type: "heading", text: "Fitness" },
      { type: "item", text: "Running" },
      { type: "item", text: "Push-ups" },
      { type: "item", text: "Pull-ups" },
      { type: "item", text: "Squats" },
      { type: "item", text: "Core Strength" },
      { type: "item", text: "Swimming" },
      { type: "item", text: "Sports / Martial Arts" },

      { type: "heading", text: "Useful Fitness Targets" },
      { type: "item", text: "5 km running comfortably" },
      { type: "item", text: "40–50+ push-ups" },
      { type: "item", text: "8–12+ pull-ups" },
      { type: "item", text: "Strong legs and core" },
      { type: "item", text: "Good endurance" },

      { type: "heading", text: "Medical Areas" },
      { type: "item", text: "Eyesight" },
      { type: "item", text: "Hearing" },
      { type: "item", text: "Height / Weight" },
      { type: "item", text: "Orthopaedic Health" },
      { type: "item", text: "Overall Physical Fitness" },
    ],
  },

  {
    title: "Prepare for SSB",
    icon: <Users size={28} />,
    items: [
      { type: "heading", text: "SSB Assessment" },
      { type: "item", text: "Psychology Tests" },
      { type: "item", text: "Group Tasks" },
      { type: "item", text: "Personal Interview" },
      { type: "item", text: "Leadership Situations" },
      { type: "item", text: "Teamwork" },
      { type: "item", text: "Communication" },
      { type: "item", text: "Officer-Like Qualities" },

      { type: "heading", text: "What to Build" },
      { type: "item", text: "Confidence" },
      { type: "item", text: "Discipline" },
      { type: "item", text: "Leadership" },
      { type: "item", text: "Teamwork" },
      { type: "item", text: "Decision Making" },
      { type: "item", text: "Situational Awareness" },
    ],
  },

  {
    title: "Apply for the Army",
    icon: <Briefcase size={28} />,
    items: [
      { type: "heading", text: "NDA Application" },
      { type: "item", text: "UPSC Notification" },
      { type: "item", text: "Online Application" },
      { type: "item", text: "NDA Written Exam" },
      { type: "item", text: "SSB Interview" },
      { type: "item", text: "Medical" },
      { type: "item", text: "Final Merit" },

      { type: "heading", text: "CDS Application" },
      { type: "item", text: "UPSC Notification" },
      { type: "item", text: "Online Application" },
      { type: "item", text: "CDS Examination" },
      { type: "item", text: "SSB Interview" },
      { type: "item", text: "Medical" },
      { type: "item", text: "Final Merit" },

      { type: "heading", text: "Important" },
      { type: "item", text: "Always check the latest official notification for eligibility, vacancies, dates and age limits." },
    ],
  },

  {
    title: "Career Growth",
    icon: <TrendingUp size={28} />,
    items: [
      { type: "heading", text: "Officer Rank Progression" },
      { type: "item", text: "Lieutenant" },
      { type: "item", text: "Captain" },
      { type: "item", text: "Major" },
      { type: "item", text: "Lieutenant Colonel" },
      { type: "item", text: "Colonel" },
      { type: "item", text: "Higher Ranks" },

      { type: "heading", text: "Career Opportunities" },
      { type: "item", text: "Leadership & Command" },
      { type: "item", text: "Adventure & Travel" },
      { type: "item", text: "Military Training" },
      { type: "item", text: "Sports" },
      { type: "item", text: "Specialized Courses" },
      { type: "item", text: "Technology Roles" },
      { type: "item", text: "Intelligence-Related Roles" },
      { type: "item", text: "Peacekeeping Assignments" },
      { type: "item", text: "Higher Command Responsibilities" },
    ],
  },
];
function Army() {
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
        <h1>Indian Army Officer Roadmap</h1>

<p>
  Follow this roadmap to become an Indian Army Officer through routes such as
  NDA and CDS. Build strong academics, leadership qualities, physical fitness,
  communication skills and prepare for the SSB selection process.
</p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>After 12th</h3>
            <span>Earliest Entry</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>CDS/NDA</h3>
            <span>Main Exams</span>
          </div>

          <div className="stat-card">
            <ShieldCheck size={34} />
            <h3>Excellent</h3>
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
      <strong>High</strong> — an Army officer career can involve difficult
      terrain, extreme weather, operational deployments, physical injuries,
      psychological stress and combat situations. Officers may be required to
      accept significant personal risk in service of the country.
    </p>
          </div>

          <div className="career-card">
            <h3>Minimum Time to Become an Officer</h3>

    <p>
      Through the NDA route, you can begin the officer-entry journey after
      Class 12. The overall timeline depends on the selection process,
      training route and applicable entry.
    </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Army;