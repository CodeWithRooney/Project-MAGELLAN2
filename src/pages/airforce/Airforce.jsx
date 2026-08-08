import React, { useState } from "react";
import "./Airforce.css";

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
      { type: "heading", text: "Recommended Stream" },
      { type: "item", text: "Science (PCM)" },
      { type: "item", text: "Physics" },
      { type: "item", text: "Chemistry" },
      { type: "item", text: "Mathematics" },

      { type: "heading", text: "Why PCM?" },
      { type: "item", text: "Keeps Flying Branch options open." },
      { type: "item", text: "Keeps Technical Branch options open." },
      { type: "item", text: "Eligible for NDA Air Force entry." },
      { type: "item", text: "Keeps Engineering → AFCAT/CDS routes open." },

      { type: "heading", text: "Important" },
      {
        type: "item",
        text: "Physics and Mathematics at 10+2 level are required for NDA Air Force entry."
      },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "NDA Air Force" },
      { type: "item", text: "Pass Class 12 with Physics, Chemistry and Mathematics." },
      { type: "item", text: "No simple universal 60% requirement for NDA Air Force." },

      { type: "heading", text: "AFCAT After Graduation" },
      { type: "item", text: "Generally 60% in graduation for officer branches." },
      {
        type: "item",
        text: "Flying Branch also requires Physics and Mathematics at 10+2 level."
      },

      { type: "heading", text: "Recommended" },
      { type: "item", text: "Target 75%+ in Class 12." },
    ],
  },

  {
    title: "Entrance Exams",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Route 1 — NDA" },
      { type: "item", text: "UPSC NDA & NA Examination" },
      { type: "item", text: "After Class 12 with PCM." },
      { type: "item", text: "NDA Written Examination" },
      { type: "item", text: "SSB Interview" },
      { type: "item", text: "Medical Examination" },
      { type: "item", text: "Final Merit" },

      { type: "heading", text: "Route 2 — AFCAT" },
      { type: "item", text: "Air Force Common Admission Test (AFCAT)" },
      { type: "item", text: "Flying Branch" },
      { type: "item", text: "Ground Duty — Technical" },
      { type: "item", text: "Ground Duty — Non-Technical" },

      { type: "heading", text: "Route 3 — CDS" },
      { type: "item", text: "UPSC Combined Defence Services Examination" },
      { type: "item", text: "Flying Branch after graduation." },
    ],
  },

  {
    title: "Choose Your Entry",
    icon: <ShieldCheck size={28} />,
    items: [
      { type: "heading", text: "NDA Route" },
      { type: "item", text: "Class 12 with PCM" },
      { type: "item", text: "NDA Written Exam" },
      { type: "item", text: "SSB" },
      { type: "item", text: "Medical" },
      { type: "item", text: "NDA Training" },
      { type: "item", text: "Air Force Training" },

      { type: "heading", text: "AFCAT Route" },
      { type: "item", text: "Complete Graduation" },
      { type: "item", text: "AFCAT" },
      { type: "item", text: "AFSB" },
      { type: "item", text: "Medical" },
      { type: "item", text: "Air Force Training" },

      { type: "heading", text: "CDS Route" },
      { type: "item", text: "Complete Graduation" },
      { type: "item", text: "CDS Examination" },
      { type: "item", text: "SSB" },
      { type: "item", text: "Medical" },
      { type: "item", text: "Flying Training" },
    ],
  },

  {
    title: "Choose Your Branch",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Flying Branch" },
      { type: "item", text: "Fighter Aircraft" },
      { type: "item", text: "Transport Aircraft" },
      { type: "item", text: "Helicopters" },

      { type: "heading", text: "Ground Duty — Technical" },
      { type: "item", text: "Aircraft Systems" },
      { type: "item", text: "Avionics" },
      { type: "item", text: "Engineering" },
      { type: "item", text: "Weapons Systems" },
      { type: "item", text: "Aircraft Maintenance" },

      { type: "heading", text: "Ground Duty — Non-Technical" },
      { type: "item", text: "Administration" },
      { type: "item", text: "Logistics" },
      { type: "item", text: "Accounts" },
      { type: "item", text: "Education" },
      { type: "item", text: "Meteorology" },
    ],
  },

  {
    title: "Build Important Skills",
    icon: <Users size={28} />,
    items: [
      { type: "heading", text: "Academic Skills" },
      { type: "item", text: "Mathematics" },
      { type: "item", text: "Physics" },
      { type: "item", text: "English" },
      { type: "item", text: "General Knowledge" },
      { type: "item", text: "Current Affairs" },
      { type: "item", text: "Defence Awareness" },

      { type: "heading", text: "Communication Skills" },
      { type: "item", text: "Clear Speaking" },
      { type: "item", text: "English Communication" },
      { type: "item", text: "Public Speaking" },
      { type: "item", text: "Group Discussion" },
      { type: "item", text: "Expressing Ideas Clearly" },

      { type: "heading", text: "Officer Qualities" },
      { type: "item", text: "Leadership" },
      { type: "item", text: "Decision Making" },
      { type: "item", text: "Discipline" },
      { type: "item", text: "Responsibility" },
      { type: "item", text: "Teamwork" },
      { type: "item", text: "Adaptability" },
      { type: "item", text: "Problem Solving" },
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
      { type: "item", text: "Overall Endurance" },

      { type: "heading", text: "Medical Areas" },
      { type: "item", text: "Eyesight" },
      { type: "item", text: "Hearing" },
      { type: "item", text: "Height and Weight" },
      { type: "item", text: "Overall Physical Fitness" },
      { type: "item", text: "Medical Standards for Flying Branch" },

      { type: "heading", text: "Important" },
      { type: "item", text: "Medical fitness is an essential part of officer selection." },
    ],
  },

  {
    title: "Prepare for SSB / AFSB",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Selection Assessment" },
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
      { type: "item", text: "Decision Making" },
      { type: "item", text: "Situational Awareness" },
      { type: "item", text: "Adaptability" },
    ],
  },

  {
    title: "Apply for the Air Force",
    icon: <Briefcase size={28} />,
    items: [
      { type: "heading", text: "NDA Application" },
      { type: "item", text: "UPSC Notification" },
      { type: "item", text: "Online Application" },
      { type: "item", text: "NDA Written Examination" },
      { type: "item", text: "SSB" },
      { type: "item", text: "Medical" },
      { type: "item", text: "Final Merit" },

      { type: "heading", text: "AFCAT Application" },
      { type: "item", text: "IAF Notification" },
      { type: "item", text: "Online Application" },
      { type: "item", text: "AFCAT Examination" },
      { type: "item", text: "AFSB" },
      { type: "item", text: "Medical" },
      { type: "item", text: "Final Merit" },

      { type: "heading", text: "CDS Application" },
      { type: "item", text: "UPSC Notification" },
      { type: "item", text: "CDS Examination" },
      { type: "item", text: "SSB" },
      { type: "item", text: "Medical" },
      { type: "item", text: "Final Merit" },

      { type: "heading", text: "Important" },
      {
        type: "item",
        text: "Always check the latest official notification for eligibility, vacancies, dates and age limits."
      },
    ],
  },

  {
    title: "Career Growth",
    icon: <TrendingUp size={28} />,
    items: [
      { type: "heading", text: "Officer Rank Progression" },
      { type: "item", text: "Flying Officer" },
      { type: "item", text: "Flight Lieutenant" },
      { type: "item", text: "Squadron Leader" },
      { type: "item", text: "Wing Commander" },
      { type: "item", text: "Group Captain" },
      { type: "item", text: "Air Commodore and Higher Ranks" },

      { type: "heading", text: "Career Opportunities" },
      { type: "item", text: "Flying Operations" },
      { type: "item", text: "Technical Operations" },
      { type: "item", text: "Leadership & Command" },
      { type: "item", text: "Specialized Training" },
      { type: "item", text: "Defence Technology" },
      { type: "item", text: "Training & Instruction" },
      { type: "item", text: "Aviation Management" },
    ],
  },
];


function Airforce() {
  const [open, setOpen] = useState(null);

const toggleCard = (index) => {
    if (open === index) {
        setOpen(null);
    } else {
        setOpen(index);
    }
};

  return (
    <div className="airforce">
      {/* HERO */}
      <section className="hero">
    <h1>Indian Air Force Officer Roadmap</h1>

<p>
  Follow this roadmap to become an Indian Air Force Officer through routes
  such as NDA, AFCAT and CDS. Build strong academics, leadership qualities,
  physical fitness, communication skills and prepare for the SSB/AFSB
  selection process.
</p>

      <div className="stats">

  <div className="stat-card">
    <Clock3 size={34} />
    <h3>After 12th</h3>
    <span>NDA Entry</span>
  </div>

  <div className="stat-card">
    <IndianRupee size={34} />
    <h3>AFCAT / CDS</h3>
    <span>Graduate Entry</span>
  </div>

  <div className="stat-card">
    <ShieldCheck size={34} />
    <h3>High</h3>
    <span>Career Potential</span>
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
        <strong>High</strong> — an Indian Air Force career involves military
        responsibilities and can involve operational deployments, demanding
        training, physical injuries, operational stress and, for certain
        roles, significant risks associated with military operations.
      </p>
    </div>

    <div className="career-card">
      <h3>Minimum Time to Become an Officer</h3>

      <p>
        Through the NDA route, you can begin the officer-entry journey after
        Class 12. Through AFCAT or CDS, you can apply after completing
        graduation. The total timeline depends on the entry route, selection
        process and training.
      </p>
    </div>

  </div>
</section>
    </div>
  );
}

export default Airforce;