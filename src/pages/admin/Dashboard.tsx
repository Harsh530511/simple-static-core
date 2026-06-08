import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const [counts, setCounts] = useState({ articles: 0, events: 0, quotes: 0, news: 0, contacts: 0 });

  useEffect(() => {
    (async () => {
      const tables = ["articles", "events", "quotes", "news", "contact_messages"] as const;
      const results = await Promise.all(
        tables.map((t) => supabase.from(t).select("*", { count: "exact", head: true }))
      );
      setCounts({
        articles: results[0].count ?? 0,
        events: results[1].count ?? 0,
        quotes: results[2].count ?? 0,
        news: results[3].count ?? 0,
        contacts: results[4].count ?? 0,
      });
    })();
  }, []);

  const cards = [
    { to: "/admin/articles", label: "Articles", n: counts.articles },
    { to: "/admin/events", label: "Events", n: counts.events },
    { to: "/admin/quotes", label: "Quotes", n: counts.quotes },
    { to: "/admin/news", label: "News", n: counts.news },
    { to: "/admin/contacts", label: "Inbox", n: counts.contacts },
  ];

  return (
    <div>
      <p className="font-condensed text-[11px] text-ink/60 mb-2">Control Room</p>
      <h1 className="font-display text-4xl mb-8">Dashboard.</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-ink border border-ink">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="bg-paper p-6 hover:bg-ink hover:text-paper transition-colors">
            <p className="font-condensed text-[10px] uppercase opacity-60 mb-2">{c.label}</p>
            <p className="font-display text-5xl">{c.n}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
