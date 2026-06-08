import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/cjp/SEO";

const QUICK_LINKS: { to: string; label: string; sub: string }[] = [
  { to: "/", label: "HQ", sub: "The front page" },
  { to: "/manifesto", label: "Manifesto", sub: "Five non-negotiable demands" },
  { to: "/voice", label: "Voice", sub: "Issues raised by the swarm" },
  { to: "/cockroach-tracker", label: "Swarm Tracker", sub: "Live member map" },
  { to: "/join", label: "Join", sub: "File a membership application" },
  { to: "/sitemap", label: "Full Sitemap", sub: "Every page on the site" },
];

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Not Found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="border-b border-ink">
      <SEO title="404 — Page not found" description="This page is unfiled, unfunded, and unaccounted for. Try the manifesto, the swarm tracker, or the full sitemap." path={location.pathname} />
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-28">
        <p className="font-condensed text-[10px] text-ink/55 mb-3">FILE NOT FOUND · CASE #404</p>
        <div className="font-display text-[7rem] sm:text-[10rem] leading-none text-gold">404</div>
        <h1 className="font-display text-4xl sm:text-6xl mt-4 leading-[0.95]">
          Not in the <span className="font-italic-serif">archive.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-ink/75 text-base sm:text-lg leading-relaxed">
          The URL <code className="font-condensed bg-ink text-paper px-1.5 py-0.5">{location.pathname}</code> is unfiled, unfunded, and unaccounted for. The cockroach scurried — try one of these instead.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border border-ink">
          {QUICK_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="group bg-paper p-5 hover:bg-ink hover:text-paper transition-colors">
              <p className="font-condensed text-[10px] opacity-60 mb-1">GO TO</p>
              <p className="font-display text-2xl">{l.label}</p>
              <p className="font-condensed text-[11px] opacity-70 mt-1">{l.sub}</p>
              <p className="font-condensed text-[10px] mt-3 opacity-0 group-hover:opacity-100">OPEN →</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className="font-condensed text-sm border border-ink px-6 py-3 hover:bg-ink hover:text-paper">← BACK TO HQ</Link>
          <Link to="/sitemap" className="font-condensed text-sm bg-ink text-paper px-6 py-3 hover:bg-gold hover:text-ink">VIEW FULL SITEMAP →</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
