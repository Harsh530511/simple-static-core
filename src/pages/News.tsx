import { useEffect, useState } from "react";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { supabase } from "@/integrations/supabase/client";

interface N { id: string; title: string; source: string; url: string | null; summary: string; published_at: string }

const News = () => {
  const [list, setList] = useState<N[]>([]);
  useEffect(() => {
    supabase.from("news").select("*").eq("published", true).order("created_at", { ascending: false }).then(({ data }) => setList((data as N[]) ?? []));
  }, []);

  return (
    <>
      <SEO title="In the News — Press mentions" description="What the press is writing about The Cockroach Janta Party. Reviews, profiles, and the occasional confused editorial." path="/news" />
      <SectionLabel label="Press Coverage" title="In the" emphasis="News." description="The party currently has no PR team. These pieces happened anyway." />
      <div className="border-b border-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          {list.map((n) => (
            <article key={n.id} className="border-b border-ink py-8 last:border-b-0">
              <div className="flex items-center gap-3 font-condensed text-[11px] text-ink/55 mb-3">
                <span>{n.published_at}</span><span>·</span><span className="text-ink">{n.source}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight mb-3">{n.title}</h3>
              <p className="text-base text-ink/75 leading-relaxed mb-4">{n.summary}</p>
              {n.url && <a href={n.url} target="_blank" rel="noopener noreferrer" className="font-condensed text-xs hover:text-gold">READ FULL PIECE →</a>}
            </article>
          ))}
          {list.length === 0 && <p className="text-sm text-ink/60">No press yet.</p>}
        </div>
      </div>
    </>
  );
};

export default News;
