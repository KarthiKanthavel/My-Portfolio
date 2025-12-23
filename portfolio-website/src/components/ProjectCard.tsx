import { useMemo } from "react";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

type Props = {
  project: Project;
  onImageClick?: (src: string) => void;
};

export default function ProjectCard({ project, onImageClick }: Props) {
  const statusClass = useMemo(() => {
    if (!project.status) return "";
    return `pc-status pc-${project.status.toLowerCase().replace(" ", "-")}`;
  }, [project.status]);

  return (
    <article className="proj-card">
      <div className="proj-glow" />

      <header className="proj-head">
        <div className="proj-titleRow">
          <h3 className="proj-title">{project.title}</h3>
          {project.status ? <span className={statusClass}>{project.status}</span> : null}
        </div>
        <p className="proj-tagline">{project.tagline}</p>
      </header>

      <p className="proj-desc">{project.description}</p>

      <ul className="proj-highlights">
        {project.highlights.slice(0, 3).map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div className="proj-stack">
        {project.stack.map((t) => (
          <span key={t} className="proj-chip">
            {t}
          </span>
        ))}
      </div>

      <div className="proj-media">
        {project.images?.slice(0, 3).map((src, i) => {
          const clickable = typeof onImageClick === "function";
          return (
            <button
              key={i}
              type="button"
              className={`proj-shot ${clickable ? "proj-shotBtn" : ""}`}
              onClick={() => onImageClick?.(src)}
              disabled={!clickable}
              aria-label={clickable ? `Open ${project.title} screenshot ${i + 1}` : undefined}
              title={clickable ? "Click to enlarge" : undefined}
            >
              <img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
            </button>
          );
        })}
      </div>

      <footer className="proj-actions">
        {project.liveUrl ? (
          <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Site
          </a>
        ) : (
          <span className="btn btn-disabled" title="Local project / no public demo">
            No Live Site
          </span>
        )}

        {project.UIDemoUrl ? (
          <a className="btn btn-primary" href={project.UIDemoUrl} target="_blank" rel="noreferrer">
            UI Demo
          </a>
        ) : null}

        {project.repoUrl ? (
          <a className="btn btn-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : null}
      </footer>
    </article>
  );
}
