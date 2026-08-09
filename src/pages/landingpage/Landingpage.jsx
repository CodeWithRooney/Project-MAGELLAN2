
import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Compass, FileText, PlaneTakeoff } from "lucide-react";
import "./Landingpage.css";


const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <div className='landing-page'>

      
{/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">
            <img
              src="/images/logo.jpeg"
              alt="MAGELLAN Logo"
              className="brand-logo"
            />
          </div>
          <div className="brand-name">MAGELLAN</div>
        </div>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT US</a>
          <button className="login-small" onClick={() => navigate("/login")}>
            LOGIN
          </button>
        </div>
      </nav>
{/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className='hero-content-title'>
            Navigate your potential.
            <br />
            Discover your path.
            <br />
            Build your future.
          </h1>
          <p className='hero-content-subtitle'>
            MAGELLAN uses AI to provide personalized guidance
            and help you discover the right path for your higher
            studies, skills and career.
          </p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={() => navigate("/login")}>
              LOGIN
            </button>
            <button className="primary-button"  onClick={() => navigate("/signup")}>
              SIGNUP
            </button>
          </div>
        </div>
{/* Hero image */}
        <div className="hero-image-wrapper">
          <img
            src="/images/image.png"
            alt="Magellan career journey"
            className='small-hero-image'
          />
        </div>
      </section>
{/* ================= MAIN VISUAL ================= */}
      <section className="main-visual">

        <img
          src="/images/image2.png"
          alt="Magellan exploration journey"
        />
      </section> 
{/* ================= WHY MAGELLAN ================= */}
      <section className="why-section" id="about">
        <h2>Why Magellan?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon"> 
              <img src="/images/1.png" alt="Why?" />             </div>
              <div className="features">
                <div className="feature-heading heading-1">Explore Career Paths</div>
                <div className="feature-explained explained-1 ">
                    <span className="white-text">Discover the best career options based on your</span>{" "}
                    <span className="gold-text">interests, strengths and goals</span>
                   </div>
              </div>

          </div>
          <div className="feature">
            <div className="feature-icon"> 
              <img src="/images/2.png" alt="Why?" />             </div>
              <div className="features">
                <div className="feature-heading heading-2">Find the Right Courses</div>
                <div className="feature-explained explained-2 ">

                  <span className="white-text">Get</span>{" "}
                  <span className="gold-text">personalized course</span>{" "}
                  <span className="white-text">recommendations 
from top universities and platforms</span>

                </div>
              </div>

          </div>

          

          {/* <div className="feature">
            <div className="feature-icon">
              <img src="/images/3.png" alt="Why?" />             </div>
              <div className="features">
                <div className="feature-heading heading-3">Scholarships Made Easy</div>
              <div className="feature-explained explained-3">
                <span className="white-text">Find and compare scholarships that match your profile and unlock</span>{" "}
                  <span className="gold-text">opportunities</span>
              </div>
              </div>

          </div>

          <div className="feature">
            <div className="feature-icon">
              <img src="/images/4.png" alt="Why?" />             </div>
              <div className="features">
                <div className="feature-heading heading-4">Internships and Jobs</div>
              <div className="feature-explained explained-4">
                <span className="white-text">Explore internships and job</span>{" "}
                  <span className="gold-text">opportunities</span>{" "}
                  <span className="white-text">to 
build experience and grow your career</span>
              </div>
              </div>

          </div> */}

          <div className="feature">
            <div className="feature-icon">
              <img src="/images/5.png" alt="Why?" />            
            </div>
            <div className="features">
                <div className="feature-heading heading-5">AI Powered Guidance</div>
              <div className="feature-explained explained-5">
                <span className="white-text">Get smart</span>{" "}
                  <span className="gold-text">insights and guidance </span>{" "}
                  <span className="white-text">tailored just 
for you</span>
              </div>
              </div>

          </div>

          

        </div>

      </section>

      {/* ================= ROADMAP ================= */}
      <section className="roadmap-section">

        <div className="roadmap-heading">

          <h2>Roadmap</h2>

          {/* <div className="roadmap-tabs">

            <button className="active-tab">
              UG/PG
            </button>

            <button>
              Career
            </button>

          </div> */}

        </div>


        <div className="roadmap-container">

          <RoadmapCard
  icon={User}
  title="Profile Genesis"
  text="Understand your interests, strengths and goals."
/>

<RoadmapCard
  icon={Compass}
  title="Discovery Phase"
  text="Explore suitable courses, colleges and opportunities."
/>

<RoadmapCard
  icon={FileText}
  title="Application Phase"
  text="Plan your applications, exams and admissions."
/>

{/* <RoadmapCard
  icon={PlaneTakeoff}
  title="Visa and Beyond"
  text="Prepare for your next step and future opportunities."
/> */}

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer" id="contact">

        <div className="footer-brand">

          <div className="footer-logo">
            <img
              src="/images/logo.jpeg"
              alt="MAGELLAN Logo"
            />
            
            </div>
          {/* <span>MAGELLAN</span> */}

        </div>
        <div className="contactus">
          <div className='contact'>Contact Us</div>
          <div className="mail">
            <a href="abc123@gmail.com">Mail us</a>
          </div>
          <div className="call">
            <a href="tel:+91000000000">Call Support (91-000-000-0000)</a>
          </div>
        </div>

      </footer>

    </div>
  );
}

/* ================= ROADMAP CARD ================= */
function RoadmapCard({ icon: Icon, title, text }) {
  return (
    <div className="roadmap-card">

      <div className="roadmap-icon">
        <Icon size={80} strokeWidth={1.5} />
      </div>

      <h3>{title}</h3>

      <p>{text}</p>


    </div>
  )
}

export default Landingpage
