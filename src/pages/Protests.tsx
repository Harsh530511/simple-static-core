import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { supabase } from "@/integrations/supabase/client";

interface Ev {
  id: string; slug: string; title: string; location: string; event_date: string; time_range: string; theme: string; excerpt: string;
}

const Protests = () => {
  const [list, setList] = useState<Ev[]>([]);
  useEffect(() => {
    supabase.from("events").select("*").eq("published", true).order("event_date", { ascending: false }).then(({ data }) => setList((data as Ev[]) ?? []));
  }, []);

  return (
    <>
      <SEO
        title="Protests & Events — The Cockroach March"
        description="Past and upcoming protests held by The Cockroach Janta Party — including the historic 6 June 2026 Cockroach March at Jantar Mantar, New Delhi, demanding accountability on exam irregularities."
        path="/protests"
      />
      <SectionLabel label="On the Ground" title="Protests &" emphasis="events." description="Where the swarm shows up. Documented dates, locations, and demands." />
      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border border-ink">
            {list.map((e) => (
              <article key={e.id} className="bg-paper p-7 flex flex-col">
                <div className="flex items-center justify-between font-condensed text-[11px] text-ink/60 mb-3">
                  <span>{e.event_date}</span>
                  <span>{e.location}</span>
                </div>
                <h3 className="font-display text-2xl leading-tight mb-3">{e.title}</h3>
                <p className="font-italic-serif text-base text-ink/80 mb-4">{e.theme}</p>
                <p className="text-sm text-ink/70 leading-relaxed mb-6 flex-1">{e.excerpt}</p>
                <Link to={`/protests/${e.slug}`} className="font-condensed text-sm hover:text-gold">READ FIELD REPORT →</Link>
              </article>
            ))}
            {list.length === 0 && (
              <div className="bg-paper p-10 text-sm text-ink/60 md:col-span-2">No events listed yet.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Protests;
