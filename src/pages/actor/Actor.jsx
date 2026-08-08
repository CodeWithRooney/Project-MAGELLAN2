import React, { useState } from "react";
import "./Actor.css";

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
      { type: "item", text: "Commerce" },
      { type: "item", text: "Science" },

      { type: "heading", text: "Recommended Strategy" },
      { type: "item", text: "You can choose ANY stream after Class 10." },
      { type: "item", text: "Humanities/Arts helps build strong literature, character study, psychology, and language foundations." },
      { type: "item", text: "Focus on developing communication skills and character observation regardless of stream." },
    ],
  },

  {
    title: "Minimum Class 12 Percentage",
    icon: <BookOpen size={28} />,
    items: [
      { type: "heading", text: "Industry Standard" },
      { type: "item", text: "Passing Class 12 is generally sufficient for an acting career." },
      { type: "item", text: "No strict minimum percentage required for auditioning or casting calls." },

      { type: "heading", text: "Academic Degree Benchmark" },
      { type: "item", text: "Performing arts degrees (BA Drama/Theatre) typically require 45%–50% aggregate in Class 12 depending on the institute." },
    ],
  },

  {
    title: "Training & Degree Options",
    icon: <FileCheck size={28} />,
    items: [
      { type: "heading", text: "Route A — Professional Acting Institutes" },
      { type: "item", text: "National School of Drama (NSD), FTII, or state drama academies." },
      { type: "item", text: "Focuses on intensive practical acting, voice training, and stage presence." },

      { type: "heading", text: "Route B — Degree in Performing Arts" },
      { type: "item", text: "B.A. in Theatre / Drama / Performing Arts." },
      { type: "item", text: "Provides academic foundation and structured production experience." },

      { type: "heading", text: "Route C — College Degree + Acting on the Side (Recommended Backup)" },
      { type: "item", text: "Pursue a standard degree while doing theatre, short films, auditions, and workshops." },
    ],
  },

  {
    title: "Entrance & Audition Processes",
    icon: <ShieldCheck size={28} />,
    items: [
      { type: "heading", text: "Institute Entrances" },
      { type: "item", text: "NSD Entrance Test & Multi-Stage Audition Workshops" },
      { type: "item", text: "FTII JET (Joint Entrance Test) followed by Orientation & Auditions" },

      { type: "heading", text: "Industry Audition Pipeline" },
      { type: "item", text: "Casting Call → Profile Submission → Monologue / Script Reading → Callback → Selection" },
      { type: "item", text: "No academic entrance exam required to start auditioning for films, OTT, TV, or commercials." },
    ],
  },

  {
    title: "Build Essential Acting Skills",
    icon: <Code2 size={28} />,
    items: [
      { type: "heading", text: "Core Performance Skills" },
      { type: "item", text: "Expressions, Body Language & Emotional Expression" },
      { type: "item", text: "Voice Modulation, Diction & Dialogue Delivery" },
      { type: "item", text: "Camera Acting: Eye Lines, Marks, Close-ups, & Subtle Expressions" },
      { type: "item", text: "Character Observation & Improvisation Skills" },

      { type: "heading", text: "Networking & Portfolio Building" },
      { type: "item", text: "Professional Headshots & Clean Profile Slate" },
      { type: "item", text: "Showreel featuring Monologues and Short Film Clips" },
      { type: "item", text: "Building Relationships with Casting Directors, Assistant Directors, & Theatre Groups" },
      { type: "item", text: "Social Media Portfolio (Reels, Performance Clips, Shorts)" },
    ],
  },

  {
    title: "Finding Roles & Auditions",
    icon: <Users size={28} />,
    items: [
      { type: "heading", text: "Primary Mediums" },
      { type: "item", text: "Films (Bollywood, Regional, Independent Cinema)" },
      { type: "item", text: "Web Series & OTT Platforms" },
      { type: "item", text: "TV Commercials & Brand Advertisements" },
      { type: "item", text: "Theatre Productions & Stage Plays" },

      { type: "heading", text: "Secondary Avenues" },
      { type: "item", text: "Short Films & Independent Web Content" },
      { type: "item", text: "Voice Acting, Dubbing & Audiobooks" },
    ],
  },

  {
    title: "Career Pathways & Upside",
    icon: <TrendingUp size={28} />,
    items: [
      { type: "heading", text: "Career Progression" },
      { type: "item", text: "Theatre / Short Films → Commercials / Supporting Roles → Lead Roles / Character Roles" },

      { type: "heading", text: "High-Upside Opportunities" },
      { type: "item", text: "Film & OTT Lead Performances" },
      { type: "item", text: "Brand Endorsements & Commercial Campaigns" },
      { type: "item", text: "Digital Content Creation & Personal Brand" },
      { type: "item", text: "Voice Acting, Direction, & Creative Production" },
    ],
  },
];

function Actor() {
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
        <h1>Actor Career Roadmap</h1>

        <p>
          Follow this roadmap to build a professional career in acting across films,
          theatre, OTT web series, and advertisements. Focus on performance fundamentals,
          voice modulation, camera technique, networking, portfolio creation, and auditioning.
        </p>

        <div className="stats">
          <div className="stat-card">
            <Clock3 size={34} />
            <h3>After 10th / 12th</h3>
            <span>Earliest Start</span>
          </div>

          <div className="stat-card">
            <IndianRupee size={34} />
            <h3>Audition / Reel</h3>
            <span>Main Credentials</span>
          </div>

          <div className="stat-card">
            <ShieldCheck size={34} />
            <h3>High Creative Upside</h3>
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
              <strong>Very High</strong> — An acting career features income instability, 
              intense competition, and frequent rejection. Building financial security 
              takes time and persistence, making a parallel academic or skill-based backup plan 
              strongly recommended while establishing yourself.
            </p>
          </div>

          <div className="career-card">
            <h3>Minimum Time to Build an Acting Career</h3>
            <p>
              Developing core skills through theatre and workshops takes about 2–3 years. 
              Transitioning into paid commercials, short films, and professional screen roles 
              typically takes 3–5+ years of continuous auditioning, networking, and portfolio refinement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Actor;