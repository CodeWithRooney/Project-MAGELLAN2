import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Compass,
  GraduationCap,
  Brain,
  BookOpen,
  BriefcaseBusiness,
  UserRound,
  Search,
  Map,
  FileCheck2,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import "./Landingpage.css";


const Landingpage = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <div className="landing-page">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="navbar">

        <div className="brand">

          <div className="brand-icon">
            <img
              src="/images/logo.jpeg"
              alt="Magellan logo"
              className="brand-logo"
            />
          </div>

          <div className="brand-name">
            MAGELLAN
          </div>

        </div>


        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>


        <div
          className={`nav-links ${
            menuOpen ? "nav-links-open" : ""
          }`}
        >

          <a
            href="#about"
            onClick={closeMenu}
          >
            ABOUT
          </a>

          <a
            href="#how-it-works"
            onClick={closeMenu}
          >
            HOW IT WORKS
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            CONTACT
          </a>

          <button
            className="login-small"
            onClick={() => {
              closeMenu();
              navigate("/login");
            }}
          >
            LOGIN
          </button>

          <button
            className="nav-primary-button"
            onClick={() => {
              closeMenu();
              navigate("/signup");
            }}
          >
            GET STARTED
            <ArrowRight size={17} />
          </button>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ====================================================== */}

      <main>

        <section className="hero-section">

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span></span>
              AI POWERED CAREER GUIDANCE
            </div>


            <h1 className="hero-content-title">
              Navigate your potential.
              <br />
              Discover your path.
              <br />
              Build your future.
            </h1>


            <p className="hero-content-subtitle">
              Magellan helps students understand their strengths,
              explore career possibilities, and make informed
              decisions about their future.
            </p>


            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => navigate("/signup")}
              >
                GET STARTED
                <ArrowRight size={21} />
              </button>


              <button
                className="secondary-button"
                onClick={() => navigate("/login")}
              >
                LOG IN
              </button>

            </div>


            <div className="hero-note">
              Create your profile and let Magellan guide you.
            </div>

          </div>


          <div className="hero-image-wrapper">

            <div className="hero-image-glow"></div>

            <img
              src="/images/image.png"
              alt="A student exploring different career paths"
              className="small-hero-image"
            />

          </div>

        </section>


        {/* =====================================================
            INTRODUCTION VISUAL
        ====================================================== */}

        <section className="visual-section">

          <div className="visual-content">

            <div className="section-eyebrow">
              YOUR JOURNEY STARTS HERE
            </div>

            <h2>
              One direction.
              <br />
              Many possibilities.
            </h2>

            <p>
              Choosing a career can feel overwhelming when there are
              too many options and no clear starting point.
              Magellan brings your interests, skills, goals, and
              possibilities together in one place.
            </p>


            <button
              className="text-button"
              onClick={() => navigate("/signup")}
            >
              Start exploring
              <ArrowRight size={19} />
            </button>

          </div>


          <div className="main-visual">

            <img
              src="/images/image2.png"
              alt="Magellan student journey"
            />

          </div>

        </section>


        {/* =====================================================
            WHY MAGELLAN
        ====================================================== */}

        <section
          className="why-section"
          id="about"
        >

          <div className="section-heading">

            <div className="section-eyebrow dark-eyebrow">
              WHY MAGELLAN
            </div>

            <h2>
              Guidance built around you.
            </h2>

            <p>
              Magellan brings together career exploration,
              personalized guidance, learning support, and
              opportunities to help students move forward.
            </p>

          </div>


          <div className="features-grid">


            {/* Career paths */}

            <div className="feature">

              <div className="feature-icon">
                <Compass size={38} />
              </div>

              <div className="feature-content">

                <h3>
                  Explore Career Paths
                </h3>

                <p>
                  Discover career options based on your
                  interests, strengths, subjects, and goals.
                </p>

              </div>

            </div>


            {/* Personalized guidance */}

            <div className="feature">

              <div className="feature-icon">
                <Brain size={38} />
              </div>

              <div className="feature-content">

                <h3>
                  Personalized Guidance
                </h3>

                <p>
                  Get AI powered guidance that uses your
                  profile to make conversations more relevant.
                </p>

              </div>

            </div>


            {/* Learning */}

            <div className="feature">

              <div className="feature-icon">
                <BookOpen size={38} />
              </div>

              <div className="feature-content">

                <h3>
                  Build Your Skills
                </h3>

                <p>
                  Understand what to learn and develop the
                  skills that support your chosen direction.
                </p>

              </div>

            </div>


            {/* Opportunities */}

            <div className="feature">

              <div className="feature-icon">
                <BriefcaseBusiness size={38} />
              </div>

              <div className="feature-content">

                <h3>
                  Discover Opportunities
                </h3>

                <p>
                  Find relevant competitions, internships,
                  scholarships, and other opportunities.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            HOW MAGELLAN WORKS
        ====================================================== */}

        <section
          className="how-section"
          id="how-it-works"
        >

          <div className="section-heading">

            <div className="section-eyebrow">
              HOW IT WORKS
            </div>

            <h2>
              From uncertainty to direction.
            </h2>

            <p>
              Magellan starts with understanding you and then
              helps you explore what comes next.
            </p>

          </div>


          <div className="steps-container">


            {/* Step 1 */}

            <div className="step">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                <UserRound size={36} />
              </div>

              <h3>
                Create your profile
              </h3>

              <p>
                Tell Magellan about your interests,
                subjects, skills, hobbies, and goals.
              </p>

            </div>


            <div className="step-line"></div>


            {/* Step 2 */}

            <div className="step">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                <Search size={36} />
              </div>

              <h3>
                Explore your possibilities
              </h3>

              <p>
                Explore careers, learning paths,
                and opportunities that match your profile.
              </p>

            </div>


            <div className="step-line"></div>


            {/* Step 3 */}

            <div className="step">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                <Map size={36} />
              </div>

              <h3>
                Build your path
              </h3>

              <p>
                Use personalized guidance to understand
                your next steps and keep moving forward.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="cta-section">

          <div className="cta-decoration">
            <GraduationCap size={70} />
          </div>

          <div className="cta-content">

            <div className="section-eyebrow">
              START YOUR JOURNEY
            </div>

            <h2>
              Your future starts with a direction.
            </h2>

            <p>
              Create your Magellan profile and start
              exploring the possibilities ahead.
            </p>


            <button
              className="cta-button"
              onClick={() => navigate("/signup")}
            >
              GET STARTED
              <ArrowRight size={21} />
            </button>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="footer"
        id="contact"
      >

        <div className="footer-brand">

          <img
            src="/images/logo.jpeg"
            alt="Magellan logo"
            className="footer-logo"
          />

          <div>

            <div className="footer-name">
              MAGELLAN
            </div>

            <p>
              Guiding futures. Discovering possibilities.
            </p>

          </div>

        </div>


        <div className="footer-links">

          <a href="#about">
            About
          </a>

          <a href="#how-it-works">
            How it works
          </a>

          <a href="mailto:project.magellan.dev2026@gmail.com">
            Contact
          </a>

        </div>


        <div className="footer-contact">

          <span>
            CONTACT
          </span>

          <a href="mailto:project.magellan.dev2026@gmail.com">
            project.magellan.dev2026@gmail.com
          </a>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Magellan
          </span>

          <span>
            Built for students, by students.
          </span>

        </div>

      </footer>

    </div>
  );
};


export default Landingpage;