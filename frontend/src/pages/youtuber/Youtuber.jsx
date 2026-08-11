import React, { useState } from "react";
import "./Youtuber.css";

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
      { type: "item", text: "Humanities / Arts" },
      { type: "item", text: "Commerce" },
      { type: "item", text: "Science (PCM / PCB)" },

      { type: "heading", text: "Recommended Strategy" },
      { type: "item", text: "Choose any stream after Class 10 based on the content niche you enjoy." },
      { type: "item", text: "Science for Tech, AI, Coding, & Science Education." },
      { type: "item", text: "Commerce for Personal Finance, Business, & Entrepreneurship." },
      { type: "item", text: "Arts for Storytelling, Pop Culture, History, & Media." },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "Academic Eligibility" },
      { type: "item", text: "0% — YouTube and content platforms have no minimum academic requirements." },

      { type: "heading", text: "Recommended Target" },
      { type: "item", text: "Maintain a stable 60%–70%+ in Class 12 to secure college admission as a safety backup." },
    ],
  },

  {
    title: "Education & Backup Routes",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Route A — Media & Mass Communication" },
      { type: "item", text: "BA Journalism / Mass Communication / Digital Media." },
      { type: "item", text: "Provides structured training in video production, scripting, and media ethics." },

      { type: "heading", text: "Route B — College Degree + YouTube on the Side (Recommended)" },
      { type: "item", text: "Pursue any standard bachelor's degree while building your channel during off-hours." },

      { type: "heading", text: "Route C — Self-Taught Creator" },
      { type: "item", text: "Directly start creating content after Class 12 using online tutorials, workshops, and practice." },
    ],
  },

  {
    title: "Entrance Exams & Formal Admissions",
    icon: <ShieldCheck size={28} />,
    items: [
      { type: "heading", text: "Creator Requirements" },
      { type: "item", text: "No entrance exam is required to start a YouTube channel or monetize content." },

      { type: "heading", text: "For Media College Admissions" },
      { type: "item", text: "CUET-UG for mass communication and media degrees in central/state universities." },
      { type: "item", text: "University-specific entrance tests / portfolio reviews for private media colleges." },
    ],
  },

  {
    title: "Build Essential Creator Skills",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Core Technical & Production Skills" },
      { type: "item", text: "Video Editing: Premiere Pro, DaVinci Resolve, or CapCut" },
      { type: "item", text: "Thumbnail Design: Photoshop & Canva (High CTR Design)" },
      { type: "item", text: "Scriptwriting: Hook Creation, Story Structure, & Audience Retention" },

      { type: "heading", text: "Growth & Business Analytics" },
      { type: "item", text: "YouTube Analytics: CTR, AVD (Average View Duration), & Traffic Sources" },
      { type: "item", text: "Public Speaking, On-Camera Presence, & Voice Modulation" },
      { type: "item", text: "Content Research, Trend Analysis, & Personal Branding" },
    ],
  },

  {
    title: "Monetization & Industry Careers",
    icon: <Users size={28} />,
    items: [
      { type: "heading", text: "Direct YouTube Revenue" },
      { type: "item", text: "AdSense Revenue, YouTube Premium, Channel Memberships, & Super Thanks" },

      { type: "heading", text: "Expanded Creator Income" },
      { type: "item", text: "Brand Sponsorships, Affiliate Marketing, Digital Products, & Courses" },

      { type: "heading", text: "Alternative Professional Roles" },
      { type: "item", text: "Video Editor, Thumbnail Designer, Content Strategist, & Channel Manager" },
    ],
  },

  {
    title: "Career Progression & Scale",
    icon: <TrendingUp size={28} />,
    items: [
      { type: "heading", text: "Creator Growth Ladder" },
      { type: "item", text: "Solo Creator → Monetized Channel → Brand Partnership Phase → Media Business / Team Leader" },

      { type: "heading", text: "High-Upside Opportunities" },
      { type: "item", text: "Launching D2C Brands & Digital Products" },
      { type: "item", text: "Cross-Platform Brand Partnerships & Speaking Engagements" },
      { type: "item", text: "Building a Production Agency or Media Network" },
    ],
  },
];

function ContentCreator() {
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
        <h1>YouTuber / Content Creator Roadmap</h1>

        <p>
          Follow this roadmap to build a successful career as a YouTuber and Digital Content Creator. 
          Master video editing, storytelling, thumbnail design, and audience analytics while 
          diversifying into brand sponsorships, product launches, and digital media careers.
        </p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>Anytime / 12th</h3>
            <span>Earliest Start</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>Portfolio / Channel</h3>
            <span>Main Credentials</span>
          </div>

          <div className="stat-card">
            <ShieldCheck size={34} />
            <h3>Uncapped Upside</h3>
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
              <strong>High to Very High</strong> — Content creation carries heavy initial 
              income unpredictability, algorithm fluctuations, intense market competition, and 
              burnout risks. Maintaining an academic or job skill backup while building a channel 
              part-time is the safest strategy.
            </p>
          </div>

          <div className="career-card">
            <h3>Minimum Time to Build a Career</h3>
            <p>
              Monetization can take anywhere from 6 to 18 months of consistent uploads. Building 
              a stable, full-time income through brand partnerships, product sales, and AdSense 
              typically takes 2–4 years of continuous execution and skill refinement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContentCreator;