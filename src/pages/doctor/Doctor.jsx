import React, { useState } from "react";
import "./Doctor.css";

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
      {
        type: "heading",
        text: "Recommended Stream",
      },
      {
        type: "item",
        text: "Science (PCB)",
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
        text: "Biology",
      },
      {
        type: "item",
        text: "English",
      },
      {
        type: "heading",
        text: "Optional",
      },
      {
        type: "item",
        text: "PCMB (Physics, Chemistry, Mathematics & Biology)",
      },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      {
        type: "heading",
        text: "Eligibility",
      },
      {
        type: "item",
        text: "General: 50% in PCB",
      },
      {
        type: "item",
        text: "OBC/SC/ST: 40% in PCB",
      },
      {
        type: "item",
        text: "EWS/General-PwD: 45% in PCB",
      },
      {
        type: "heading",
        text: "Recommended",
      },
      {
        type: "item",
        text: "Aim for 85–95%+",
      },
    ],
  },

  {
    title: "Entrance Exam",
    icon: <FileCheck size={28} />,
    items: [
      {
        type: "heading",
        text: "Medical Entrance",
      },
      {
        type: "item",
        text: "NEET-UG",
      },
      {
        type: "heading",
        text: "Subjects",
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
        text: "Biology",
      },
      {
        type: "heading",
        text: "Courses Through NEET",
      },
      {
        type: "item",
        text: "MBBS",
      },
      {
        type: "item",
        text: "BDS",
      },
      {
        type: "item",
        text: "AYUSH",
      },
      {
        type: "item",
        text: "Veterinary",
      },
      {
        type: "item",
        text: "Nursing (Some Colleges)",
      },
    ],
  },

  {
    title: "Educational Journey",
    icon: <Laptop size={28} />,
    items: [
      {
        type: "heading",
        text: "Roadmap",
      },
      {
        type: "item",
        text: "Class 11–12 (PCB)",
      },
      {
        type: "item",
        text: "NEET Preparation",
      },
      {
        type: "item",
        text: "MBBS (5.5 Years)",
      },
      {
        type: "item",
        text: "Medical Registration",
      },
      {
        type: "item",
        text: "Government/Private Hospital",
      },
      {
        type: "item",
        text: "MD/MS (Optional)",
      },
      {
        type: "item",
        text: "DM/MCh (Optional)",
      },
    ],
  },

  {
    title: "Learn Important Skills",
    icon: <Code2 size={28} />,
    items: [
      {
        type: "heading",
        text: "Academic Skills",
      },
      {
        type: "item",
        text: "Biology",
      },
      {
        type: "item",
        text: "Chemistry",
      },
      {
        type: "item",
        text: "Physics Problem Solving",
      },
      {
        type: "item",
        text: "Scientific Thinking",
      },

      {
        type: "heading",
        text: "Personal Skills",
      },
      {
        type: "item",
        text: "Communication",
      },
      {
        type: "item",
        text: "Patience",
      },
      {
        type: "item",
        text: "Empathy",
      },
      {
        type: "item",
        text: "Critical Thinking",
      },
      {
        type: "item",
        text: "Decision Making",
      },
      {
        type: "item",
        text: "Observation Skills",
      },
      {
        type: "item",
        text: "Teamwork",
      },
      {
        type: "item",
        text: "Time Management",
      },

      {
        type: "heading",
        text: "Technical Skills",
      },
      {
        type: "item",
        text: "Medical Research Reading",
      },
      {
        type: "item",
        text: "Medical Software",
      },
      {
        type: "item",
        text: "Electronic Health Records",
      },
      {
        type: "item",
        text: "Clinical Documentation",
      },
    ],
  },

  {
    title: "Apply for Jobs",
    icon: <Briefcase size={28} />,
    items: [
      {
        type: "heading",
        text: "Government Hospitals",
      },
      {
        type: "item",
        text: "Medical Officer Recruitment",
      },
      {
        type: "item",
        text: "Public Health Services",
      },

      {
        type: "heading",
        text: "Private Hospitals",
      },
      {
        type: "item",
        text: "Hospital Career Portals",
      },
      {
        type: "item",
        text: "Recruitment Drives",
      },

      {
        type: "heading",
        text: "Clinics",
      },
      {
        type: "item",
        text: "Work Under Senior Doctors",
      },
      {
        type: "item",
        text: "Open Your Own Clinic",
      },

      {
        type: "heading",
        text: "Further Studies",
      },
      {
        type: "item",
        text: "MD/MS",
      },
      {
        type: "item",
        text: "DM/MCh",
      },
    ],
  },

  {
    title: "Career Opportunities",
    icon: <Briefcase size={28} />,
    items: [
      {
        type: "heading",
        text: "Career Options",
      },
      {
        type: "item",
        text: "Government Doctor",
      },
      {
        type: "item",
        text: "Private Hospital Doctor",
      },
      {
        type: "item",
        text: "Specialist Doctor",
      },
      {
        type: "item",
        text: "Medical Research",
      },
      {
        type: "item",
        text: "Medical Professor",
      },
      {
        type: "item",
        text: "Public Health",
      },
      {
        type: "item",
        text: "Telemedicine",
      },
      {
        type: "item",
        text: "Own Clinic",
      },
      {
        type: "item",
        text: "Healthcare Startup",
      },
      {
        type: "item",
        text: "International Medical Career",
      },
    ],
  },
];

function Doctor() {
  const [open, setOpen] = useState(null);

const toggleCard = (index) => {
    if (open === index) {
        setOpen(null);
    } else {
        setOpen(index);
    }
};

  return (
    <div className="doctor">
      {/* HERO */}
      <section className="hero">
   <h1>Doctor (MBBS) Roadmap</h1>

<p>
Follow this roadmap to become a successful Doctor (MBBS). Build a strong
foundation in Biology, clear NEET-UG, complete MBBS, and pursue specialization
to build a rewarding career in healthcare and medicine.
</p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>5.5-6 Years</h3>
            <span>Minimum Time</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>₹6–12 LPA</h3>
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
             Students who consistently prepare for NEET, maintain strong academic performance, develop clinical knowledge, and continue learning throughout their medical career have a <strong>High Chance of Success.</strong>
            </p>
          </div>

          <div className="career-card">
            <h2>Minimum Time to Start Earning</h2>
            <p>
              Most students begin earning during or immediately after completing the MBBS internship and registration.

Minimum Time: Around 5.5 years after Class 12.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctor;