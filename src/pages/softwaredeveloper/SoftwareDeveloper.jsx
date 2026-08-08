import React, { useState } from "react";
import "./SoftwareDeveloper.css";

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
  ChevronUp,
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
        text: "Science (PCM)"
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
        text: "75%+"
      },
      {
        type: "item",
        text: "Required for JEE Advanced (IIT Admission)"
      },
      {
        type: "item",
        text: "Recommended for NITs, IIITs & Top Private Colleges"
      }
    ],
  },

  {
    title: "Entrance Exams",
    icon: <FileCheck size={28} />,
    items: [

      {
        type: "heading",
        text: "National Level"
      },

      {
        type: "item",
        text: "JEE Main"
      },

      {
        type: "item",
        text: "JEE Advanced"
      },

      {
        type: "item",
        text: "BITSAT"
      },

      {
        type: "item",
        text: "CUET UG"
      },

      {
        type: "heading",
        text: "State Level"
      },

      {
        type: "item",
        text: "MHT CET"
      },

      {
        type: "item",
        text: "WBJEE"
      },

      {
        type: "item",
        text: "KCET"
      },

      {
        type: "item",
        text: "KEAM"
      },

      {
        type: "item",
        text: "AP EAMCET"
      },

      {
        type: "item",
        text: "TS EAMCET"
      },

      {
        type: "item",
        text: "COMEDK UGET"
      },

      {
        type: "heading",
        text: "Private University Exams"
      },

      {
        type: "item",
        text: "VITEEE"
      },

      {
        type: "item",
        text: "SRMJEEE"
      },

      {
        type: "item",
        text: "MET (Manipal)"
      },

      {
        type: "item",
        text: "KIITEE"
      },

      {
        type: "item",
        text: "LPUNEST"
      },

      {
        type: "item",
        text: "UPESEAT"
      },

      {
        type: "item",
        text: "CUSAT CAT"
      }

    ],
  },

  {
    title: "Complete Your Course",
    icon: <Laptop size={28} />,
    items: [

      {
        type: "heading",
        text: "Choose Any One"
      },

      {
        type: "item",
        text: "B.Tech / B.E. in Computer Science Engineering"
      },

      {
        type: "item",
        text: "B.Tech in Information Technology"
      },

      {
        type: "item",
        text: "B.Tech in Artificial Intelligence & Machine Learning"
      },

      {
        type: "item",
        text: "B.Tech in Software Engineering"
      },

      {
        type: "item",
        text: "BCA → MCA (Alternative Path)"
      }

    ],
  },

  {
    title: "Learn Important Skills",
    icon: <Code2 size={28} />,
    items: [

      {
        type: "heading",
        text: "Core Technical Skills"
      },

      {
        type: "item",
        text: "C++, Java or Python"
      },

      {
        type: "item",
        text: "Data Structures & Algorithms"
      },

      {
        type: "item",
        text: "HTML, CSS & JavaScript"
      },

      {
        type: "item",
        text: "SQL"
      },

      {
        type: "item",
        text: "Git & GitHub"
      },

      {
        type: "item",
        text: "Build 3–5 Projects"
      },

      {
        type: "item",
        text: "Complete Internships"
      },

      {
        type: "item",
        text: "Improve Communication Skills"
      }

    ],
  },

  {
    title: "Apply for Jobs",
    icon: <Briefcase size={28} />,
    items: [

      {
        type: "heading",
        text: "Apply Through"
      },

      {
        type: "item",
        text: "Campus Placements"
      },

      {
        type: "item",
        text: "LinkedIn"
      },

      {
        type: "item",
        text: "Naukri"
      },

      {
        type: "item",
        text: "Internshala"
      },

      {
        type: "item",
        text: "Company Career Pages"
      }

    ],
  },
];

function SoftwareDeveloper() {
  const [open, setOpen] = useState(null);

const toggleCard = (index) => {
    if (open === index) {
        setOpen(null);
    } else {
        setOpen(index);
    }
};
    return (
    <div className="app">

      {/* ================= HERO ================= */}

      <section className="hero">

        <h1>Software Developer Roadmap</h1>

        <p>
          Follow this roadmap to become a successful Software Developer.
          Complete every milestone and build the skills required by the
          industry.
        </p>

        <div className="stats">

          <div className="stat-card">

            <Clock3 size={34} />

            <h3>4–5 Years</h3>

            <span>Minimum Time</span>

          </div>

          <div className="stat-card">

            <IndianRupee size={34} />

            <h3>₹6–20 LPA</h3>

            <span>Average Salary</span>

          </div>

          <div className="stat-card">

            <ShieldCheck size={34} />

            <h3>High</h3>

            <span>Success Probability</span>

          </div>

        </div>

      </section>

      {/* ================= ROADMAP ================= */}

      <section className="timeline">

        {roadmap.map((step, index) => (

          <div
            className="timeline-item"
            key={index}
          >

            {/* Left Side */}

            <div className="left">

              <div
                className="circle"
                onClick={() => toggleCard(index)}
              >
                {step.icon}
              </div>

              {index !== roadmap.length - 1 && (
                <div className="line"></div>
              )}

            </div>

            {/* Right Side */}

            <div className="right">

              <div
                className="title"
                onClick={() => toggleCard(index)}
              >

                <h2>{step.title}</h2>

                <div className={`arrow ${open === index ? "rotate" : ""}`}>
    <ChevronDown />
</div>
              </div>

              {/* Floating Dropdown */}

              {open === index && (

                <div className="dropdown">

                  {step.items.map((item, i) => (

                    item.type === "heading" ? (

                      <h4
                        key={i}
                        className="dropdown-heading"
                      >
                        {item.text}
                      </h4>

                    ) : (

                      <p
                        key={i}
                        className="dropdown-item"
                      >
                        • {item.text}
                      </p>

                    )

                  ))}

                </div>

              )}

            </div>

          </div>

        ))}

      </section>

            {/* ================= CAREER FEASIBILITY ================= */}

      <section className="career">

        <h1>Career Feasibility</h1>

        <div className="career-container">

          <div className="career-card">

            <h2>Risk Factor</h2>

            <p>
              Students who practice coding regularly, build projects,
              participate in hackathons, complete internships and
              continuously improve their technical skills have a
              <strong> High Chance of Success.</strong>
            </p>

          </div>

          <div className="career-card">

            <h2>Minimum Time to Start Earning</h2>

            <p>

              Most students start earning after

              <strong> 4–5 years </strong>

              by completing their degree, gaining practical experience,
              building projects and securing internships.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default SoftwareDeveloper;