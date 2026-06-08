// Runs before `vite dev` and `vite build` (predev/prebuild hooks).
// Pulls dynamic article + event slugs from Lovable Cloud so the sitemap stays current automatically.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { config as loadEnv } from "dotenv";

loadEnv();

const BASE_URL = "https://simple-static-core.lovable.app";
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

interface Entry { path: string; changefreq?: string; priority?: string; lastmod?: string }

const TODAY = new Date().toISOString().slice(0, 10);

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: TODAY },
  { path: "/vision", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/manifesto", changefreq: "monthly", priority: "0.9", lastmod: TODAY },
  { path: "/articles", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/protests", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/gallery", changefreq: "monthly", priority: "0.7", lastmod: TODAY },
  { path: "/members", changefreq: "daily", priority: "0.7", lastmod: TODAY },
  { path: "/voice", changefreq: "daily", priority: "0.8", lastmod: TODAY },
  { path: "/voice/raise", changefreq: "monthly", priority: "0.6", lastmod: TODAY },
  { path: "/cockroach-tracker", changefreq: "daily", priority: "0.7", lastmod: TODAY },
  { path: "/quotes", changefreq: "weekly", priority: "0.6", lastmod: TODAY },
  { path: "/meme", changefreq: "weekly", priority: "0.5", lastmod: TODAY },
  { path: "/news", changefreq: "weekly", priority: "0.6", lastmod: TODAY },
  { path: "/press", changefreq: "monthly", priority: "0.5", lastmod: TODAY },
  { path: "/card", changefreq: "monthly", priority: "0.6", lastmod: TODAY },
  { path: "/join", changefreq: "monthly", priority: "0.9", lastmod: TODAY },
  { path: "/contact", changefreq: "yearly", priority: "0.5", lastmod: TODAY },
  { path: "/privacy", changefreq: "yearly", priority: "0.3", lastmod: TODAY },
  { path: "/terms", changefreq: "yearly", priority: "0.3", lastmod: TODAY },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.3", lastmod: TODAY },
  { path: "/sitemap", changefreq: "monthly", priority: "0.4", lastmod: TODAY },
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
