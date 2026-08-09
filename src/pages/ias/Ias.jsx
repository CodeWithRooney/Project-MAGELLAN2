import React, { useState } from "react";
import "./Ias.css";

import {
  GraduationCap,
  BookOpen,
  FileCheck,
  Laptop,
  Code2,
  Briefcase,
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
      { type: "item", text: "Science (PCM/PCB)" },
      { type: "item", text: "Commerce" },
      { type: "item", text: "Arts / Humanities" },

      { type: "heading", text: "Best Choice" },
      { type: "item", text: "Choose the stream you enjoy most." },
      { type: "item", text: "Arts provides greater overlap with UPSC subjects." },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "Eligibility" },
      { type: "item", text: "No minimum percentage required." },

      { type: "heading", text: "Recommended" },
      { type: "item", text: "Aim for 75–90% for better college opportunities." },
    ],
  },

  {
    title: "Graduation Requirement",
    icon: <GraduationCap size={28} />,
    items: [
      { type: "heading", text: "Eligible Degrees" },
      { type: "item", text: "B.Tech" },
      { type: "item", text: "BA" },
      { type: "item", text: "B.Com" },
      { type: "item", text: "B.Sc" },
      { type: "item", text: "MBBS" },
      { type: "item", text: "LLB" },
      { type: "item", text: "BBA" },

      { type: "heading", text: "Requirement" },
      { type: "item", text: "Bachelor's Degree from a recognized university." },
    ],
  },

  {
    title: "UPSC Civil Services Examination",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Stage 1 : Preliminary Examination" },
      { type: "item", text: "General Studies Paper I" },
      { type: "item", text: "CSAT (Qualifying)" },

      { type: "heading", text: "Stage 2 : Mains Examination" },
      { type: "item", text: "Essay" },
      { type: "item", text: "General Studies I" },
      { type: "item", text: "General Studies II" },
      { type: "item", text: "General Studies III" },
      { type: "item", text: "General Studies IV" },
      { type: "item", text: "Optional Paper I" },
      { type: "item", text: "Optional Paper II" },
      { type: "item", text: "English (Qualifying)" },
      { type: "item", text: "Indian Language (Qualifying)" },

      { type: "heading", text: "Stage 3 : Interview" },
      { type: "item", text: "Personality Test" },
      { type: "item", text: "Leadership" },
      { type: "item", text: "Communication" },
      { type: "item", text: "Decision Making" },
    ],
  },

  {
    title: "Eligibility",
    icon: <ShieldCheck size={28} />,
    items: [
      { type: "heading", text: "Age Limit" },
      { type: "item", text: "Minimum Age : 21 Years" },
      { type: "item", text: "Maximum Age : 32 Years (General)" },

      { type: "heading", text: "Attempts" },
      { type: "item", text: "General : 6 Attempts" },
      { type: "item", text: "Relaxations available for reserved categories." },
    ],
  },

  {
    title: "Learn Important Skills",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Communication Skills" },
      { type: "item", text: "Public Speaking" },
      { type: "item", text: "Writing Skills" },
      { type: "item", text: "Interview Skills" },

      { type: "heading", text: "Reading Habit" },
      { type: "item", text: "Newspapers" },
      { type: "item", text: "Editorials" },
      { type: "item", text: "Government Reports" },

      { type: "heading", text: "Leadership" },
      { type: "item", text: "NCC" },
      { type: "item", text: "NSS" },
      { type: "item", text: "College Clubs" },
      { type: "item", text: "Event Management" },

      { type: "heading", text: "General Awareness" },
      { type: "item", text: "Indian Polity" },
      { type: "item", text: "History" },
      { type: "item", text: "Geography" },
      { type: "item", text: "Economy" },
      { type: "item", text: "Environment" },
      { type: "item", text: "Science & Technology" },
      { type: "item", text: "International Relations" },
      { type: "item", text: "Current Affairs" },

      { type: "heading", text: "Other Skills" },
      { type: "item", text: "Analytical Thinking" },
      { type: "item", text: "Decision Making" },
      { type: "item", text: "Time Management" },
      { type: "item", text: "Answer Writing Practice" },
    ],
  },

  {
    title: "Become IAS / IPS / IFS",
    icon: <Briefcase size={28} />,
    items: [
      { type: "heading", text: "Roadmap" },
      { type: "item", text: "Complete Class 10" },
      { type: "item", text: "Choose Any Stream" },
      { type: "item", text: "Complete Class 12" },
      { type: "item", text: "Complete Graduation" },
      { type: "item", text: "Prepare for UPSC CSE" },
      { type: "item", text: "Clear Prelims" },
      { type: "item", text: "Clear Mains" },
      { type: "item", text: "Clear Interview" },
      { type: "item", text: "Training" },
      { type: "item", text: "IAS / IPS / IFS Officer" },
    ],
  },

  {
    title: "Career Opportunities",
    icon: <Briefcase size={28} />,
    items: [
      { type: "heading", text: "IAS" },
      { type: "item", text: "District Magistrate" },
      { type: "item", text: "Collector" },
      { type: "item", text: "Secretary to Government" },
      { type: "item", text: "Cabinet Secretary" },

      { type: "heading", text: "IPS" },
      { type: "item", text: "Superintendent of Police (SP)" },
      { type: "item", text: "DIG" },
      { type: "item", text: "IG" },
      { type: "item", text: "DGP" },
      { type: "item", text: "CBI" },
      { type: "item", text: "NIA" },

      { type: "heading", text: "IFS" },
      { type: "item", text: "Diplomat" },
      { type: "item", text: "Ambassador" },
      { type: "item", text: "High Commissioner" },
      { type: "item", text: "Indian Embassies Worldwide" },
    ],
  },
];


function Ias() {
  const [open, setOpen] = useState(null);

const toggleCard = (index) => {
    if (open === index) {
        setOpen(null);
    } else {
        setOpen(index);
    }
};

  return (
    <div className="ias">
      {/* HERO */}
      <section className="hero">
 <h1>IAS / IPS / IFS Roadmap</h1>

<p>
Follow this roadmap to become an IAS, IPS, or Indian Foreign Service (IFS)
Officer. Complete your graduation, prepare for the UPSC Civil Services
Examination, and build the leadership, analytical, and communication skills
required to serve the nation.
</p>
        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>6-8 Years</h3>
            <span>Minimum Time</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>₹56,100/month Basic</h3>
            <span>Average Starting Salary</span>
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
             Students who consistently study, stay updated with current affairs, practice
answer writing, and develop strong analytical and leadership skills have a High
Chance of Success. However, UPSC is one of India's most competitive
examinations, requiring dedication, patience, and multiple years of preparation
for many aspirants.
            </p>
          </div>

          <div className="career-card">
            <h2>Minimum Time to Start Earning</h2>
            <p>
             Most candidates begin earning after successfully clearing the UPSC Civil
Services Examination, completing their training, and joining service.

Minimum Time: Around 6–8 years after Class 10 (including graduation and UPSC
preparation).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ias;