import { Link } from "react-router-dom";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { ARTICLES } from "@/data/articles";

const Articles = () => (
  <>
    <SEO
      title="The Journal — Essays & Dispatches"
      description="Essays from The Cockroach Janta Party on Indian politics, judicial delay, media monopoly, electoral integrity, and the everyday economy of being burnt out."
      path="/articles"
    />
    <SectionLabel
      label="The Journal"
      title="Essays &"
      emphasis="dispatches."
      description="Long-form arguments, short-form rants, and footnotes for the politically curious."
    />
    <div className="border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border border-ink">
          {ARTICLES.map((a, i) => (
            <article key={a.slug} className="bg-paper p-7 flex flex-col">
              <div className="aspect-[4/3] bg-ink-soft border border-ink mb-6 flex items-center justify-center text-gold/30 font-display text-7xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex items-center justify-between font-condensed text-[11px] text-ink/60 mb-3">
                <span>{a.date}</span><span>{a.readTime}</span>
              </div>
              <h3 className="font-display text-xl leading-tight mb-3">{a.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed mb-6 flex-1">{a.excerpt}</p>
              <Link to={`/articles/${a.slug}`} className="font-condensed text-sm hover:text-gold">READ →</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Articles;
