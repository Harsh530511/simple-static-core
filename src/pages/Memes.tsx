import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";

const MEMES = [
  { top: "WHEN YOUR MANAGER SAYS", bottom: "“WE’RE LIKE A FAMILY HERE”", tag: "WORK" },
  { top: "₹100 IN 2010", bottom: "₹100 IN 2026 (NOW WITH FEELINGS)", tag: "ECONOMY" },
  { top: "POLITICIAN: WE WILL GENERATE JOBS", bottom: "GENERATION: WE ARE THE GENERATION", tag: "POLITICS" },
  { top: "ME, EXPLAINING TO MY PARENTS", bottom: "WHY A DEGREE IS NOT A JOB", tag: "FAMILY" },
  { top: "NEWS ANCHOR (8PM)", bottom: "NEWS ANCHOR (8:01PM)", tag: "MEDIA" },
  { top: "EMI ALERT: ₹14,200", bottom: "PAYSLIP: STILL LOADING", tag: "MONEY" },
  { top: "“BETI BACHAO BETI PADHAO”", bottom: "BETI APPLIED. BETI WAITING.", tag: "EDUCATION" },
  { top: "INDIA HAS 5G", bottom: "INDIA ALSO HAS LOAD-SHEDDING", tag: "INFRA" },
];

const Memes = () => (
  <>
    <SEO title="Memes — The Swarm’s Image Macro" description="A small, mostly humourless meme archive for the satirically inclined Indian voter. Print, repost, attribute." path="/meme" />
    <SectionLabel label="The Pamphlet" title="" emphasis="Memes." description="Designed badly, on purpose. Print them, forward them, attribute them." />
    <div className="border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink border border-ink">
          {MEMES.map((m, i) => (
            <article key={i} className="bg-paper p-6 flex flex-col">
              <div className="font-condensed text-[10px] text-ink/55 mb-3">{m.tag} · NO.{String(i+1).padStart(3,"0")}</div>
              <div className="flex-1 border-2 border-ink bg-secondary p-5 flex flex-col justify-between min-h-[220px]">
                <p className="font-display text-base sm:text-lg leading-tight text-center">{m.top}</p>
                <p className="font-condensed text-[9px] text-ink/55 text-center my-3">———</p>
                <p className="font-display text-base sm:text-lg leading-tight text-center">{m.bottom}</p>
              </div>
              <div className="flex items-center justify-between mt-4 font-condensed text-[10px]">
                <button className="border border-ink px-2 py-1 hover:bg-ink hover:text-paper">SHARE</button>
                <span className="text-ink/55">© TCJP · REUSE OK</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Memes;
