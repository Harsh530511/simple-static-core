import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/cjp/SEO";
import { supabase } from "@/integrations/supabase/client";

interface Ev {
  id: string; slug: string; title: string; location: string; event_date: string; time_range: string;
  theme: string; excerpt: string; body: string[]; cover_image: string | null;
}

const ProtestDetail = () => {
  const { slug = "" } = useParams();
  const [ev, setEv] = useState<Ev | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("events").select("*").eq("slug", slug).eq("published", true).maybeSingle().then(({ data }) => {
      setEv(data as Ev | null); setLoading(false);
    });
  }, [slug]);

  if (loading) return <div className="max-w-3xl mx-auto px-4 py-24 text-center font-condensed text-sm text-ink/60">Loading…</div>;
  if (!ev) return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-24 text-center">
      <SEO title="Event not found" description="This event is not on file." path={`/protests/${slug}`} />
      <h1 className="font-display text-5xl mb-6">Not on the calendar.</h1>
      <Link to="/protests" className="font-condensed text-sm border border-ink px-5 py-3 hover:bg-ink hover:text-paper">← Back to events</Link>
    </div>
  );

  return (
    <>
      <SEO
        title={ev.title}
        description={ev.excerpt}
        path={`/protests/${ev.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: ev.title,
          startDate: ev.event_date,
          location: { "@type": "Place", name: ev.location },
          description: ev.excerpt,
          organizer: { "@type": "Organization", name: "The Cockroach Janta Party" },
        }}
      />
      <article className="border-b border-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <Link to="/protests" className="font-condensed text-xs text-ink/60 hover:text-gold">← ALL EVENTS</Link>
          <div className="flex flex-wrap items-center gap-3 font-condensed text-[11px] text-ink/60 mt-8 mb-5">
            <span>{ev.event_date}</span><span>·</span><span>{ev.time_range}</span><span>·</span><span>{ev.location}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl leading-[0.95] mb-6">{ev.title}</h1>
          <p className="font-italic-serif text-xl sm:text-2xl text-ink/75 leading-snug border-l-2 border-gold pl-5 mb-10">{ev.theme}</p>
          {ev.cover_image && <img src={ev.cover_image} alt={ev.title} className="w-full border border-ink mb-10" />}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-ink/85">
            {ev.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-16 pt-8 border-t border-ink flex justify-between font-condensed text-xs">
            <Link to="/protests" className="hover:text-gold">← MORE EVENTS</Link>
            <Link to="/join" className="hover:text-gold">JOIN THE PARTY →</Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProtestDetail;
