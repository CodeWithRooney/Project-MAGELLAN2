import React, { useState } from "react";
import "./CA.css";

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
        text: "Commerce (Best Choice)",
      },
      {
        type: "item",
        text: "Accountancy",
      },
      {
        type: "item",
        text: "Business Studies",
      },
      {
        type: "item",
        text: "Economics",
      },
      {
        type: "item",
        text: "Mathematics (Recommended)",
      },
      {
        type: "item",
        text: "English",
      },
      {
        type: "heading",
        text: "Other Streams",
      },
      {
        type: "item",
        text: "Science Students are Eligible",
      },
      {
        type: "item",
        text: "Arts Students are Eligible",
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
        text: "No Minimum Percentage Required",
      },
      {
        type: "item",
        text: "Aim for 75% or Above",
      },
      {
        type: "item",
        text: "Helpful for B.Com, MBA & Other Courses",
      },
    ],
  },

  {
    title: "CA Examination Stages",
    icon: <FileCheck size={28} />,
    items: [
      {
        type: "heading",
        text: "Step 1",
      },
      {
        type: "item",
        text: "CA Foundation",
      },
      {
        type: "item",
        text: "Accounting",
      },
      {
        type: "item",
        text: "Business Laws",
      },
      {
        type: "item",
        text: "Quantitative Aptitude",
      },
      {
        type: "item",
        text: "Business Economics",
      },

      {
        type: "heading",
        text: "Step 2",
      },
      {
        type: "item",
        text: "CA Intermediate",
      },

      {
        type: "heading",
        text: "Step 3",
      },
      {
        type: "item",
        text: "2-Year Articleship",
      },

      {
        type: "heading",
        text: "Step 4",
      },
      {
        type: "item",
        text: "CA Final",
      },
    ],
  },

  {
    title: "Complete Your Qualification",
    icon: <Laptop size={28} />,
    items: [
      {
        type: "heading",
        text: "Roadmap",
      },
      {
        type: "item",
        text: "Complete Class 12",
      },
      {
        type: "item",
        text: "Register for CA Foundation",
      },
      {
        type: "item",
        text: "Pass CA Foundation",
      },
      {
        type: "item",
        text: "Pass CA Intermediate",
      },
      {
        type: "item",
        text: "Complete Articleship",
      },
      {
        type: "item",
        text: "Pass CA Final",
      },
      {
        type: "item",
        text: "Become a Chartered Accountant",
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
        text: "Accounting",
      },
      {
        type: "item",
        text: "Taxation",
      },
      {
        type: "item",
        text: "Auditing",
      },
      {
        type: "item",
        text: "Financial Reporting",
      },
      {
        type: "item",
        text: "Cost Accounting",
      },
      {
        type: "item",
        text: "Corporate Law",
      },
      {
        type: "item",
        text: "GST",
      },
      {
        type: "item",
        text: "Income Tax",
      },
      {
        type: "item",
        text: "Financial Analysis",
      },

      {
        type: "heading",
        text: "Software Skills",
      },
      {
        type: "item",
        text: "Microsoft Excel",
      },
      {
        type: "item",
        text: "Tally",
      },
      {
        type: "item",
        text: "Busy",
      },
      {
        type: "item",
        text: "SAP",
      },
      {
        type: "item",
        text: "Power BI",
      },

      {
        type: "heading",
        text: "Soft Skills",
      },
      {
        type: "item",
        text: "Communication",
      },
      {
        type: "item",
        text: "Logical Thinking",
      },
      {
        type: "item",
        text: "Analytical Ability",
      },
      {
        type: "item",
        text: "Attention to Detail",
      },
      {
        type: "item",
        text: "Time Management",
      },
      {
        type: "item",
        text: "Discipline",
      },
      {
        type: "item",
        text: "Ethics",
      },
    ],
  },

  {
    title: "Apply for Jobs",
    icon: <Briefcase size={28} />,
    items: [
      {
        type: "heading",
        text: "Campus Placements",
      },
      {
        type: "item",
        text: "ICAI Placement Drives",
      },

      {
        type: "heading",
        text: "Direct Applications",
      },
      {
        type: "item",
        text: "Company Career Pages",
      },
      {
        type: "item",
        text: "LinkedIn",
      },
      {
        type: "item",
        text: "Naukri",
      },
      {
        type: "item",
        text: "Indeed",
      },
      {
        type: "item",
        text: "Referrals",
      },

      {
        type: "heading",
        text: "Other Career Options",
      },
      {
        type: "item",
        text: "CA Firms",
      },
      {
        type: "item",
        text: "Government Jobs",
      },
      {
        type: "item",
        text: "Own CA Practice",
      },
    ],
  },

  {
    title: "Career Opportunities",
    icon: <Briefcase size={28} />,
    items: [
      {
        type: "heading",
        text: "Job Roles",
      },
      {
        type: "item",
        text: "Chartered Accountant",
      },
      {
        type: "item",
        text: "Auditor",
      },
      {
        type: "item",
        text: "Tax Consultant",
      },
      {
        type: "item",
        text: "Financial Analyst",
      },
      {
        type: "item",
        text: "Internal Auditor",
      },
      {
        type: "item",
        text: "Risk Consultant",
      },
      {
        type: "item",
        text: "Finance Manager",
      },
      {
        type: "item",
        text: "Investment Analyst",
      },
      {
        type: "item",
        text: "Business Consultant",
      },
      {
        type: "item",
        text: "Entrepreneur",
      },

      {
        type: "heading",
        text: "Industries",
      },
      {
        type: "item",
        text: "Banking",
      },
      {
        type: "item",
        text: "Consulting",
      },
      {
        type: "item",
        text: "IT",
      },
      {
        type: "item",
        text: "Manufacturing",
      },
      {
        type: "item",
        text: "Startups",
      },
      {
        type: "item",
        text: "MNCs",
      },
      {
        type: "item",
        text: "Government",
      },
      {
        type: "item",
        text: "Financial Services",
      },
    ],
  },
];

function Ca() {
  const [open, setOpen] = useState(null);

const toggleCard = (index) => {
    if (open === index) {
        setOpen(null);
    } else {
        setOpen(index);
    }
};

  return (
    <div className="ca">
      {/* HERO */}
      <section className="hero">
<h1>Chartered Accountant (CA) Roadmap</h1>

<p>
Follow this roadmap to become a successful Chartered Accountant in India.
Complete each stage, build strong accounting and finance skills, and prepare
for a rewarding career in auditing, taxation, consulting, or corporate finance.
</p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>4.5–5 Years</h3>
            <span>Minimum Time</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>₹7–12 LPA</h3>
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
             Students who consistently prepare for each CA examination, strengthen their accounting concepts, complete their articleship sincerely, and develop practical finance and taxation skills have a <strong>High Chance of Success.</strong>
            </p>
          </div>

          <div className="career-card">
            <h2>Minimum Time to Start Earning</h2>
            <p>
              Most students begin earning after successfully completing the CA Final examination and mandatory articleship.

Minimum Time: Approximately 4.5–5 years after Class 12 (if all exams are cleared on the first attempt).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ca;