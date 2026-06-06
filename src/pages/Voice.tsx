import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/cjp/SEO";
import IssueCard from "@/components/cjp/IssueCard";
import { ISSUES, CATEGORIES, Category } from "@/data/issues";

type Sort = "Top" | "Hot" | "New";

const Voice = () => {
  const [cat, setCat] = useState<Category | "All">("All");
  const [sort, setSort] = useState<Sort>("Top");

  const filtered = useMemo(() => {
    let xs = cat === "All" ? ISSUES : ISSUES.filter((i) => i.category === cat);
    if (sort === "Top") xs = [...xs].sort((a, b) => b.up - a.up);
    if (sort === "Hot") xs = [...xs].sort((a, b) => b.severity - a.severity);
    if (sort === "New") xs = [...xs].sort((a, b) => b.date.localeCompare(a.date));
    return xs;
  }, [cat, sort]);

  const hot = [...ISSUES].sort((a, b) => b.severity * 10 + b.up / 100 - (a.severity * 10 + a.up / 100)).slice(0, 5);
  const top = [...ISSUES].sort((a, b) => b.up - a.up).slice(0, 5);
  const fresh = [...ISSUES].slice(-5).reverse();

  return (
    <>
      <SEO title="Voice of the Swarm — Real Problems. Real India." description="A live feed of citizen-raised issues across India — water, power, judiciary, employment, media, women’s safety. Filed by members, ranked by the swarm." path="/voice" />
      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="font-condensed text-[10px] text-ink/55 mb-2">VOICE OF THE SWARM — REAL PROBLEMS. REAL INDIA.</p>
            <h1 className="font-display text-5xl sm:text-7xl leading-[0.9]">All <span className="font-italic-serif">Issues.</span></h1>
          </div>
          <Link to="/voice/raise" className="font-condensed text-sm px-5 py-3 bg-[hsl(20_75%_45%)] text-paper border border-ink hover:bg-ink transition-colors w-fit">+ RAISE AN ISSUE</Link>
        </div>
      </div>

      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-wrap gap-2">
          {(["All", ...CATEGORIES] as const).map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`font-condensed text-[10px] px-3 py-1.5 border border-ink ${cat === c ? "bg-gold text-ink" : "bg-paper hover:bg-ink hover:text-paper"} transition-colors`}>{c.toUpperCase()}</button>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-6 flex gap-2">
          {(["Top","Hot","New"] as Sort[]).map((s) => (
            <button key={s} onClick={() => setSort(s)} className={`font-condensed text-[11px] px-4 py-2 border border-ink ${sort === s ? "bg-ink text-paper" : "bg-paper hover:bg-ink hover:text-paper"} transition-colors`}>{s.toUpperCase()}</button>
          ))}
        </div>
      </div>

      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-6">
          <aside className="border border-ink bg-paper h-fit lg:sticky lg:top-32">
            <div className="bg-ink text-paper px-4 py-2 flex items-center justify-between"><span className="font-condensed text-[11px]">🔥 HOT</span><span className="font-condensed text-[10px] text-gold">HEATING UP</span></div>
            <ol className="divide-y divide-ink/15">
              {hot.map((i, idx) => (
                <li key={i.id} className="p-4 flex gap-3">
                  <span className="font-display text-lg text-[hsl(20_75%_45%)] leading-none">{idx+1}</span>
                  <div>
                    <p className="font-display text-sm leading-tight">{i.title}</p>
                    <p className="font-condensed text-[9px] text-ink/55 mt-1">{i.category.toUpperCase()} · ▲ {i.up}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>

          <div className="space-y-6">
            {filtered.map((i) => <IssueCard key={i.id} issue={i} />)}
            <div className="flex items-center justify-center gap-2 pt-6">
              {["‹","1","2","…","8","›"].map((p, i) => (
                <span key={i} className={`font-condensed text-xs px-3 py-2 border border-ink ${p === "1" ? "bg-ink text-paper" : "bg-paper"}`}>{p}</span>
              ))}
            </div>
            <p className="text-center font-condensed text-[10px] text-ink/50">PAGE 1 OF 8</p>
          </div>

          <aside className="space-y-6 h-fit lg:sticky lg:top-32">
            <div className="border border-ink bg-paper">
              <div className="bg-ink text-paper px-4 py-2 flex items-center justify-between"><span className="font-condensed text-[11px]">↑ TOP</span><span className="font-condensed text-[10px] text-gold">MOST BACKED</span></div>
              <ol className="divide-y divide-ink/15">
                {top.map((i, idx) => (
                  <li key={i.id} className="p-4 flex gap-3">
                    <span className="font-display text-lg text-gold leading-none">{idx+1}</span>
                    <div>
                      <p className="font-display text-sm leading-tight">{i.title}</p>
                      <p className="font-condensed text-[9px] text-ink/55 mt-1">{i.category.toUpperCase()} · ▲ {i.up}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border border-ink bg-paper">
              <div className="bg-ink text-paper px-4 py-2 flex items-center justify-between"><span className="font-condensed text-[11px]">✦ NEW</span><span className="font-condensed text-[10px] text-gold">JUST RAISED</span></div>
              <ol className="divide-y divide-ink/15">
                {fresh.map((i) => (
                  <li key={i.id} className="p-4">
                    <p className="font-display text-sm leading-tight">{i.title}</p>
                    <p className="font-condensed text-[9px] text-ink/55 mt-1">{i.category.toUpperCase()} · ▲ {i.up}</p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Voice;
