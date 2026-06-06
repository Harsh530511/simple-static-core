import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="bg-ink text-paper border-t border-rule-on-ink">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <p className="font-condensed text-xs text-gold mb-3">Get in touch</p>
        <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-4">
          Connect <span className="font-italic-serif text-gold">with us.</span>
        </h3>
        <p className="text-sm text-paper/70 max-w-md leading-relaxed">
          Want to join, volunteer, complain, or send a meme? Write to us. We read everything.
          We reply to most things.
        </p>
      </div>

      <div>
        <p className="font-condensed text-xs text-paper/50 mb-3">Email</p>
        <a href="mailto:hello@tcjp.in" className="hover:text-gold text-sm break-all">hello@tcjp.in</a>
        <p className="font-condensed text-xs text-paper/50 mt-6 mb-3">Press</p>
        <a href="mailto:press@tcjp.in" className="hover:text-gold text-sm break-all">press@tcjp.in</a>
      </div>

      <div>
        <p className="font-condensed text-xs text-paper/50 mb-3">Headquarters</p>
        <p className="text-sm">Wherever the wifi works.</p>
        <p className="font-condensed text-xs text-paper/50 mt-6 mb-3">Pages</p>
        <ul className="text-sm space-y-1">
          <li><Link to="/manifesto" className="hover:text-gold">Manifesto</Link></li>
          <li><Link to="/articles" className="hover:text-gold">Articles</Link></li>
          <li><Link to="/join" className="hover:text-gold">Join</Link></li>
          <li><Link to="/disclaimer" className="hover:text-gold">Disclaimer</Link></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-rule-on-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-condensed text-xs text-paper/60">
        <span>© 2026 The Cockroach Janta Party</span>
        <span className="text-gold">⚠ A work of satire</span>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
