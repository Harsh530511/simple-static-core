import { STATES } from "@/data/states";

const COLS = 12;
const ROWS = 13;
const CELL = 38;

const colorFor = (n: number) => {
  if (n >= 300) return "hsl(9 65% 38%)";
  if (n >= 200) return "hsl(9 65% 48%)";
  if (n >= 100) return "hsl(15 70% 55%)";
  if (n >= 50)  return "hsl(35 75% 55%)";
  if (n >= 20)  return "hsl(42 78% 65%)";
  return "hsl(40 22% 78%)";
};

const IndiaHeatmap = () => {
  const w = COLS * CELL;
  const h = ROWS * CELL;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" role="img" aria-label="Member density across India">
      <rect width={w} height={h} fill="hsl(42 38% 92%)" />
      {Array.from({ length: ROWS }).map((_, r) =>
        Array.from({ length: COLS }).map((_, c) => (
          <rect key={`${r}-${c}`} x={c*CELL} y={r*CELL} width={CELL} height={CELL} fill="hsl(40 22% 86%)" opacity={0.3} />
        ))
      )}
      {STATES.map((s) => {
        const sw = (s.w ?? 1) * CELL;
        const sh = (s.h ?? 1) * CELL;
        return (
          <g key={s.code}>
            <rect x={s.col*CELL} y={s.row*CELL} width={sw} height={sh} fill={colorFor(s.members)} stroke="hsl(30 14% 8%)" strokeWidth={1} />
            <text x={s.col*CELL + sw/2} y={s.row*CELL + sh/2 + 4} textAnchor="middle" fontSize="11" fontFamily="Bowlby One, sans-serif" fill="hsl(42 38% 95%)">{s.members}</text>
            <text x={s.col*CELL + 3} y={s.row*CELL + 11} fontSize="8" fontFamily="Oswald, sans-serif" fill="hsl(30 14% 8%)">{s.code}</text>
          </g>
        );
      })}
    </svg>
  );
};

export default IndiaHeatmap;

export const HeatmapLegend = () => {
  const buckets = [
    { l: "0", c: "hsl(40 22% 78%)" },
    { l: "1–19", c: "hsl(42 78% 65%)" },
    { l: "20–49", c: "hsl(35 75% 55%)" },
    { l: "50–99", c: "hsl(15 70% 55%)" },
    { l: "100–199", c: "hsl(9 65% 48%)" },
    { l: "200+", c: "hsl(9 65% 38%)" },
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
