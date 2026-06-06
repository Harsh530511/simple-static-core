import { Link, useParams } from "react-router-dom";
import SEO from "@/components/cjp/SEO";
import { getArticle } from "@/data/articles";

const ArticleDetail = () => {
  const { slug = "" } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-24 text-center">
        <SEO title="Article not found" description="This essay does not exist." path={`/articles/${slug}`} />
        <h1 className="font-display text-5xl mb-6">Not in the archive.</h1>
        <Link to="/articles" className="font-condensed text-sm border border-ink px-5 py-3 hover:bg-ink hover:text-paper">
          ← Back to all articles
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/articles/${article.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          datePublished: article.date,
          description: article.excerpt,
          author: { "@type": "Organization", name: "The Cockroach Janta Party" },
        }}
      />
      <article className="border-b border-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <Link to="/articles" className="font-condensed text-xs text-ink/60 hover:text-gold">
            ← THE JOURNAL
          </Link>
          <div className="flex items-center gap-4 font-condensed text-[11px] text-ink/60 mt-8 mb-5">
            <span>{article.date}</span><span>·</span><span>{article.readTime}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl leading-[0.95] mb-8">{article.title}</h1>
          <p className="font-italic-serif text-xl sm:text-2xl text-ink/75 leading-snug border-l-2 border-gold pl-5 mb-10">
            {article.excerpt}
          </p>
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-ink/85">
            {article.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-16 pt-8 border-t border-ink flex justify-between font-condensed text-xs">
            <Link to="/articles" className="hover:text-gold">← MORE ESSAYS</Link>
            <Link to="/join" className="hover:text-gold">JOIN THE PARTY →</Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleDetail;
