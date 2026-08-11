import React, { useState } from "react";
import "./Datascientist.css";

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
        type: "heading",
        text: "Other Options",
      },
      {
        type: "item",
        text: "Commerce (with Mathematics)",
      },
      {
        type: "item",
        text: "Arts (Possible but less common)",
      },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      {
        type: "heading",
        text: "Recommended Percentage",
      },
      {
        type: "item",
        text: "Top Colleges: 85–95%+",
      },
      {
        type: "item",
        text: "Good Private Colleges: 70–80%+",
      },
      {
        type: "item",
        text: "Minimum for Engineering Colleges: 60–75%",
      },
      {
        type: "item",
        text: "Aim for 85%+ to maximize opportunities",
      },
    ],
  },

  {
    title: "Entrance Exams",
    icon: <FileCheck size={28} />,
    items: [
      {
        type: "heading",
        text: "Engineering Entrance Exams",
      },
      {
        type: "item",
        text: "JEE Main",
      },
      {
        type: "item",
        text: "JEE Advanced",
      },
      {
        type: "item",
        text: "State CET Exams",
      },
      {
        type: "item",
        text: "VITEEE",
      },
      {
        type: "item",
        text: "SRMJEEE",
      },
      {
        type: "heading",
        text: "Other Degree Options",
      },
      {
        type: "item",
        text: "University-specific B.Sc. Admissions",
      },
    ],
  },

  {
    title: "Complete Your Degree",
    icon: <Laptop size={28} />,
    items: [
      {
        type: "heading",
        text: "Choose Any One",
      },
      {
        type: "item",
        text: "B.Tech Computer Science",
      },
      {
        type: "item",
        text: "B.Tech AI & Data Science",
      },
      {
        type: "item",
        text: "B.Tech AI & Machine Learning",
      },
      {
        type: "item",
        text: "B.Sc. Data Science",
      },
      {
        type: "item",
        text: "B.Sc. Statistics + Programming",
      },
    ],
  },

  {
    title: "Learn Important Skills",
    icon: <Code2 size={28} />,
    items: [
      {
        type: "heading",
        text: "Programming",
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
        type: "item",
        text: "R (Optional)",
      },

      {
        type: "heading",
        text: "Mathematics",
      },
      {
        type: "item",
        text: "Probability",
      },
      {
        type: "item",
        text: "Statistics",
      },
      {
        type: "item",
        text: "Linear Algebra",
      },
      {
        type: "item",
        text: "Calculus",
      },

      {
        type: "heading",
        text: "Data Handling",
      },
      {
        type: "item",
        text: "Excel",
      },
      {
        type: "item",
        text: "SQL",
      },
      {
        type: "item",
        text: "Data Cleaning",
      },

      {
        type: "heading",
        text: "Python Libraries",
      },
      {
        type: "item",
        text: "NumPy",
      },
      {
        type: "item",
        text: "Pandas",
      },
      {
        type: "item",
        text: "Matplotlib",
      },
      {
        type: "item",
        text: "Scikit-learn",
      },
      {
        type: "item",
        text: "TensorFlow / PyTorch",
      },

      {
        type: "heading",
        text: "Machine Learning",
      },
      {
        type: "item",
        text: "Regression",
      },
      {
        type: "item",
        text: "Classification",
      },
      {
        type: "item",
        text: "Clustering",
      },
      {
        type: "item",
        text: "Decision Trees",
      },
      {
        type: "item",
        text: "Random Forest",
      },
      {
        type: "item",
        text: "Neural Networks",
      },

      {
        type: "heading",
        text: "Visualization",
      },
      {
        type: "item",
        text: "Power BI",
      },
      {
        type: "item",
        text: "Tableau",
      },

      {
        type: "heading",
        text: "Big Data",
      },
      {
        type: "item",
        text: "Apache Spark",
      },
      {
        type: "item",
        text: "Hadoop",
      },

      {
        type: "heading",
        text: "Cloud",
      },
      {
        type: "item",
        text: "AWS",
      },
      {
        type: "item",
        text: "Microsoft Azure",
      },
      {
        type: "item",
        text: "Google Cloud",
      },

      {
        type: "heading",
        text: "Soft Skills",
      },
      {
        type: "item",
        text: "Problem Solving",
      },
      {
        type: "item",
        text: "Communication",
      },
      {
        type: "item",
        text: "Critical Thinking",
      },
      {
        type: "item",
        text: "Presentation Skills",
      },
    ],
  },

  {
    title: "Career Roadmap",
    icon: <GraduationCap size={28} />,
    items: [
      {
        type: "heading",
        text: "Class 11–12",
      },
      {
        type: "item",
        text: "Focus on PCM",
      },
      {
        type: "item",
        text: "Learn Python",
      },
      {
        type: "item",
        text: "Learn Basic SQL",
      },

      {
        type: "heading",
        text: "First Year",
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
        type: "item",
        text: "Git & GitHub",
      },
      {
        type: "item",
        text: "Data Structures",
      },
      {
        type: "item",
        text: "Mathematics",
      },

      {
        type: "heading",
        text: "Second Year",
      },
      {
        type: "item",
        text: "Machine Learning",
      },
      {
        type: "item",
        text: "Statistics",
      },
      {
        type: "item",
        text: "Power BI / Tableau",
      },
      {
        type: "item",
        text: "Build Projects",
      },

      {
        type: "heading",
        text: "Third Year",
      },
      {
        type: "item",
        text: "Deep Learning",
      },
      {
        type: "item",
        text: "Cloud Basics",
      },
      {
        type: "item",
        text: "Hackathons",
      },
      {
        type: "item",
        text: "Internship",
      },

      {
        type: "heading",
        text: "Fourth Year",
      },
      {
        type: "item",
        text: "Advanced Machine Learning",
      },
      {
        type: "item",
        text: "Resume Building",
      },
      {
        type: "item",
        text: "Placements",
      },
      {
        type: "item",
        text: "Interview Preparation",
      },
    ],
  },

  {
    title: "Projects to Build",
    icon: <Laptop size={28} />,
    items: [
      {
        type: "heading",
        text: "Portfolio Projects",
      },
      {
        type: "item",
        text: "Movie Recommendation System",
      },
      {
        type: "item",
        text: "Spam Email Detector",
      },
      {
        type: "item",
        text: "Stock Price Prediction",
      },
      {
        type: "item",
        text: "House Price Predictor",
      },
      {
        type: "item",
        text: "Face Mask Detection",
      },
      {
        type: "item",
        text: "Chatbot",
      },
      {
        type: "item",
        text: "Customer Churn Prediction",
      },
      {
        type: "item",
        text: "Credit Card Fraud Detection",
      },
      {
        type: "item",
        text: "Resume Screening AI",
      },
    ],
  },

  {
    title: "Apply for Jobs",
    icon: <Briefcase size={28} />,
    items: [
      {
        type: "heading",
        text: "Build Your Profile",
      },
      {
        type: "item",
        text: "Strong Resume",
      },
      {
        type: "item",
        text: "GitHub Portfolio",
      },
      {
        type: "item",
        text: "LinkedIn Profile",
      },
      {
        type: "item",
        text: "Kaggle Profile",
      },

      {
        type: "heading",
        text: "Apply Through",
      },
      {
        type: "item",
        text: "College Placements",
      },
      {
        type: "item",
        text: "Company Career Pages",
      },
      {
        type: "item",
        text: "Job Portals",
      },
      {
        type: "item",
        text: "Referrals",
      },
      {
        type: "item",
        text: "Internships",
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
        text: "Data Analyst",
      },
      {
        type: "item",
        text: "Business Analyst",
      },
      {
        type: "item",
        text: "Machine Learning Engineer",
      },
      {
        type: "item",
        text: "Data Scientist",
      },
      {
        type: "item",
        text: "AI Engineer",
      },
      {
        type: "item",
        text: "Research Scientist",
      },
      {
        type: "item",
        text: "Analytics Consultant",
      },
    ],
  },
];

function Datascientist() {
  const [open, setOpen] = useState(null);

const toggleCard = (index) => {
    if (open === index) {
        setOpen(null);
    } else {
        setOpen(index);
    }
};

  return (
    <div className="datascientist">
      {/* HERO */}
      <section className="hero">
        <h1>Data Scientist Roadmap</h1>

<p>
Follow this roadmap to become a successful Data Scientist. Learn the right skills,
build impactful projects, and prepare for one of the fastest-growing careers in technology.
</p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>4–5 Years</h3>
            <span>Minimum Time</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>₹5–12 LPA</h3>
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
             Students who consistently practice programming, strengthen their mathematics and statistics, build real-world machine learning projects, participate in internships, and continuously upgrade their skills have a <strong>High Chance of Success.</strong>
            </p>
          </div>

          <div className="career-card">
            <h2>Minimum Time to Start Earning</h2>
            <p>
              Most students begin earning after 4–5 years by completing their degree, building a strong portfolio, gaining internship experience, and securing placements in Data Science, Machine Learning, or AI roles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Datascientist;