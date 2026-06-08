import { Link } from "react-router-dom";

const COLS = [
  {
    label: "The Party",
    links: [
      { to: "/vision", label: "Vision" },
      { to: "/manifesto", label: "The Manifesto" },
      { to: "/articles", label: "Articles" },
      { to: "/gallery", label: "Gallery" },
      { to: "/cockroach-tracker", label: "Tracker" },
    ],
  },
  {
    label: "Topics",
    links: [
      { to: "/meme", label: "Memes" },
      { to: "/voice", label: "Issues" },
      { to: "/manifesto", label: "Manifesto" },
      { to: "/news", label: "News" },
      { to: "/quotes", label: "Quotes" },
    ],
  },
  {
    label: "Get Involved",
    links: [
      { to: "/join", label: "Join the party" },
      { to: "/members", label: "Members" },
      { to: "/card", label: "Get your card" },
      { to: "/voice/raise", label: "Raise your voice" },
      { to: "/contact", label: "Volunteer" },
    ],
  },
  {
    label: "Legal",
    links: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms of Use" },
      { to: "/disclaimer", label: "Disclaimer" },
      { to: "/press", label: "Press Kit" },
      { to: "/sitemap", label: "Sitemap" },
    ],
  },
];

const SiteFooter = () => (
  <footer className="bg-ink text-paper border-t border-rule-on-ink mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 border-b border-rule-on-ink">
      <div>
        <p className="font-condensed text-xs text-gold mb-3">THE DISPATCH</p>
        <h3 className="font-display text-4xl sm:text-5xl leading-tight mb-3">
          One email. <span className="font-italic-serif text-gold">When it matters.</span>
        </h3>
        <p className="text-sm text-paper/65 max-w-md">New essays, manifesto updates, and the occasional open letter. No spam, no fundraising ladder, no automated drip sequence.</p>
      </div>
      <form className="self-end" onSubmit={(e) => e.preventDefault()}>
        <div className="flex border border-rule-on-ink">
          <input type="email" required placeholder="you@example.in" className="flex-1 bg-ink-soft px-4 py-3 outline-none placeholder:text-paper/40 text-paper" />
          <button className="bg-gold text-ink font-condensed text-sm px-5 hover:bg-paper transition-colors">SUBSCRIBE</button>
        </div>
        <p className="font-condensed text-[10px] text-paper/50 mt-2">One email, when there’s something to say. Unsubscribe anytime.</p>
      </form>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 border-b border-rule-on-ink">
      <div className="col-span-2 sm:col-span-4 lg:col-span-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-9 w-9 border border-rule-on-ink flex items-center justify-center"><span className="font-display text-lg leading-none text-gold">T</span></div>
          <div>
            <p className="font-display text-sm leading-tight">THE COCKROACH<br/>JANTA PARTY</p>
            <p className="font-deva text-[10px] text-paper/55">कॉकरोच जनता पार्टी · Est. 2026</p>
          </div>
        </div>
        <p className="text-sm text-paper/65 max-w-xs">A political party for the lazy, the unemployed, and the chronically correct. Headquartered wherever the wifi works.</p>
      </div>
      {COLS.map((col) => (
        <div key={col.label}>
          <p className="font-condensed text-[10px] text-paper/45 mb-4">{col.label.toUpperCase()}</p>
          <ul className="space-y-2 text-sm">
            {col.links.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-gold transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-condensed text-[11px] text-paper/55">
      <span>© 2026 The Cockroach Janta Party · All rights reserved.</span>
      <span className="text-gold">⚠ A work of satire</span>
      <span className="flex gap-4">
        <Link to="/privacy" className="hover:text-gold">Privacy</Link>
        <Link to="/terms" className="hover:text-gold">Terms</Link>
        <Link to="/contact" className="hover:text-gold">Contact</Link>
      </span>
    </div>
  </footer>
);

export default SiteFooter;
