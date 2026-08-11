import React, { useState } from "react";
import "./Lawyer.css";

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
      { type: "item", text: "Science" },
      { type: "item", text: "Commerce" },
      { type: "item", text: "Arts (Most Common Choice)" },
    ],
  },
  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "Eligibility" },
      { type: "item", text: "45%–50% (Varies by College & Category)" },
      { type: "item", text: "Top Law Schools Focus More on Entrance Exam Rank" },
    ],
  },
  {
    title: "Entrance Exams",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "National Level" },
      { type: "item", text: "CLAT UG" },
      { type: "item", text: "AILET" },
      { type: "item", text: "SLAT" },
      { type: "item", text: "MH CET Law" },
      { type: "item", text: "LSAT-style Admissions" },
      { type: "item", text: "CUET" },
    ],
  },
  {
    title: "Complete Your Course",
    icon: <Laptop size={28} />,
    items: [
      { type: "heading", text: "Choose Any One" },
      { type: "item", text: "BA LLB (Hons.)" },
      { type: "item", text: "BBA LLB" },
      { type: "item", text: "BCom LLB" },
      { type: "item", text: "BSc LLB" },
    ],
  },
  {
    title: "After Graduation",
    icon: <Briefcase size={28} />,
    items: [
      { type: "heading", text: "Next Step" },
      { type: "item", text: "Enroll with the State Bar Council" },
      { type: "item", text: "Complete Required Formalities" },
      { type: "item", text: "Start Practicing as an Advocate" },
    ],
  },
  {
    title: "Optional Higher Studies",
    icon: <GraduationCap size={28} />,
    items: [
      { type: "heading", text: "Higher Education" },
      { type: "item", text: "LLM" },
      { type: "item", text: "PhD" },
      { type: "item", text: "Cyber Law Certification" },
      { type: "item", text: "IP Law Certification" },
      { type: "item", text: "Arbitration Certification" },
    ],
  },
  {
    title: "Learn Important Skills",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Academic Skills" },
      { type: "item", text: "English Language" },
      { type: "item", text: "Legal Reasoning" },
      { type: "item", text: "Logical Thinking" },
      { type: "item", text: "Current Affairs" },
      { type: "item", text: "Constitutional Knowledge" },
      { type: "item", text: "Legal Research" },
      { type: "item", text: "Legal Drafting" },
      { type: "heading", text: "Professional Skills" },
      { type: "item", text: "Public Speaking" },
      { type: "item", text: "Confidence" },
      { type: "item", text: "Negotiation" },
      { type: "item", text: "Critical Thinking" },
      { type: "item", text: "Persuasion" },
      { type: "item", text: "Networking" },
      { type: "item", text: "Time Management" },
      { type: "item", text: "Attention to Detail" },
    ],
  },
  {
    title: "Apply for Jobs",
    icon: <Briefcase size={28} />,
    items: [
      { type: "heading", text: "During Law School" },
      { type: "item", text: "Complete Internships Every Semester" },
      { type: "item", text: "Participate in Moot Court Competitions" },
      { type: "item", text: "Join Legal Aid Clinics" },
      { type: "item", text: "Build LinkedIn Profile" },
      { type: "item", text: "Publish Legal Articles" },
      { type: "heading", text: "After Graduation" },
      { type: "item", text: "Law Firms" },
      { type: "item", text: "Corporate Legal Departments" },
      { type: "item", text: "Banks" },
      { type: "item", text: "Government Legal Services" },
      { type: "item", text: "NGOs" },
      { type: "item", text: "Independent Litigation under Senior Advocate" },
    ],
  },
  {
    title: "Types of Lawyers",
    icon: <Briefcase size={28} />,
    items: [
      { type: "heading", text: "Career Options" },
      { type: "item", text: "Criminal Lawyer" },
      { type: "item", text: "Civil Lawyer" },
      { type: "item", text: "Corporate Lawyer" },
      { type: "item", text: "Cyber Lawyer" },
      { type: "item", text: "Intellectual Property Lawyer" },
      { type: "item", text: "Family Lawyer" },
      { type: "item", text: "Tax Lawyer" },
      { type: "item", text: "Constitutional Lawyer" },
      { type: "item", text: "Environmental Lawyer" },
      { type: "item", text: "Real Estate Lawyer" },
      { type: "item", text: "International Lawyer" },
    ],
  },
];

function Lawyer() {
  const [open, setOpen] = useState(null);

const toggleCard = (index) => {
    if (open === index) {
        setOpen(null);
    } else {
        setOpen(index);
    }
};

  return (
    <div className="lawyer">
      {/* HERO */}
      <section className="hero">
        <h1>Lawyer Roadmap</h1>
        <p>
          Follow this roadmap to become a successful Lawyer in India. Complete
          every milestone and build the skills required to excel in the legal
          profession.
        </p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>4–6 Years</h3>
            <span>Minimum Time</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>₹4–10 LPA</h3>
            <span>Average Starting Salary</span>
          </div>

          <div className="stat-card">
            <ShieldCheck size={34} />
            <h3>High</h3>
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
              Students who develop strong legal knowledge, improve communication
              skills, participate in internships, moot courts, and build a strong
              professional network have a <strong>High Chance of Success.</strong>
            </p>
          </div>

          <div className="career-card">
            <h2>Minimum Time to Start Earning</h2>
            <p>
              Most students begin practicing after completing their 5-year LLB
              and enrolling with the State Bar Council.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lawyer;