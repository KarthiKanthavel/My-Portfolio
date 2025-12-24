import { useRef } from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  name?: string;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

export default function ProfileCard({
  name = "Karthi Kanthavel",
  title = "CS Student • Developer",
  subtitle = "I build clean web apps and UI.",
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 18;
    const rotateX = (0.5 - py) * 18;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
    card.style.setProperty("--mx", `${px * 100}%`);
    card.style.setProperty("--my", `${py * 100}%`);
    card.style.setProperty("--z", "28px");
  };

  const onLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "35%");
    card.style.setProperty("--z", "0px");
  };

  return (
    <div className="pc-wrap">
      <article
        ref={cardRef}
        className="pc-card"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="pc-bg" />
        <div className="pc-glare" />

        <div className="pc-content">
          <div className="pc-text">
            <h3 className="pc-name">{name}</h3>
            <p className="pc-title">{title}</p>
            <p className="pc-sub">{subtitle}</p>
          </div>

          <div className="pc-photo">
            <img src={"./images/me.jpg"} alt={name} />
          </div>
        </div>
      </article>
    </div>
  );
}
