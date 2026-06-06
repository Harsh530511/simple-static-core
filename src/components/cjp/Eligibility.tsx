import { Link } from "react-router-dom";
import SectionLabel from "./SectionLabel";

const REQS = [
  { tag: "REQ / 01", title: "Overqualified", body: "Three certificates. Zero callbacks." },
  { tag: "REQ / 02", title: "Politically Frustrated", body: "Complains professionally. Votes emotionally." },
  { tag: "REQ / 03", title: "Civic Anger", body: "Triggered by fuel prices, layoffs, and unpaid internships." },
  { tag: "REQ / 04", title: "Financially Confused", body: "Salary comes. EMI takes. UPI finishes the rest." },
];

const Eligibility = () => (
  <section id="join">
    <SectionLabel
      label="Membership"
      title="Are you eligible to"
      emphasis="join?"
      description="We do not check religion, caste, or gender. We do, however, have four (4) standards."
    />
    <div className="border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border border-ink">
          {REQS.map((r) => (
            <div key={r.tag} className="bg-paper p-8 flex items-start gap-5">
              <div className="font-condensed text-[10px] text-ink/50 mt-2 whitespace-nowrap">{r.tag}</div>
              <div className="flex-1">
                <h3 className="font-display text-xl mb-2">{r.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{r.body}</p>
              </div>
              <div className="h-8 w-8 border border-ink flex items-center justify-center text-gold text-lg font-bold">
                ✓
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-ink bg-ink text-paper p-8">
          <div>
            <p className="font-condensed text-xs text-gold mb-2">No fees. No forms.</p>
            <p className="font-display text-2xl sm:text-3xl">
              Free, lifelong, and revocable <span className="font-italic-serif text-gold">only by you.</span>
            </p>
          </div>
          <Link
            to="/join"
            className="font-condensed text-sm px-6 py-4 bg-gold text-ink hover:bg-paper transition-colors whitespace-nowrap"
          >
            JOIN THE PARTY →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Eligibility;
