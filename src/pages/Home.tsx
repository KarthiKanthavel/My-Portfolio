import LightRays from "../components/LightRays";
import ProfileCard from "../components/ProfileCard";
import TextType from "../components/TextType";
import ProjectsSection from "../components/ProjectsSection";
import ContactsSection from "../components/ContactsSection";
import "./Home.css";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-root">
      {/* Background */}
      <div className="home-bg">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f700ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

    

    {/* Navbar */}
    <header className="site-header">
      {/* DESKTOP NAV (unchanged look) */}
      <div className="navbar-inner desktop-nav">
        <div className="logo">Karthi Kanthavel</div>

        <nav className="nav-links">
          <a href="#about">Who Am I?</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contacts</a>
        </nav>
      </div>

      {/* MOBILE NAV (pill + dropdown) */}
      <div className="mobile-nav">
        <div className="mobile-pill">
          <div className="mobile-logo">Karthi Kanthavel</div>

          <button
            className="mobile-menu-btn"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="mobile-dropdown">
            <a onClick={() => setOpen(false)} href="#about">Who Am I?</a>
            <a onClick={() => setOpen(false)} href="#projects">Projects</a>
            <a onClick={() => setOpen(false)} href="#contact">Contacts</a>
          </div>
        )}
      </div>
    </header>


      {/* HERO */}
      <section className="hero section">
        <h1>
          Welcome To My <br /> Coding Adventure
        </h1>

        <div className="hero-typed">
          <TextType
            texts={[
              "Computer Science AI & ML @ Carleton",
              "Full‑Stack Developer with a purpose.",
              "Designing with clarity.",
              "Building with impact.",
              "Focused on work that makes a difference.",
            ]}
            typingSpeed={55}
            pauseDuration={1400}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="about-grid">
          <div className="about-left">
            <ProfileCard
              name="Karthi Kanthavel"
              title="Computer Science • Full-stack"
              subtitle="I build clean web apps and modern UI."
              imageUrl="/me.jpg"
            />
          </div>

          <div className="about-right">
            <h2 className="about-title">Who Am I?</h2>

            <p className="about-p">
              I am a Computer Science student who enjoys building things, learning
              as I go, and challenging myself to improve over time. I like
              working on meaningful projects, staying disciplined, and exploring
              interests both inside and outside of tech.
            </p>

            {/* keep this as same class so it matches sizes/alignment */}
            <h2 className="about-title about-title--small">What Do I Do?</h2>

            {/* use a real list class (not about-p) so spacing looks clean */}
            <ul className="about-p">
              <li>Build websites and MVPs for clients</li>
              <li>Black Belt Taekwondo (10+ years)</li>
              <li>CS First Year Representative @ Carleton</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-projects">
        <ProjectsSection />
      </section>

      

        <ContactsSection />
        {/* add contact links/form here */}
      
    </div>
  );
}
