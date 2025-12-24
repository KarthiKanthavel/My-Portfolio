import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import ImageModal from "./ImageModal";
import "./ProjectsSection.css";

type ModalState = {
  open: boolean;
  src: string;
  title?: string;
};

export default function ProjectsSection() {
  const [modal, setModal] = useState<ModalState>({ open: false, src: "" });

  const openImage = (src: string, title?: string) => {
    setModal({ open: true, src, title });
  };

  const closeImage = () => {
    setModal({ open: false, src: "" });
  };

  return (
    <>
      <section id="projects" className="section-projects">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
        </div>
        <p className="section-sub">
            A mix of client work, full-stack apps, and tools I’ve built for real workflows.
          </p>

        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onImageClick={(src) => openImage(src, p.title)}
            />
          ))}
        </div>
      </section>

      <ImageModal
        open={modal.open}
        src={modal.src}
        title={modal.title}
        onClose={closeImage}
      />
    </>
  );
}
