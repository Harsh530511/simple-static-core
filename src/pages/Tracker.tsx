import { Link } from "react-router-dom";
import SEO from "@/components/cjp/SEO";
import IndiaHeatmap, { HeatmapLegend } from "@/components/cjp/IndiaHeatmap";
import { TOP_CITIES, STATES } from "@/data/states";
import { MEMBERS } from "@/data/members";

const Tracker = () => {
  const total = 21553;
  const onMap = STATES.reduce((s, x) => s + x.members, 0);
  const topState = [...STATES].sort((a,b)=>b.members-a.members)[0];
  const latest = MEMBERS[MEMBERS.length - 1];

  return (
    <>
      <SEO title="The Cockroach Map — Swarm Tracker" description="Where the swarm has spread across India, by state and city. Updated as new applications come in. No averages, no projections — the numbers are members." path="/cockroach-tracker" />
      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <p className="font-condensed text-[10px] text-ink/55 mb-3">SWARM TRACKER · LIVE</p>
            <h1 className="font-display text-5xl sm:text-7xl leading-[0.9]">The Cockroach <br/><span className="font-italic-serif">Map.</span></h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-ink/75 leading-relaxed">Where the swarm has spread across India, by state and city. The moment a new application is approved, this map shifts. No averages, no surveys, no projections — the numbers are members.</p>
          </div>
          <div className="border border-ink bg-paper p-6">
            <p className="font-condensed text-[10px] text-ink/55 mb-2">MOVE THE MAP</p>
            <h3 className="font-display text-3xl">Add your <span className="font-italic-serif">city.</span></h3>
            <p className="text-sm text-ink/70 mt-3">Every new application shifts the heatmap. If your state is empty, it doesn’t have to be.</p>
            <Link to="/join" className="mt-5 inline-block font-condensed text-sm px-5 py-3 bg-ink text-paper hover:bg-gold hover:text-ink transition-colors">FILE APPLICATION →</Link>
          </div>
        </div>
      </div>

      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink border border-ink">
          {[
            { l: "TOTAL MEMBERS", v: total.toLocaleString() },
            { l: "ON THE MAP", v: onMap.toLocaleString(), sub: `${STATES.length} / 31 states · 39% located` },
            { l: "TOP STATE", v: topState.name, sub: `${topState.members} members` },
            { l: "LATEST JOIN", v: latest.name, sub: `${latest.city.toUpperCase()}, ${latest.state} · 5m ago` },
          ].map((s, i) => (
            <div key={i} className="bg-paper p-6">
              <p className="font-condensed text-[10px] text-ink/55 mb-2">{s.l}</p>
              <p className="font-display text-2xl sm:text-3xl leading-tight">{s.v}</p>
              {s.sub && <p className="font-condensed text-[10px] text-ink/55 mt-2">{s.sub}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <div className="border border-ink bg-paper">
            <div className="flex items-center justify-between px-5 py-3 border-b border-ink">
              <span className="font-condensed text-[11px]">SWARM DENSITY · INDIA</span>
              <span className="font-condensed text-[10px] text-gold">● LIVE · UPDATES EVERY 60S</span>
            </div>
            <div className="p-4"><IndiaHeatmap /></div>
            <div className="border-t border-ink px-5 py-3"><HeatmapLegend /></div>
          </div>
          <div className="border border-ink bg-paper">
            <div className="flex items-center justify-between px-5 py-3 border-b border-ink">
              <span className="font-condensed text-[11px]">LATEST JOINS</span>
              <span className="font-condensed text-[10px] bg-ink text-paper px-2 py-0.5">● LIVE</span>
            </div>
            <ol className="divide-y divide-ink/15">
              {MEMBERS.slice().reverse().map((m) => {
                const initials = m.name.split(" ").map((p) => p[0]).slice(0,2).join("").toUpperCase();
                return (
                  <li key={m.id} className="px-5 py-3 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full border border-ink bg-secondary flex items-center justify-center font-condensed text-[10px]">{initials}</span>
                    <div className="flex-1 leading-tight">
                      <p className="font-display text-sm">{m.name}</p>
                      <p className="font-condensed text-[10px] text-ink/55">{m.city.toUpperCase()}, {m.state}</p>
                    </div>
                    <span className="font-condensed text-[10px] text-ink/45">{m.joined.slice(0,6)}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-display text-4xl sm:text-5xl">Top <span className="font-italic-serif">cities.</span></h2>
            <span className="font-condensed text-[10px] text-ink/55">12 RANKED</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border border-ink">
            {TOP_CITIES.map((c) => (
              <div key={c.rank} className="bg-paper p-6 flex items-end justify-between">
                <div>
                  <p className="font-condensed text-[10px] text-ink/55">#{c.rank} · {c.state.toUpperCase()}</p>
                  <p className="font-display text-2xl">{c.city}</p>
                </div>
                <p className="font-display text-3xl text-gold">{c.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracker;
