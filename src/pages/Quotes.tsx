import { useEffect, useState } from "react";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { supabase } from "@/integrations/supabase/client";

interface Q { id: string; text: string; author: string }

const Quotes = () => {
  const [list, setList] = useState<Q[]>([]);
  useEffect(() => {
    supabase.from("quotes").select("*").eq("published", true).order("created_at", { ascending: false }).then(({ data }) => setList((data as Q[]) ?? []));
  }, []);

  return (
    <>
      <SEO title="Quotes — Lines worth screenshotting" description="Satirical quotes from The Cockroach Janta Party on India’s exam factory, inflation, hustle culture, and politicians’ best-forgotten promises." path="/quotes" />
      <SectionLabel label="The Mouth" title="" emphasis="Quotes." description="Lines worth screenshotting. Print them. Forward them. Argue with them." />
      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border border-ink">
            {list.map((q) => (
              <article key={q.id} className="bg-paper p-8">
                <p className="font-italic-serif text-xl sm:text-2xl leading-snug mb-4">"{q.text}"</p>
                <p className="font-condensed text-[11px] text-ink/60">{q.author}</p>
              </article>
            ))}
            {list.length === 0 && <div className="bg-paper p-10 text-sm text-ink/60">No quotes yet.</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
