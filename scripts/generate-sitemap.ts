import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://car-hitch-home.lovable.app";

interface Entry { path: string; changefreq?: string; priority?: string }

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/manifesto", changefreq: "monthly", priority: "0.9" },
  { path: "/articles", changefreq: "weekly", priority: "0.8" },
  { path: "/join", changefreq: "monthly", priority: "0.9" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
];

const articleSlugs = [
  "tareekh-pe-tareekh-indian-judiciary",
  "the-quiet-rights-human-rights-india",
  "reclaiming-the-cockroach-as-political-symbol",
  "the-five-demands-explained",
  "the-great-emi-republic",
];

const entries: Entry[] = [
  ...staticEntries,
  ...articleSlugs.map((s) => ({ path: `/articles/${s}`, changefreq: "monthly", priority: "0.6" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ].filter(Boolean).join("\n")
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
