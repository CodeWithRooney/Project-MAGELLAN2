import React, { useState } from "react";
import "./Archaeologist.css";

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
      { type: "item", text: "Humanities/Arts is the most natural stream choice after Class 10." },
      { type: "item", text: "Prioritize History, Geography, Political Science, English, and Sociology." },
      { type: "item", text: "Science students can also enter for specializations like Archaeometry, Geology, or Conservation." },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "Minimum Eligibility Benchmark" },
      { type: "item", text: "50% aggregate in Class 12 keeps basic undergraduate university options open." },

      { type: "heading", text: "Recommended Target" },
      { type: "item", text: "Aim for 60%–70%+ in Class 12 to secure admissions in top central/state universities." },
    ],
  },

  {
    title: "Degree & Specialization Routes",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Route A — Direct Archaeology Path" },
      { type: "item", text: "Class 12 → BA Archaeology → MA Archaeology (Most direct & standard route)." },

      { type: "heading", text: "Route B — History Route" },
      { type: "item", text: "Class 12 → BA History → MA Archaeology (Builds strong historical source foundations)." },

      { type: "heading", text: "Route C — Anthropology / Science Route" },
      { type: "item", text: "Class 12 → BA/BSc Anthropology or Geology → MA Archaeology / Archaeological Science." },

      { type: "heading", text: "Crucial Requirement" },
      { type: "item", text: "A Master's degree (MA/MSc) + field experience is mandatory for major roles like ASI positions." },
    ],
  },

  {
    title: "Entrance Exams & Admissions",
    icon: <ShieldCheck size={28} />,
    items: [
      { type: "heading", text: "Undergraduate Admissions" },
      { type: "item", text: "CUET-UG for central/state university BA History or Archaeology programmes." },

      { type: "heading", text: "Postgraduate Admissions" },
      { type: "item", text: "CUET-PG for MA Archaeology / Ancient History admission across participating universities." },
      { type: "item", text: "Institute-specific entrance exams / merit-based selection for specialised diplomas." },
    ],
  },

  {
    title: "Build Essential Archaeological Skills",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Core Technical & Field Skills" },
      { type: "item", text: "Excavation, Surveying, Site Mapping, & Trench Recording" },
      { type: "item", text: "Archaeological Drawing, Artefact Photography, & Cataloguing" },
      { type: "item", text: "Ancient History, Epigraphy, Numismatics, & Historical Source Analysis" },

      { type: "heading", text: "Modern Digital Tools" },
      { type: "item", text: "GIS (Geographic Information Systems) & Mapping Software" },
      { type: "item", text: "AutoCAD & Photoshop for Documentation" },
      { type: "item", text: "Database Management & Basic 3D Modelling of Artefacts" },
    ],
  },

  {
    title: "Job Opportunities & Recruitment",
    icon: <Users size={28} />,
    items: [
      { type: "heading", text: "Government Sector" },
      { type: "item", text: "Archaeological Survey of India (ASI) via UPSC recruitments (e.g., Deputy Superintending Archaeologist)" },
      { type: "item", text: "State Archaeology Departments, Museums, & Archives" },

      { type: "heading", text: "Academia, Research & Private Sector" },
      { type: "item", text: "University Faculty, Research Fellowships, & PhD Pathways" },
      { type: "item", text: "Heritage Conservation Agencies, Cultural Resource Management, & Museums" },
    ],
  },

  {
    title: "Career Progression & Upside",
    icon: <TrendingUp size={28} />,
    items: [
      { type: "heading", text: "Government / ASI Career Ladder" },
      { type: "item", text: "Assistant Archaeologist → Deputy Superintending Archaeologist → Superintending Archaeologist → Director" },

      { type: "heading", text: "Specialist & Academic Avenues" },
      { type: "item", text: "University Professor / Academic Researcher" },
      { type: "item", text: "Museum Curator & Heritage Consultant" },
      { type: "item", text: "International Archaeological Research Projects & UNESCO Heritage Roles" },
    ],
  },
];

function Archaeologist() {
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
        <h1>Archaeologist Career Roadmap</h1>

        <p>
          Follow this roadmap to build a career in Archaeology in India. Develop strong 
          historical knowledge, master excavation and documentation techniques, learn digital 
          tools like GIS, clear postgraduate entries, and target positions in the Archaeological 
          Survey of India (ASI), museums, and research institutions.
        </p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>BA + MA Degree</h3>
            <span>Earliest Entry</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>CUET-PG / UPSC</h3>
            <span>Main Exams</span>
          </div>

          <div className="stat-card">
            <ShieldCheck size={34} />
            <h3>High Specialized</h3>
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
              <strong>High (7/10)</strong> — Archaeology is a niche field with a limited 
              number of permanent government positions compared to traditional sectors. 
              The path requires a long educational investment (MA/PhD), high geographical 
              mobility, and willingness to perform rigorous outdoor field work.
            </p>
          </div>

          <div className="career-card">
            <h3>Minimum Time to Become an Archaeologist</h3>
            <p>
              Professional archaeologist roles generally require a Master's degree (MA in Archaeology) 
              along with field/diploma experience. The complete educational pipeline takes roughly 
              5–6 years after Class 12 before applying for major recruitments like ASI via UPSC.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Archaeologist;