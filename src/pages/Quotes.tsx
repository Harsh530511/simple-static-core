import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { QUOTES } from "@/data/quotes";

const Quotes = () => (
  <>
    <SEO title="Quotes — Lines worth screenshotting" description="Satirical quotes from The Cockroach Janta Party on India’s exam factory, inflation, hustle culture, and politicians’ best-forgotten promises." path="/quotes" />
    <SectionLabel
      label="The Mouth"
      title=""
      emphasis="Quotes."
      description="Lines worth screenshotting. Print them. Forward them. Argue with them."
    />
    <div className="border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border border-ink">
          {QUOTES.map((q) => (
            <article key={q.id} className="bg-paper p-8">
              <h3 className="font-display text-xl sm:text-2xl leading-tight mb-4">{q.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{q.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Quotes;
