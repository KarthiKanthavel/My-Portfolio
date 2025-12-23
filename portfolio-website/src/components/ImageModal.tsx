import { useEffect } from "react";
import "./ImageModal.css";

type Props = {
  open: boolean;
  src: string;
  alt?: string;
  title?: string;
  onClose: () => void;
};

export default function ImageModal({ open, src, alt, title, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden"; // lock scroll

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="im-backdrop" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="im-card" onMouseDown={(e) => e.stopPropagation()}>
        {title ? <div className="im-title">{title}</div> : null}
        <img className="im-img" src={src} alt={alt ?? title ?? "Project screenshot"} />
        <button className="im-close" type="button" onClick={onClose} aria-label="Close">
          ✗
        </button>
      </div>
    </div>
  );
}
