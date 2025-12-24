import "./ContactsSection.css";

type IconName = "github" | "linkedin" | "mail" | "download";

type Props = {
  title: string;
  subtitle: string;
  href: string;
  icon: IconName;
};

function Icon({ name }: { name: IconName }) {
  // Minimal inline SVGs (no extra libraries)
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "contact-icon",
  };

  if (name === "github") {
    return (
      <svg {...common}>
        <path
          d="M12 2C6.477 2 2 6.596 2 12.264c0 4.535 2.865 8.384 6.839 9.742.5.096.682-.222.682-.494 0-.244-.009-.89-.014-1.747-2.782.62-3.369-1.376-3.369-1.376-.454-1.185-1.11-1.501-1.11-1.501-.908-.64.069-.627.069-.627 1.003.073 1.531 1.058 1.531 1.058.892 1.566 2.341 1.114 2.912.852.091-.669.349-1.114.635-1.37-2.222-.26-4.556-1.142-4.556-5.085 0-1.124.39-2.044 1.029-2.764-.103-.26-.446-1.306.098-2.724 0 0 .84-.276 2.75 1.056A9.3 9.3 0 0 1 12 6.844a9.3 9.3 0 0 1 2.504.348c1.909-1.332 2.748-1.056 2.748-1.056.545 1.418.202 2.464.1 2.724.64.72 1.027 1.64 1.027 2.764 0 3.953-2.337 4.822-4.566 5.077.359.317.679.943.679 1.9 0 1.372-.013 2.477-.013 2.815 0 .274.18.595.688.494C19.137 20.645 22 16.796 22 12.264 22 6.596 17.523 2 12 2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path
          d="M6.5 9.5V19.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M6.5 6.5h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10.5 19.5v-6.2c0-1.6.9-2.7 2.4-2.7 1.4 0 2.1.9 2.1 2.7v6.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M10.5 13.2c0-1.7 1-2.6 2.4-2.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 4h16v16H4V4Z"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.45"
        />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <path
          d="M4 7.5h16v9H4v-9Z"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <path
          d="M4.5 8l7.5 5 7.5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // download
  return (
    <svg {...common}>
      <path
        d="M12 3v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.5 10.5 12 13.8l3.5-3.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18.5h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

export default function ContactCard({ title, subtitle, href, icon }: Props) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className="contact-card"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <div className="contact-glow" />

      <div className="contact-top">
        <div className="contact-iconWrap">
          <Icon name={icon} />
        </div>

        <div className="contact-text">
          <div className="contact-titleRow">
            <h3 className="contact-title">{title}</h3>
            <span className="contact-arrow" aria-hidden="true">
              
            </span>
          </div>
          <p className="contact-sub">{subtitle}</p>
        </div>
      </div>
    </a>
  );
}
