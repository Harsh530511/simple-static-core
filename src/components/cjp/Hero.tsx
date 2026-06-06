import { Link } from "react-router-dom";
import swarm from "@/assets/swarm.jpg";

const Hero = () => (
  <section className="relative ink-glow text-paper overflow-hidden border-b border-rule-on-ink">
    <img
      src={swarm}
      alt=""
      aria-hidden="true"
      width={1920}
      height={1088}
      className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity"
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
      <div>
        <p className="font-condensed text-xs text-gold mb-6 flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-gold rotate-45" />
          Live rally · Since 2026
        </p>
        <h1 className="font-display text-paper text-[14vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.9] uppercase tracking-tight">
          Voice of the<br />
          <span className="text-gold">Burnt-Out</span><br />
          Youth.
        </h1>
        <p className="mt-8 max-w-xl text-paper/75 text-base sm:text-lg leading-relaxed">
          A political movement for the people the system forgot to count.
          Five demands. Zero sponsors. One large, stubborn swarm.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/join"
            className="font-condensed text-sm px-6 py-4 bg-gold text-ink hover:bg-paper transition-colors border border-gold"
          >
            JOIN THE PARTY →
          </Link>
          <Link
            to="/manifesto"
            className="font-condensed text-sm px-6 py-4 border border-paper/60 hover:bg-paper hover:text-ink transition-colors"
          >
            READ THE MANIFESTO
          </Link>
        </div>
      </div>

      {/* Poster card */}
      <div className="relative justify-self-end w-full max-w-xs">
        <div className="absolute -top-3 -left-3 font-condensed text-[10px] text-gold tracking-widest">
          OFFICIAL POSTER · NO. 001 ★ ★ ★
        </div>
        <div className="border border-gold/50 bg-ink-soft p-5">
          <div className="aspect-[3/4] bg-gradient-to-br from-ink to-ink-soft border border-rule-on-ink relative overflow-hidden flex flex-col items-center justify-center">
            <div className="text-[120px] leading-none">🪳</div>
            <p className="font-condensed text-[10px] text-gold mt-4 tracking-widest">TCJP · 2026</p>
            <p className="font-italic-serif text-paper text-xl mt-1">Together we survive.</p>
          </div>
          <p className="font-condensed text-[10px] text-paper/60 mt-3 text-center">
            APPROVED · A work of satire
          </p>
        </div>
      </div>
    </div>

    {/* Bottom stat bar */}
    <div className="relative border-t border-rule-on-ink bg-ink/80 backdrop-blur">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-rule-on-ink">
        {[
          { v: "21,469", l: "Members & counting" },
          { v: "5", l: "Demands" },
          { v: "0", l: "Corporate donors" },
          { v: "∞", l: "Patience" },
        ].map((s, i) => (
          <div key={i} className="px-6 py-6">
            <div className="font-display text-3xl sm:text-4xl text-gold leading-none">{s.v}</div>
            <div className="mt-2 font-condensed text-[10px] text-paper/60">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
