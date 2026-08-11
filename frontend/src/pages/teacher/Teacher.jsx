import React, { useState } from "react";
import "./Teacher.css";

import {
  GraduationCap,
  BookOpen,
  FileCheck,
  Code2,
  Users,
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
      { type: "item", text: "Science (PCM / PCB)" },
      { type: "item", text: "Commerce" },
      { type: "item", text: "Humanities / Arts" },

      { type: "heading", text: "Recommended Strategy" },
      { type: "item", text: "Choose the stream that matches the subject you eventually want to teach." },
      { type: "item", text: "Arts/Humanities for Social Science & Languages." },
      { type: "item", text: "Commerce for Business Studies & Accountancy." },
      { type: "item", text: "Science with PCM/PCB for Physics, Chemistry, Biology & Maths." },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "Minimum Eligibility Benchmark" },
      { type: "item", text: "50% aggregate in Class 12 for most D.El.Ed., B.El.Ed., and Integrated B.Ed. / ITEP courses." },

      { type: "heading", text: "Recommended Target" },
      { type: "item", text: "Aim for 60%–70%+ in Class 12 to secure admissions in top universities and degree programs." },
    ],
  },

  {
    title: "Course Selection & Degree",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Route A — Graduate + B.Ed. (Standard)" },
      { type: "item", text: "Class 12 → Bachelor's Degree (3–4 years) → B.Ed. (2 years)" },
      { type: "item", text: "Best for Secondary (TGT) and Senior Secondary (PGT) positions." },

      { type: "heading", text: "Route B — Integrated Teacher Education" },
      { type: "item", text: "B.A. B.Ed. / B.Sc. B.Ed. / 4-Year ITEP (Integrated Teacher Education Programme)" },
      { type: "item", text: "Saves 1 year if you decide to become a teacher right after Class 12." },

      { type: "heading", text: "Route C — Primary Teacher Qualification" },
      { type: "item", text: "Class 12 → D.El.Ed. / D.Ed. (Diploma in Elementary Education)" },
      { type: "item", text: "Direct entry route for teaching Primary Classes (1–5)." },
    ],
  },

  {
    title: "Entrance & Eligibility Exams",
    icon: <ShieldCheck size={28} />,
    items: [
      { type: "heading", text: "For University Admission" },
      { type: "item", text: "CUET-UG / NCET (for 4-year ITEP) / State B.Ed. Entrance Examinations" },

      { type: "heading", text: "Mandatory Teacher Eligibility Tests (TET)" },
      { type: "item", text: "CTET (Central Teacher Eligibility Test) conducted by CBSE" },
      { type: "item", text: "CTET Paper I (Classes 1–5 Primary Teacher)" },
      { type: "item", text: "CTET Paper II (Classes 6–8 Upper Primary / TGT)" },
      { type: "item", text: "State TETs (e.g., REET, UPTET, MAHATET for state government jobs)" },
    ],
  },

  {
    title: "Build Critical Teaching Skills",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Core Academic & Soft Skills" },
      { type: "item", text: "Deep Subject Knowledge & Conceptual Clarity" },
      { type: "item", text: "Public Speaking & Clear Vocal Communication" },
      { type: "item", text: "Patience, Empathy & Emotional Intelligence" },
      { type: "item", text: "Classroom Management & Behavioral Control" },

      { type: "heading", text: "Digital & Technical Skills" },
      { type: "item", text: "Interactive Presentations (PowerPoint, Canva)" },
      { type: "item", text: "Digital Whiteboards & Smartboards" },
      { type: "item", text: "LMS Platforms (Google Classroom, MS Teams)" },
      { type: "item", text: "Basic AI Educational Tools & Online Content Creation" },
    ],
  },

  {
    title: "Job Recruitment & Placement",
    icon: <Users size={28} />,
    items: [
      { type: "heading", text: "Government Schools Route" },
      { type: "item", text: "Clear Degree + B.Ed. + CTET/State TET" },
      { type: "item", text: "Apply for Central Recruitment (KVS, NVS, EMRS, DSSSB) or State Recruitment Exams" },
      { type: "item", text: "Written Exam / CBT → Interview / Skill Demo → Final Selection" },

      { type: "heading", text: "Private Schools Route" },
      { type: "item", text: "Direct Job Applications via Portals, LinkedIn, or School Websites" },
      { type: "item", text: "Interview Round → Live Classroom Demo Class → Final Hiring" },
    ],
  },

  {
    title: "Career Growth & Diversification",
    icon: <TrendingUp size={28} />,
    items: [
      { type: "heading", text: "School Administration Path" },
      { type: "item", text: "Teacher → Senior Teacher → Academic Coordinator → Vice Principal → Principal" },

      { type: "heading", text: "Alternative & High-Upside Avenues" },
      { type: "item", text: "Competitive Exam Coaching Faculty" },
      { type: "item", text: "Online Educator / YouTube Content Creator" },
      { type: "item", text: "Curriculum Developer & EdTech Content Specialist" },
      { type: "item", text: "Higher Education / University Professor (via Master's + UGC-NET / Ph.D.)" },
    ],
  },
];

function Teacher() {
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
        <h1>Teacher Career Roadmap</h1>

        <p>
          Follow this roadmap to become a certified Teacher in India across Primary,
          Secondary, and Senior Secondary levels. Build strong subject expertise, clear
          national eligibility tests like CTET/TET, master digital teaching tools, and 
          explore high-impact career pathways in education.
        </p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>After 12th / Grad</h3>
            <span>Earliest Entry</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>B.Ed. / CTET</h3>
            <span>Main Credentials</span>
          </div>

          <div className="stat-card">
            <ShieldCheck size={34} />
            <h3>High Stability</h3>
            <span>Career Growth</span>
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
              <strong>Low to Medium</strong> — Government teaching roles offer high job 
              security, predictable career progression, and stable income, though recruitment 
              cycles can be competitive and delayed. Private teaching offers quicker entry and 
              flexibility, but starting salaries vary widely across schools.
            </p>
          </div>

          <div className="career-card">
            <h3>Minimum Time to Become an Educator</h3>
            <p>
              Through the conventional Graduation + B.Ed. pathway, it takes roughly 
              5–6 years after Class 12 to qualify for major recruitment exams. Integrated 
              programmes like the 4-year ITEP reduce the preparation timeframe while 
              combining degree and professional teacher training.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teacher;