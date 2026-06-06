import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Marquee from "./Marquee";

const NAV = [
  { to: "/vision", label: "Vision" },
  { to: "/manifesto", label: "Manifesto" },
  { to: "/articles", label: "Articles" },
  { to: "/gallery", label: "Gallery" },
  { to: "/members", label: "Members" },
  { to: "/voice", label: "Issues" },
  { to: "/cockroach-tracker", label: "Tracker" },
  { to: "/contact", label: "Contact" },
];

const TOP = [
  "Party Launch · Volume 1, Edition 1",
  "Filed under: General Disgruntlement",
  "Sponsored by no one. Funded by nothing.",
  "HQ: Wherever the wifi works",
  "Now accepting rants, retweets, and resentment",
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const onHome = loc.pathname === "/";

  return (
    <header className="sticky top-0 z-50">
      <Marquee items={TOP} variant="ink" />
      <div className={`border-b border-ink ${onHome ? "bg-paper" : "bg-paper"} paper-grain`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 border border-ink flex items-center justify-center bg-paper">
              <span className="font-display text-xl leading-none">T</span>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-sm uppercase tracking-tight">The Cockroach</span>
              <span className="font-display text-sm uppercase tracking-tight">Janta Party</span>
              <span className="font-deva text-[10px] text-muted-foreground">कॉकरोच जनता पार्टी · Est. 2026</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-condensed text-sm">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `hover:text-gold transition-colors ${isActive ? "text-gold" : "text-ink"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/join"
              className="font-condensed text-xs sm:text-sm px-4 py-2.5 border border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              JOIN THE PARTY →
            </Link>
            <Link
              to="/voice/raise"
              className="font-condensed text-xs sm:text-sm px-4 py-2.5 border border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              RAISE AN ISSUE →
            </Link>
          </div>

          <button
            className="lg:hidden border border-ink p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-ink bg-paper">
            <nav className="flex flex-col px-4 py-2 font-condensed">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 border-b border-ink/20 ${isActive ? "text-gold" : "text-ink"}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/join"
                onClick={() => setOpen(false)}
                className="mt-3 mb-2 text-center bg-ink text-paper py-3"
              >
                JOIN THE PARTY →
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
