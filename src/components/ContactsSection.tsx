import ContactCard from "./ContactCard";
import "./ContactsSection.css";

export default function ContactsSection() {
  return (
    <section id="contact" className="section contact">
      <div className="section-head">
        <h2 className="section-title">Contacts</h2>
      </div>
      <p className="section-tub">Let’s build something meaningful.</p>

      <div className="contact-grid">
        <ContactCard
          title="GitHub"
          subtitle="Source code & real projects"
          href="https://github.com/KarthiKanthavel"
          icon="github"
        />

        <ContactCard
          title="LinkedIn"
          subtitle="Professional profile"
          href="https://www.linkedin.com/in/karthi-kanthavel-364992220/"
          icon="linkedin"
        />

        <ContactCard
          title="Email"
          subtitle="Best way to reach me directly"
          href="mailto:karthi.kanthavel12@gmail.com"
          icon="mail"
        />

        <ContactCard
          title="Resume"
          subtitle="One-page PDF"
          href="src/projects/Karthi-Resume.pdf"
          icon="download"
        />
      </div>
    </section>
  );
}
