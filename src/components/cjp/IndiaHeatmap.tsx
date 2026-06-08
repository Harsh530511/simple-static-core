import { useState } from "react";
import { STATES, type StateData } from "@/data/states";

const COLS = 12;
const ROWS = 13;
const CELL = 42;

const colorFor = (n: number) => {
  if (n >= 300) return "hsl(9 70% 32%)";
  if (n >= 200) return "hsl(9 68% 44%)";
  if (n >= 100) return "hsl(15 72% 54%)";
  if (n >= 50)  return "hsl(35 78% 56%)";
  if (n >= 20)  return "hsl(42 82% 68%)";
  return "hsl(40 22% 80%)";
};

interface Props {
  onSelect?: (s: StateData) => void;
}

const IndiaHeatmap = ({ onSelect }: Props) => {
  const [hover, setHover] = useState<StateData | null>(null);
  const w = COLS * CELL;
  const h = ROWS * CELL;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto block" role="img" aria-label="Member density across India">
        <defs>
          <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="hsl(30 14% 8%)" strokeWidth="0.7" opacity="0.18" />
          </pattern>
        </defs>
        <rect width={w} height={h} fill="hsl(42 38% 94%)" />
        <rect width={w} height={h} fill="url(#hatch)" />
        {STATES.map((s) => {
          const sw = (s.w ?? 1) * CELL;
          const sh = (s.h ?? 1) * CELL;
          const isHover = hover?.code === s.code;
          return (
            <g
              key={s.code}
              onMouseEnter={() => setHover(s)}
              onMouseLeave={() => setHover(null)}
              onClick={() => onSelect?.(s)}
              style={{ cursor: "pointer" }}
            >
              <rect
                x={s.col * CELL}
                y={s.row * CELL}
                width={sw}
                height={sh}
                fill={colorFor(s.members)}
                stroke="hsl(30 14% 8%)"
                strokeWidth={isHover ? 2.5 : 1}
                style={{ transition: "stroke-width 120ms" }}
              />
              <text x={s.col * CELL + 4} y={s.row * CELL + 12} fontSize="9" fontFamily="Oswald, sans-serif" fill="hsl(30 14% 8%)" pointerEvents="none">{s.code}</text>
              <text x={s.col * CELL + sw / 2} y={s.row * CELL + sh / 2 + 5} textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="Bowlby One, sans-serif" fill="hsl(42 38% 96%)" pointerEvents="none">{s.members}</text>
            </g>
          );
        })}
      </svg>
      {hover && (
        <div className="absolute top-3 right-3 border border-ink bg-paper px-3 py-2 pointer-events-none shadow-[3px_3px_0_hsl(30_14%_8%)]">
          <p className="font-condensed text-[9px] text-ink/55">STATE · {hover.code}</p>
          <p className="font-display text-lg leading-none mt-0.5">{hover.name}</p>
          <p className="font-condensed text-[11px] text-ink/75 mt-1">{hover.members} members</p>
        </div>
      )}
    </div>
  );
};

export default IndiaHeatmap;

export const HeatmapLegend = () => {
  const buckets = [
    { l: "0", c: "hsl(40 22% 80%)" },
    { l: "1–19", c: "hsl(42 82% 68%)" },
    { l: "20–49", c: "hsl(35 78% 56%)" },
    { l: "50–99", c: "hsl(15 72% 54%)" },
    { l: "100–199", c: "hsl(9 68% 44%)" },
    { l: "200+", c: "hsl(9 70% 32%)" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-3 font-condensed text-[10px]">
      <span className="text-ink/60">DENSITY</span>
      {buckets.map((b) => (
        <span key={b.l} className="inline-flex items-center gap-1.5">
          <span className="w-4 h-4 border border-ink" style={{ background: b.c }} />
          {b.l}
        </span>
      ))}
    </div>
  );
};
