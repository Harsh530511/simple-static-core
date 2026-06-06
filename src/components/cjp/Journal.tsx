import { Link } from "react-router-dom";
import { ARTICLES } from "@/data/articles";
import SectionLabel from "./SectionLabel";

const Journal = () => {
  const items = ARTICLES.slice(0, 3);
  return (
    <section id="journal">
      <SectionLabel label="The Journal" title="Latest" emphasis="essays." />
      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink border border-ink">
            {items.map((a, i) => (
              <article key={a.slug} className="bg-paper p-7 flex flex-col">
                <div className="aspect-[4/3] bg-ink-soft border border-ink mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gold/30 font-display text-8xl">
                    0{i + 1}
                  </div>
                </div>
                <div className="flex items-center justify-between font-condensed text-[11px] text-ink/60 mb-3">
                  <span>{a.date}</span><span>{a.readTime}</span>
                </div>
                <h3 className="font-display text-xl leading-tight mb-3">{a.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed mb-6 flex-1">{a.excerpt}</p>
                <Link
                  to={`/articles/${a.slug}`}
                  className="font-condensed text-sm text-ink hover:text-gold mt-auto"
                >
                  READ →
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/articles"
              className="font-condensed text-sm px-6 py-4 border border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              ALL ARTICLES →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
