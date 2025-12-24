import { useEffect, useMemo, useRef, useState } from "react";

interface DecryptedTextProps {
  text: string;
  className?: string;

  // speed controls
  speed?: number;          // ms between ticks
  revealStep?: number;     // how many chars reveal per tick (1 = slowest)
  characters?: string;     // random charset for encryption
}

export default function DecryptedText({
  text,
  className = "",
  speed = 35,
  revealStep = 1,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?/|",
}: DecryptedTextProps) {
  const [display, setDisplay] = useState<string>("");
  const [, setRevealedCount] = useState(0);
  const [hovering, setHovering] = useState(false);

  const timerRef = useRef<number | null>(null);

  const chars = useMemo(() => characters.split(""), [characters]);

  const encrypt = (reveal: number) => {
    // reveal = how many leading chars are real
    return text
      .split("")
      .map((c, i) => {
        if (c === " ") return " ";
        if (i < reveal) return c;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");
  };

  // Start encrypted on mount
  useEffect(() => {
    setRevealedCount(0);
    setDisplay(encrypt(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  // Handle hover decrypt/encrypt
  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      setRevealedCount((prev) => {
        const next = hovering
          ? Math.min(text.length, prev + revealStep)
          : Math.max(0, prev - revealStep); // optional: re-encrypt when leaving

        setDisplay(encrypt(next));
        return next;
      });
    }, speed);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovering, speed, revealStep, text, chars]);

  return (
    <span
      className={className}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        display: "inline-block",     // IMPORTANT: makes hover hit the whole block
        cursor: "default",
      }}
    >
      {display}
    </span>
  );
}
