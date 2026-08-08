import React, { useState } from "react";
import "./Pilot.css";

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
        text: "Science (PCM)",
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
        text: "Mathematics",
      },
      {
        type: "item",
        text: "English",
      },
      {
        type: "heading",
        text: "Alternative Path",
      },
      {
        type: "item",
        text: "Complete Physics & Mathematics through NIOS (if not studied in Class 11–12)",
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
        text: "Pass 10+2 with Physics & Mathematics",
      },
      {
        type: "item",
        text: "60–70%+ Preferred",
      },
      {
        type: "item",
        text: "75%+ Recommended",
      },
    ],
  },

  {
    title: "Entrance Exams",
    icon: <FileCheck size={28} />,
    items: [
      {
        type: "heading",
        text: "Flying Academy Entrance",
      },
      {
        type: "item",
        text: "Aptitude Test",
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
        text: "English",
      },
      {
        type: "item",
        text: "Interview",
      },

      {
        type: "heading",
        text: "DGCA Examinations",
      },
      {
        type: "item",
        text: "Air Navigation",
      },
      {
        type: "item",
        text: "Aviation Meteorology",
      },
      {
        type: "item",
        text: "Air Regulations",
      },
      {
        type: "item",
        text: "Technical General",
      },
      {
        type: "item",
        text: "Technical Specific",
      },
      {
        type: "item",
        text: "RTR (Radio Telephony)",
      },
    ],
  },

  {
    title: "Medical Requirements",
    icon: <ShieldCheck size={28} />,
    items: [
      {
        type: "heading",
        text: "Medical Certificates",
      },
      {
        type: "item",
        text: "DGCA Class II Medical",
      },
      {
        type: "item",
        text: "DGCA Class I Medical",
      },

      {
        type: "heading",
        text: "Requirements",
      },
      {
        type: "item",
        text: "Good Eyesight (Correctable)",
      },
      {
        type: "item",
        text: "Normal Color Vision",
      },
      {
        type: "item",
        text: "Good Hearing",
      },
      {
        type: "item",
        text: "Good Physical & Mental Health",
      },
    ],
  },

  {
    title: "Licenses Required",
    icon: <GraduationCap size={28} />,
    items: [
      {
        type: "heading",
        text: "Pilot Licenses",
      },
      {
        type: "item",
        text: "Student Pilot Licence (SPL)",
      },
      {
        type: "item",
        text: "Private Pilot Licence (PPL)",
      },
      {
        type: "item",
        text: "Commercial Pilot Licence (CPL)",
      },
      {
        type: "item",
        text: "Multi-Engine Rating",
      },
      {
        type: "item",
        text: "Instrument Rating",
      },
      {
        type: "item",
        text: "Type Rating",
      },
    ],
  },

  {
    title: "Learn Important Skills",
    icon: <Code2 size={28} />,
    items: [
      {
        type: "heading",
        text: "Technical Skills",
      },
      {
        type: "item",
        text: "English Communication",
      },
      {
        type: "item",
        text: "Physics",
      },
      {
        type: "item",
        text: "Mathematics",
      },
      {
        type: "item",
        text: "Navigation",
      },
      {
        type: "item",
        text: "Weather Interpretation",
      },
      {
        type: "item",
        text: "Aircraft Systems",
      },
      {
        type: "item",
        text: "Aviation Regulations",
      },

      {
        type: "heading",
        text: "Soft Skills",
      },
      {
        type: "item",
        text: "Decision Making",
      },
      {
        type: "item",
        text: "Leadership",
      },
      {
        type: "item",
        text: "Calmness Under Pressure",
      },
      {
        type: "item",
        text: "Teamwork",
      },
      {
        type: "item",
        text: "Situational Awareness",
      },
      {
        type: "item",
        text: "Discipline",
      },
      {
        type: "item",
        text: "Time Management",
      },
      {
        type: "item",
        text: "Attention to Detail",
      },
    ],
  },

  {
    title: "Apply for Jobs",
    icon: <Briefcase size={28} />,
    items: [
      {
        type: "heading",
        text: "Career Steps",
      },
      {
        type: "item",
        text: "Complete Flying Hours",
      },
      {
        type: "item",
        text: "Obtain Type Rating",
      },
      {
        type: "item",
        text: "Apply to Airlines",
      },

      {
        type: "heading",
        text: "Major Airlines",
      },
      {
        type: "item",
        text: "IndiGo",
      },
      {
        type: "item",
        text: "Air India",
      },
      {
        type: "item",
        text: "Akasa Air",
      },
      {
        type: "item",
        text: "SpiceJet",
      },

      {
        type: "heading",
        text: "Selection Process",
      },
      {
        type: "item",
        text: "Aptitude Test",
      },
      {
        type: "item",
        text: "Simulator Assessment",
      },
      {
        type: "item",
        text: "Interview",
      },
      {
        type: "item",
        text: "Medical Examination",
      },
    ],
  },

  {
    title: "Career Opportunities",
    icon: <Briefcase size={28} />,
    items: [
      {
        type: "heading",
        text: "Career Growth",
      },
      {
        type: "item",
        text: "First Officer",
      },
      {
        type: "item",
        text: "Senior First Officer",
      },
      {
        type: "item",
        text: "Captain",
      },
      {
        type: "item",
        text: "Training Captain",
      },
      {
        type: "item",
        text: "Examiner",
      },
      {
        type: "item",
        text: "Aviation Management",
      },

      {
        type: "heading",
        text: "Benefits",
      },
      {
        type: "item",
        text: "International Career Opportunities",
      },
      {
        type: "item",
        text: "Travel Worldwide",
      },
      {
        type: "item",
        text: "High Earning Potential",
      },
    ],
  },
];
function Pilot() {
  const [open, setOpen] = useState(null);

const toggleCard = (index) => {
    if (open === index) {
        setOpen(null);
    } else {
        setOpen(index);
    }
};

  return (
    <div className="pilot">
      {/* HERO */}
      <section className="hero">
<h1>Commercial Pilot Roadmap</h1>

<p>
Follow this roadmap to become a Commercial Airline Pilot in India. Learn the
required academic qualifications, complete DGCA certifications, earn your pilot
licenses, and prepare for a rewarding aviation career.
</p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>4–6 Years</h3>
            <span>Minimum Time</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>₹18–40 LPA</h3>
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
             Students who maintain strong academic performance in PCM, clear DGCA medicals,
complete flying training, build sufficient flying hours, and continuously
improve their aviation skills have a  <strong>High Chance of Success.</strong> in becoming a
Commercial Pilot. 
            </p>
          </div>

          <div className="career-card">
            <h2>Minimum Time to Start Earning</h2>
            <p>
              Most students begin earning after completing Commercial Pilot Licence (CPL),
obtaining the required flying hours and type rating, and joining an airline as
a First Officer.

Minimum Time: Around 4–6 years after Class 10.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pilot;