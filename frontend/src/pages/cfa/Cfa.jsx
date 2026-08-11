import React, { useState } from "react";
import "./Cfa.css";

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
        text: "Commerce with Mathematics",
      },
      {
        type: "item",
        text: "Accountancy",
      },
      {
        type: "item",
        text: "Economics",
      },
      {
        type: "item",
        text: "Business Studies",
      },
      {
        type: "item",
        text: "Mathematics",
      },

      {
        type: "heading",
        text: "Other Options",
      },
      {
        type: "item",
        text: "Science (PCM/PCB)",
      },
      {
        type: "item",
        text: "Arts (Possible but Commerce is preferred)",
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
        text: "Good Marks Help in College Admissions & Internships",
      },
    ],
  },

  {
    title: "Complete Your Degree",
    icon: <Laptop size={28} />,
    items: [
      {
        type: "heading",
        text: "Recommended Degrees",
      },
      {
        type: "item",
        text: "B.Com (Hons.)",
      },
      {
        type: "item",
        text: "BBA (Finance)",
      },
      {
        type: "item",
        text: "BA Economics",
      },
      {
        type: "item",
        text: "BMS",
      },
      {
        type: "item",
        text: "B.Sc Finance",
      },
      {
        type: "item",
        text: "B.Tech (Also Eligible)",
      },
    ],
  },

  {
    title: "Entrance Exams",
    icon: <FileCheck size={28} />,
    items: [
      {
        type: "heading",
        text: "For CFA",
      },
      {
        type: "item",
        text: "No Entrance Exam",
      },
      {
        type: "item",
        text: "Register Directly for CFA Exams",
      },

      {
        type: "heading",
        text: "For College Admission",
      },
      {
        type: "item",
        text: "CUET",
      },
      {
        type: "item",
        text: "University-specific Entrance Exams",
      },
    ],
  },

  {
    title: "Complete CFA Levels",
    icon: <GraduationCap size={28} />,
    items: [
      {
        type: "heading",
        text: "Level I",
      },
      {
        type: "item",
        text: "Investment Tools",
      },
      {
        type: "item",
        text: "Ethics",
      },
      {
        type: "item",
        text: "Economics",
      },
      {
        type: "item",
        text: "Financial Reporting",
      },
      {
        type: "item",
        text: "Quantitative Methods",
      },

      {
        type: "heading",
        text: "Level II",
      },
      {
        type: "item",
        text: "Asset Valuation",
      },
      {
        type: "item",
        text: "Financial Analysis",
      },
      {
        type: "item",
        text: "Equity",
      },
      {
        type: "item",
        text: "Fixed Income",
      },

      {
        type: "heading",
        text: "Level III",
      },
      {
        type: "item",
        text: "Portfolio Management",
      },
      {
        type: "item",
        text: "Wealth Management",
      },
      {
        type: "item",
        text: "Advanced Investment Strategies",
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
        text: "Financial Accounting",
      },
      {
        type: "item",
        text: "Corporate Finance",
      },
      {
        type: "item",
        text: "Economics",
      },
      {
        type: "item",
        text: "Statistics",
      },
      {
        type: "item",
        text: "Financial Modeling",
      },
      {
        type: "item",
        text: "Valuation",
      },
      {
        type: "item",
        text: "Portfolio Management",
      },
      {
        type: "item",
        text: "Equity Research",
      },
      {
        type: "item",
        text: "Fixed Income",
      },
      {
        type: "item",
        text: "Derivatives",
      },
      {
        type: "item",
        text: "Alternative Investments",
      },

      {
        type: "heading",
        text: "Software",
      },
      {
        type: "item",
        text: "Advanced Microsoft Excel",
      },
      {
        type: "item",
        text: "Power BI",
      },
      {
        type: "item",
        text: "Bloomberg Terminal",
      },
      {
        type: "item",
        text: "Python",
      },
      {
        type: "item",
        text: "SQL",
      },

      {
        type: "heading",
        text: "Soft Skills",
      },
      {
        type: "item",
        text: "Analytical Thinking",
      },
      {
        type: "item",
        text: "Decision Making",
      },
      {
        type: "item",
        text: "Communication",
      },
      {
        type: "item",
        text: "Presentation Skills",
      },
      {
        type: "item",
        text: "Business Writing",
      },
      {
        type: "item",
        text: "Time Management",
      },
    ],
  },

  {
    title: "Certifications & Internships",
    icon: <Laptop size={28} />,
    items: [
      {
        type: "heading",
        text: "Useful Certifications",
      },
      {
        type: "item",
        text: "Financial Modeling",
      },
      {
        type: "item",
        text: "Advanced Excel",
      },
      {
        type: "item",
        text: "Power BI",
      },
      {
        type: "item",
        text: "Python for Finance",
      },
      {
        type: "item",
        text: "Bloomberg Market Concepts (BMC)",
      },

      {
        type: "heading",
        text: "Internship Opportunities",
      },
      {
        type: "item",
        text: "Investment Firms",
      },
      {
        type: "item",
        text: "Banks",
      },
      {
        type: "item",
        text: "Asset Management Companies",
      },
      {
        type: "item",
        text: "Brokerage Firms",
      },
      {
        type: "item",
        text: "Consulting Firms",
      },
      {
        type: "item",
        text: "Research Firms",
      },
    ],
  },

  {
    title: "Apply for Jobs",
    icon: <Briefcase size={28} />,
    items: [
      {
        type: "heading",
        text: "Preparation",
      },
      {
        type: "item",
        text: "Complete Bachelor's Degree",
      },
      {
        type: "item",
        text: "Pass CFA Level I (or Higher)",
      },
      {
        type: "item",
        text: "Gain Internship Experience",
      },
      {
        type: "item",
        text: "Build Resume",
      },
      {
        type: "item",
        text: "Highlight CFA Progress & Projects",
      },

      {
        type: "heading",
        text: "Job Roles",
      },
      {
        type: "item",
        text: "Financial Analyst",
      },
      {
        type: "item",
        text: "Investment Analyst",
      },
      {
        type: "item",
        text: "Equity Research Analyst",
      },
      {
        type: "item",
        text: "Risk Analyst",
      },
      {
        type: "item",
        text: "Portfolio Analyst",
      },
      {
        type: "item",
        text: "Credit Analyst",
      },
      {
        type: "item",
        text: "Corporate Finance Analyst",
      },
      {
        type: "item",
        text: "Wealth Management Analyst",
      },
    ],
  },

  {
    title: "Career Opportunities",
    icon: <Briefcase size={28} />,
    items: [
      {
        type: "heading",
        text: "Industries",
      },
      {
        type: "item",
        text: "Investment Banking",
      },
      {
        type: "item",
        text: "Equity Research",
      },
      {
        type: "item",
        text: "Asset Management",
      },
      {
        type: "item",
        text: "Hedge Funds",
      },
      {
        type: "item",
        text: "Mutual Funds",
      },
      {
        type: "item",
        text: "Portfolio Management",
      },
      {
        type: "item",
        text: "Corporate Finance",
      },
      {
        type: "item",
        text: "Private Equity",
      },
      {
        type: "item",
        text: "Venture Capital",
      },
      {
        type: "item",
        text: "Risk Management",
      },
      {
        type: "item",
        text: "Financial Consulting",
      },
    ],
  },
];


function Cfa() {
  const [open, setOpen] = useState(null);

const toggleCard = (index) => {
    if (open === index) {
        setOpen(null);
    } else {
        setOpen(index);
    }
};

  return (
    <div className="cfa">
      {/* HERO */}
      <section className="hero">
<h1>Chartered Financial Analyst (CFA) Roadmap</h1>

<p>
Follow this roadmap to become a successful Chartered Financial Analyst (CFA).
Build a strong foundation in finance, complete the CFA Program, gain practical
experience, and prepare for careers in investment banking, portfolio management,
equity research, and financial analysis.
</p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>5-7 Years</h3>
            <span>Minimum Time</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>₹5–8 LPA</h3>
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
            Students who consistently prepare for the CFA examinations, strengthen their finance and analytical skills, gain internship experience, and continue learning have a <strong>High Chance of Success</strong> in investment and finance careers.
            </p>
          </div>

          <div className="career-card">
            <h2>Minimum Time to Start Earning</h2>
            <p>
              Most students begin earning after completing their bachelor's degree and securing internships or entry-level finance roles. Many continue completing CFA Levels while working.

Minimum Time: Around 5–7 years after Class 10 (including bachelor's degree and initial CFA progress).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cfa;