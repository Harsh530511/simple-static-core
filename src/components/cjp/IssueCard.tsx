import { Issue } from "@/data/issues";
import { ThumbsUp, ThumbsDown, Share2, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const sevColor = (n: number) =>
  n >= 9 ? { bg: "bg-destructive", text: "text-destructive-foreground", label: "CRITICAL" }
  : n >= 7 ? { bg: "bg-[hsl(20_75%_45%)]", text: "text-paper", label: "SERIOUS" }
  : n >= 4 ? { bg: "bg-gold", text: "text-ink", label: "MODERATE" }
  : { bg: "bg-secondary", text: "text-ink", label: "LOW" };

const IssueCard = ({ issue }: { issue: Issue }) => {
  const s = sevColor(issue.severity);
  const [u, setU] = useState(issue.up);
  const [d, setD] = useState(issue.down);
  return (
    <article className="border border-ink bg-paper p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-condensed text-[10px] border border-ink px-2 py-1">{issue.category.toUpperCase()}</span>
        <span className={`font-condensed text-[10px] px-2 py-1 ${s.bg} ${s.text}`}>{issue.severity}/10 · {s.label}</span>
      </div>
      <h3 className="font-display text-xl sm:text-2xl leading-tight mb-3">{issue.title}</h3>
      <p className="text-sm text-ink/75 leading-relaxed mb-5">{issue.body}</p>
      <div className="flex flex-wrap items-center gap-3 text-[11px] font-condensed text-ink/60 mb-4">
        <span className="inline-flex items-center gap-2">
          <span className="w-6 h-6 rounded-full border border-ink bg-secondary flex items-center justify-center text-[9px]">{issue.authorInitials}</span>
          {issue.author}
        </span>
        <span className="inline-flex items-center gap-1 text-emerald-700"><CheckCircle2 size={11}/> {issue.reqId}</span>
        <span>· {issue.date}</span>
        <span className="ml-auto inline-flex items-center gap-1"><MapPin size={11}/> {issue.city}, {issue.state}</span>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => setU(u + 1)} className="inline-flex items-center gap-1.5 border border-ink px-3 py-1.5 font-condensed text-xs hover:bg-ink hover:text-paper transition-colors"><ThumbsUp size={12}/> {u}</button>
        <button onClick={() => setD(d + 1)} className="inline-flex items-center gap-1.5 border border-ink px-3 py-1.5 font-condensed text-xs hover:bg-ink hover:text-paper transition-colors"><ThumbsDown size={12}/> {d}</button>
        <button className="inline-flex items-center gap-1.5 border border-ink px-3 py-1.5 font-condensed text-xs hover:bg-ink hover:text-paper transition-colors"><Share2 size={12}/> SHARE</button>
      </div>
    </article>
  );
};

export default IssueCard;
