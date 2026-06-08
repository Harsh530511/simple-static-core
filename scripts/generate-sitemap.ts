// Runs before `vite dev` and `vite build` (predev/prebuild hooks).
// Pulls dynamic article + event slugs from Lovable Cloud so the sitemap stays current automatically.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { config as loadEnv } from "dotenv";

loadEnv();

const BASE_URL = "https://thecockroachjantaparty.lovable.app";
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

interface Entry { path: string; changefreq?: string; priority?: string; lastmod?: string }

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/vision", changefreq: "monthly", priority: "0.8" },
  { path: "/manifesto", changefreq: "monthly", priority: "0.9" },
  { path: "/articles", changefreq: "weekly", priority: "0.8" },
  { path: "/protests", changefreq: "weekly", priority: "0.8" },
  { path: "/gallery", changefreq: "monthly", priority: "0.7" },
  { path: "/members", changefreq: "daily", priority: "0.7" },
  { path: "/voice", changefreq: "daily", priority: "0.8" },
  { path: "/voice/raise", changefreq: "monthly", priority: "0.6" },
  { path: "/cockroach-tracker", changefreq: "daily", priority: "0.7" },
  { path: "/quotes", changefreq: "weekly", priority: "0.6" },
  { path: "/meme", changefreq: "weekly", priority: "0.5" },
  { path: "/news", changefreq: "weekly", priority: "0.6" },
  { path: "/press", changefreq: "monthly", priority: "0.5" },
  { path: "/card", changefreq: "monthly", priority: "0.6" },
  { path: "/join", changefreq: "monthly", priority: "0.9" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
];

async function fetchSlugs(table: string): Promise<{ slug: string; updated_at?: string }[]> {
  if (!SUPABASE_URL || !SUPABASE_KEY) return [];
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=slug,updated_at&published=eq.true`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
    });
    if (!res.ok) {
      console.warn(`[sitemap] ${table} fetch failed: ${res.status}`);
      return [];
    }
    return (await res.json()) as { slug: string; updated_at?: string }[];
  } catch (e) {
    console.warn(`[sitemap] ${table} fetch error`, e);
    return [];
  }
}

const main = async () => {
  const [articles, events] = await Promise.all([fetchSlugs("articles"), fetchSlugs("events")]);

  const entries: Entry[] = [
    ...staticEntries,
    ...articles.map((a) => ({ path: `/articles/${a.slug}`, changefreq: "monthly", priority: "0.6", lastmod: a.updated_at?.slice(0, 10) })),
    ...events.map((e) => ({ path: `/protests/${e.slug}`, changefreq: "monthly", priority: "0.7", lastmod: e.updated_at?.slice(0, 10) })),
  ];

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...entries.map((e) => [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ].filter(Boolean).join("\n")),
    `</urlset>`,
  ].join("\n");

  writeFileSync(resolve("public/sitemap.xml"), xml);
  console.log(`sitemap.xml written (${entries.length} entries: ${staticEntries.length} static + ${articles.length} articles + ${events.length} events)`);
};

main();
