import { useEffect, useRef, useState } from "react";
import roach from "@/assets/cockroach.png";

// A cockroach that scurries after the cursor with a slight chase lag and rotation.
// Hidden on touch devices and when the user prefers reduced motion.
const CockroachCursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const angle = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      pos.current.x += dx * 0.12;
      pos.current.y += dy * 0.12;
      const dist = Math.hypot(dx, dy);
      if (dist > 1.5) {
        const a = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        angle.current = a;
      }
      const wiggle = Math.sin(performance.now() / 70) * 4;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - 18}px, ${pos.current.y - 18}px, 0) rotate(${angle.current + wiggle}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-9 h-9 will-change-transform"
      style={{ filter: "drop-shadow(0 2px 0 rgba(0,0,0,0.35))" }}
    >
      <img src={roach} alt="" width={36} height={36} className="w-full h-full select-none" draggable={false} />
    </div>
  );
};

export default CockroachCursor;
