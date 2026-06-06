import { Poster } from "@/data/posters";

const Motif = ({ motif, accent }: { motif: Poster["motif"]; accent: Poster["accent"] }) => {
  const fg = accent === "red" ? "hsl(9 65% 45%)" : accent === "gold" ? "hsl(42 78% 52%)" : "hsl(30 14% 8%)";
  const bg = "hsl(40 28% 80%)";
  switch (motif) {
    case "stripes":
      return (
        <svg viewBox="0 0 100 130" className="w-full h-full" preserveAspectRatio="none">
          <rect width="100" height="130" fill={bg} />
          {[0,1,2,3,4,5,6].map(i => (
            <polygon key={i} points={`${-20+i*22},130 ${20+i*22},130 ${60+i*22},0 ${20+i*22},0`} fill={fg} opacity={0.85} />
          ))}
        </svg>
      );
    case "fist":
      return (
        <svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/><circle cx="50" cy="55" r="28" fill={fg}/><rect x="42" y="60" width="16" height="55" fill={fg}/></svg>
      );
    case "swarm":
      return (
        <svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/>{Array.from({length:30}).map((_,i)=>(<ellipse key={i} cx={10+((i*17)%90)} cy={10+((i*23)%115)} rx="4" ry="6" fill={fg} opacity={0.7}/>))}</svg>
      );
    case "five":
      return (
        <svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/><text x="50" y="95" textAnchor="middle" fontSize="100" fontWeight="900" fill={fg} fontFamily="Bowlby One, sans-serif">5</text></svg>
      );
    case "march":
      return (
        <svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/>{[20,40,60,80].map((y,i)=>(<g key={i}><circle cx="30" cy={y+10} r="6" fill={fg}/><rect x="22" y={y+18} width="16" height="14" fill={fg}/><circle cx="60" cy={y+10} r="6" fill={fg}/><rect x="52" y={y+18} width="16" height="14" fill={fg}/></g>))}</svg>
      );
    case "crowd":
      return (
        <svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/>{Array.from({length:24}).map((_,i)=>{const x=(i%6)*16+8;const y=Math.floor(i/6)*22+40;return(<g key={i}><circle cx={x} cy={y} r="4" fill={fg}/><rect x={x-5} y={y+5} width="10" height="14" fill={fg}/></g>)})}<rect x="20" y="20" width="3" height="18" fill={fg}/><rect x="23" y="18" width="14" height="10" fill={fg}/></svg>
      );
    case "ballot":
      return (<svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/><rect x="20" y="30" width="60" height="80" fill="none" stroke={fg} strokeWidth="4"/><polyline points="30,70 45,85 75,50" fill="none" stroke={fg} strokeWidth="8"/></svg>);
    case "emblem":
      return (<svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/><circle cx="50" cy="65" r="35" fill="none" stroke={fg} strokeWidth="3"/><ellipse cx="50" cy="65" rx="14" ry="22" fill={fg}/><line x1="36" y1="55" x2="20" y2="45" stroke={fg} strokeWidth="3"/><line x1="64" y1="55" x2="80" y2="45" stroke={fg} strokeWidth="3"/><line x1="36" y1="75" x2="20" y2="85" stroke={fg} strokeWidth="3"/><line x1="64" y1="75" x2="80" y2="85" stroke={fg} strokeWidth="3"/></svg>);
    case "shield":
      return (<svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/><path d="M50 15 L85 30 L85 75 Q85 105 50 118 Q15 105 15 75 L15 30 Z" fill={fg}/></svg>);
    case "torch":
      return (<svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/><path d="M50 15 Q35 35 50 55 Q65 35 50 15 Z" fill={fg}/><rect x="46" y="55" width="8" height="60" fill={fg}/></svg>);
    case "scroll":
      return (<svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/><rect x="20" y="20" width="60" height="90" fill={fg}/>{[35,50,65,80,95].map(y=>(<line key={y} x1="28" y1={y} x2="72" y2={y} stroke={bg} strokeWidth="3"/>))}</svg>);
    case "wheel":
      return (<svg viewBox="0 0 100 130" className="w-full h-full"><rect width="100" height="130" fill={bg}/><circle cx="50" cy="65" r="36" fill="none" stroke={fg} strokeWidth="4"/>{Array.from({length:12}).map((_,i)=>{const a=(i*30)*Math.PI/180;return(<line key={i} x1="50" y1="65" x2={50+Math.cos(a)*36} y2={65+Math.sin(a)*36} stroke={fg} strokeWidth="3"/>)})}</svg>);
  }
};

const PosterCard = ({ p }: { p: Poster }) => (
  <article className="bg-paper border border-ink flex flex-col">
    <div className="relative">
      <div className="absolute top-2 left-2 z-10 font-condensed text-[10px] px-2 py-1 bg-ink text-paper">{p.category.toUpperCase()}</div>
      <div className="aspect-[3/4] border-b border-ink overflow-hidden">
        <Motif motif={p.motif} accent={p.accent} />
      </div>
      <div className="absolute bottom-2 right-2 font-condensed text-[10px] bg-paper border border-ink px-2 py-0.5">NO. {p.no}</div>
    </div>
    <div className="p-5">
      <h3 className="font-display text-lg leading-tight mb-2">{p.title}</h3>
      <p className="text-xs text-ink/70 leading-relaxed">{p.caption}</p>
    </div>
  </article>
);

export default PosterCard;
