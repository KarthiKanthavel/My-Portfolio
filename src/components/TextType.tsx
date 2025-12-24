import { useEffect, useRef } from "react";
import "./TextType.css";

interface TextTypeProps {
  texts: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

export default function TextType({
  texts,
  typingSpeed = 60,
  pauseDuration = 1400,
}: TextTypeProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    let index = 0;
    let mounted = true;

    const typeLoop = async () => {
      while (mounted) {
        const current = texts[index];
        textRef.current!.textContent = "";

        for (let i = 0; i <= current.length; i++) {
          if (!mounted) return;
          textRef.current!.textContent = current.slice(0, i);
          await new Promise((r) => setTimeout(r, typingSpeed));
        }

        await new Promise((r) => setTimeout(r, pauseDuration));
        index = (index + 1) % texts.length;
      }
    };

    typeLoop();

    return () => {
      mounted = false;
    };
  }, [texts, typingSpeed, pauseDuration]);

  return <span ref={textRef} className="text-type" />;
}
