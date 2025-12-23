import LightRays from "../components/LightRays";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-root">
      {/* Background */}
      <div className="home-bg">
        <LightRays
            raysOrigin = "top-center"
            raysColor="#f700ff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0.0}
            className="custom-rays"
        />
      </div>

      {/* Navbar */}
      <header className="site-header">
        <div className="navbar-inner">
          <div className="logo">Karthi Kanthavel</div>

          <nav className="nav-links">
            <a href="#home">Who Am I?</a>
            <a href="#services">Projects</a>
            <a href="#about">Contact</a>
          </nav>
        </div>
      </header>

      {/* HOME Section (Hero) */}
      <section id="home" className="hero section">
        <h1>
          Welcome To My <br /> Coding Adventure
        </h1>
       

        <div className="hero-buttons">
          <button className="primary">Get Started</button>
          <button className="secondary">Learn More</button>
        </div>
      </section>

      {/* SERVICES Section */}
      <section id="services" className="section services">
        <h2>Services</h2>
        <p>
          Basement finishing, waterproofing, framing, flooring, lighting, and full
          remodels.
        </p>
      </section>

      {/* ABOUT Section */}
      <section id="about" className="section about">
        <h2>About</h2>
        <p>
          Local renovation team focused on clean workmanship, clear timelines, and
          quality results.
        </p>
      </section>
    </div>
  );
}
