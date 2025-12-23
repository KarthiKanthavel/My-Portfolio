import LightRays from "../components/LightRays";
import ProfileCard from "../components/ProfileCard";
import TextType from "../components/TextType";
import DecryptedText from "../components/DecryptedText";
import "./Home.css";

export default function Home() {
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
        <div className="navbar-inner">
          <div className="logo">Karthi Kanthavel</div>

          <nav className="nav-links">
            <a href="#about">Who Am I?</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contacts</a>
          </nav>
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
              "Computer Science @ Carleton",
              "Full-stack developer",
              "Clean UI • Fast performance",
              "Building projects that ship",
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


            <a>Psssttt! Maybe Hovering will fix it?... </a>
            <p className="about-p">
              <DecryptedText
                text="I’m a Computer Science student focused on building modern, high-performance web apps. I work across the stack — clean, responsive UI on the front end, and reliable APIs + databases on the back end. I care about speed, detail, and shipping things that feel premium."
                className="about-desc"
                speed={25}
              />
            </p>


            <h3 className="about-title">What Do I Do?</h3>


            

            <ul className="about-p">
              <li>Full-stack web apps (React + APIs / databases)</li>
              <li>Responsive UI + smooth interactions</li>
              <li>Performance + clean architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        {/* add your project cards/grid here */}
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="section-title">Contacts</h2>
        {/* add contact links/form here */}
      </section>
    </div>
  );
}
