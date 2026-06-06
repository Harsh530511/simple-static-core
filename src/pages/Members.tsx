import { Link } from "react-router-dom";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { MEMBERS } from "@/data/members";

const Members = () => (
  <>
    <SEO title="Our Members — The Swarm" description="Meet the founding members of The Cockroach Janta Party — overqualified, politically frustrated, financially confused, and joining anyway. Become member #21564." path="/members" />
    <SectionLabel
      label="The Swarm"
      title="Our"
      emphasis="Members."
      description="Nameless to no one. Every reason to join, recorded, archived, and printed in the smallest possible font."
    />
    <div className="border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border border-ink">
          {MEMBERS.map((m) => {
            const initials = m.name.split(" ").map((p) => p[0]).slice(0,2).join("").toUpperCase();
            return (
              <article key={m.id} className="bg-paper p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full border border-ink bg-secondary flex items-center justify-center font-display text-sm">{initials}</div>
                  <div>
                    <p className="font-condensed text-[10px] text-ink/50">{m.tag.toUpperCase()}</p>
                    <h3 className="font-display text-lg leading-tight">{m.name}</h3>
                    <p className="font-condensed text-[10px] text-ink/60">{m.city.toUpperCase()}, {m.state}</p>
                  </div>
                </div>
                <p className="font-italic-serif text-base text-ink/85 leading-snug mb-4">“{m.reason}”</p>
                <div className="flex items-center justify-between font-condensed text-[10px] text-ink/55 border-t border-ink/15 pt-3">
                  <span>{m.reqId}</span>
                  <span>{m.joined}</span>
                </div>
              </article>
            );
          })}
          <article className="bg-ink text-paper p-8 flex flex-col justify-between">
            <div>
              <p className="font-condensed text-[10px] text-gold mb-3">NEXT IN LINE</p>
              <h3 className="font-display text-3xl leading-tight">Become <span className="font-italic-serif text-gold">#21,564.</span></h3>
              <p className="text-sm text-paper/70 mt-3 leading-relaxed">No fee. No selfie. No missed-call registration. The application is shorter than a Zomato review.</p>
            </div>
            <Link to="/join" className="mt-6 inline-block font-condensed text-sm px-5 py-3 bg-gold text-ink hover:bg-paper transition-colors w-fit">FILE APPLICATION →</Link>
          </article>
        </div>
      </div>
    </div>
  </>
);

export default Members;
