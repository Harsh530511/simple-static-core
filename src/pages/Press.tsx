import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";

const Press = () => (
  <>
    <SEO title="Press Kit" description="Press contact, party boilerplate, founding-statement excerpts, and downloadable assets for The Cockroach Janta Party." path="/press" />
    <SectionLabel label="For Journalists" title="The Press" emphasis="Kit." description="Boilerplate, assets, and a direct line. No PR firm in between." />
    <div className="border-b border-ink">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="border border-ink p-8">
          <p className="font-condensed text-[10px] text-ink/55 mb-3">DIRECT LINE</p>
          <h3 className="font-display text-3xl mb-3">Press <span className="font-italic-serif">contact.</span></h3>
          <p className="text-sm text-ink/75 mb-4">Written questions get written answers, usually within 48 hours. Phone interviews on request, on the record only.</p>
          <a href="mailto:press@tcjp.in" className="font-display text-xl hover:text-gold break-all">press@tcjp.in</a>
        </div>
        <div className="border border-ink p-8">
          <p className="font-condensed text-[10px] text-ink/55 mb-3">BOILERPLATE</p>
          <h3 className="font-display text-3xl mb-3">About the <span className="font-italic-serif">party.</span></h3>
          <p className="text-sm text-ink/85 leading-relaxed">
            The Cockroach Janta Party (TCJP) is a satirical Indian political movement founded in May 2026, advocating five demands on judicial reform, electoral integrity, women’s representation, media plurality, and a twenty-year defection bar. Membership is free, lifelong, and revocable only by the member. The party has no headquarters, no salaried staff, and no fundraising arm.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-16">
        <div className="border border-ink bg-paper">
          <div className="border-b border-ink px-6 py-3 font-condensed text-[11px]">DOWNLOADABLE ASSETS</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink">
            {[
              { l: "Wordmark · SVG", s: "2 KB" },
              { l: "Emblem · PNG", s: "84 KB" },
              { l: "Style guide · PDF", s: "1.2 MB" },
              { l: "Manifesto · PDF", s: "240 KB" },
            ].map((a) => (
              <div key={a.l} className="bg-paper p-6">
                <p className="font-display text-base mb-2">{a.l}</p>
                <p className="font-condensed text-[10px] text-ink/55 mb-3">{a.s}</p>
                <button className="font-condensed text-[11px] border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper">DOWNLOAD →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Press;
