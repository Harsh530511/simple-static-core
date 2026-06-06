import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { NEWS } from "@/data/news";

const News = () => (
  <>
    <SEO title="In the News — Press mentions" description="What the press is writing about The Cockroach Janta Party. Reviews, profiles, and the occasional confused editorial." path="/news" />
    <SectionLabel label="Press Coverage" title="In the" emphasis="News." description="The party currently has no PR team. These pieces happened anyway." />
    <div className="border-b border-ink">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        {NEWS.map((n) => (
          <article key={n.id} className="border-b border-ink py-8 last:border-b-0">
            <div className="flex items-center gap-3 font-condensed text-[11px] text-ink/55 mb-3">
              <span>{n.date}</span><span>·</span><span className="text-ink">{n.outlet}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl leading-tight mb-3">{n.headline}</h3>
            <p className="text-base text-ink/75 leading-relaxed mb-4">{n.excerpt}</p>
            <a href="#" className="font-condensed text-xs hover:text-gold">READ FULL PIECE →</a>
          </article>
        ))}
      </div>
    </div>
  </>
);

export default News;
