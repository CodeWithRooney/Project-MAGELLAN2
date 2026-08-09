import React, { useState } from "react";
import "./Psychologist.css";

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
      { type: "item", text: "Humanities / Arts (Recommended)" },
      { type: "item", text: "Science (PCM / PCB)" },
      { type: "item", text: "Commerce" },

      { type: "heading", text: "Recommended Strategy" },
      { type: "item", text: "Humanities with Psychology, Sociology, and English is the most natural fit." },
      { type: "item", text: "Science students excel in Neuropsychology, Cognitive Science, and Research." },
      { type: "item", text: "Commerce students have a strong foundation for Organizational / Industrial Psychology." },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "Minimum Eligibility Benchmark" },
      { type: "item", text: "50% aggregate in Class 12 for basic eligibility across most universities." },

      { type: "heading", text: "Recommended Target" },
      { type: "item", text: "Aim for 75%–85%+ in Class 12 to secure admissions in top central and state universities." },
    ],
  },

  {
    title: "Degree & Specialization Pathways",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Route A — Counselling & Organizational Psychology" },
      { type: "item", text: "Class 12 → BA / BSc Psychology (3–4 years) → MA / MSc Psychology (2 years)." },
      { type: "item", text: "Focus on Counseling, Human Resources, School Psychology, or Behavioral Science." },

      { type: "heading", text: "Route B — Clinical Psychology (RCI Licensed)" },
      { type: "item", text: "BA/BSc Psychology → MA/MSc Psychology → RCI-Approved Qualification (M.Phil / RCI-Regulated MA / Professional Diploma)." },
      { type: "item", text: "Mandatory to obtain a Central Rehabilitation Register (CRR) license from RCI to diagnose and treat clinical mental disorders." },
    ],
  },

  {
    title: "Entrance Exams & University Admissions",
    icon: <ShieldCheck size={28} />,
    items: [
      { type: "heading", text: "Undergraduate Admissions" },
      { type: "item", text: "CUET-UG for central and state university BA/BSc Psychology Honours admissions." },

      { type: "heading", text: "Postgraduate & Licensing Admissions" },
      { type: "item", text: "CUET-PG for university Master's degree programs." },
      { type: "item", text: "RCI-accredited entrance exams & interview rounds for specialized clinical psychology programs." },
    ],
  },

  {
    title: "Build Critical Psychological Skills",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Core Clinical & Soft Skills" },
      { type: "item", text: "Active Listening, Non-Judgmental Communication, & Empathy" },
      { type: "item", text: "Psychological Assessment, Diagnostics, & Psychotherapy Techniques" },
      { type: "item", text: "Emotional Intelligence & Self-Regulation" },

      { type: "heading", text: "Research & Analytical Tools" },
      { type: "item", text: "Research Methodology, Experimental Design, & Academic Writing" },
      { type: "item", text: "Statistical Tools: Excel, SPSS, JASP, or R for Data Analysis" },
      { type: "item", text: "UX Research & Behavioral Analytics for tech roles" },
    ],
  },

  {
    title: "Career Fields & Workplaces",
    icon: <Users size={28} />,
    items: [
      { type: "heading", text: "Clinical & Healthcare" },
      { type: "item", text: "Hospitals, Mental Health Clinics, Rehabilitation Centers, & Private Practice" },

      { type: "heading", text: "Educational & Corporate" },
      { type: "item", text: "School / College Counselors, Corporate HR / People Analytics, & Employee Wellbeing Specialists" },

      { type: "heading", text: "Research & Emerging Tech" },
      { type: "item", text: "University Professorships, Behavioral Science, UX Research, & Digital Mental Health Platforms" },
    ],
  },

  {
    title: "Career Growth & Earnings Upside",
    icon: <TrendingUp size={28} />,
    items: [
      { type: "heading", text: "Professional Progress Ladder" },
      { type: "item", text: "Assistant Counselor / Researcher → Consultant Psychologist → Senior Practitioner / Head of Department" },

      { type: "heading", text: "High-Upside Opportunities" },
      { type: "item", text: "Established Private Practice & Tele-Health Consultation" },
      { type: "item", text: "Corporate Talent Management & Behavioral Consulting" },
      { type: "item", text: "Global Research Grants, PhD Pathways, & Academic Leadership" },
    ],
  },
];

function Psychologist() {
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
        <h1>Psychologist Career Roadmap</h1>

        <p>
          Follow this roadmap to become a qualified Psychologist in India across Clinical,
          Counselling, Educational, or Industrial-Organizational fields. Master psychological 
          assessments, build statistical research skills, obtain RCI licensing where required, 
          and explore high-impact opportunities in healthcare, corporates, and academia.
        </p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>BA + MA Degree</h3>
            <span>Earliest Entry</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>CUET / RCI</h3>
            <span>Main Credentials</span>
          </div>

          <div className="stat-card">
            <ShieldCheck size={34} />
            <h3>Growing Demand</h3>
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
              <strong>Medium</strong> — A Bachelor's degree alone is usually insufficient for 
              independent practice. The field requires a Master's degree and specialized postgraduate 
              qualifications (or RCI licensing for clinical practice). Starting salaries can be modest, 
              but earnings increase significantly with specialization, experience, and private practice.
            </p>
          </div>

          <div className="career-card">
            <h3>Minimum Time to Become a Licensed Practitioner</h3>
            <p>
              A general counselling or organizational psychology route takes 5 years (BA + MA). 
              Becoming a licensed Clinical Psychologist requires an additional 1 to 2 years of 
              RCI-approved professional clinical training, totaling 6–7 years after Class 12.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Psychologist;