import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import SEO from "@/components/cjp/SEO";

const SITE = "https://thecockroachjantaparty.lovable.app";
const SITEMAP_URL = `${SITE}/sitemap.xml`;
const ROBOTS_URL = `${SITE}/robots.txt`;

const groups: { label: string; links: { path: string; title: string }[] }[] = [
  {
    label: "Core",
    links: [
      { path: "/", title: "Home" },
      { path: "/vision", title: "Vision" },
      { path: "/manifesto", title: "Manifesto" },
      { path: "/join", title: "Join the Swarm" },
      { path: "/contact", title: "Contact" },
    ],
  },
  {
    label: "Movement",
    links: [
      { path: "/members", title: "Members" },
      { path: "/voice", title: "Voice — Issues" },
      { path: "/voice/raise", title: "Raise an Issue" },
      { path: "/cockroach-tracker", title: "Cockroach Tracker" },
      { path: "/protests", title: "Protests" },
      { path: "/card", title: "Membership Card" },
    ],
  },
  {
    label: "Media",
    links: [
      { path: "/articles", title: "Journal / Articles" },
      { path: "/gallery", title: "Gallery" },
      { path: "/quotes", title: "Quotes" },
      { path: "/meme", title: "Memes" },
      { path: "/news", title: "News" },
      { path: "/press", title: "Press Kit" },
    ],
  },
  {
    label: "Legal",
    links: [
      { path: "/privacy", title: "Privacy" },
      { path: "/terms", title: "Terms" },
      { path: "/disclaimer", title: "Disclaimer" },
      { path: "/sitemap", title: "Sitemap" },
    ],
  },
];

const Sitemap = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      toast.success(`Copied ${label}`);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      toast.error("Copy failed");
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <SEO
        title="Sitemap"
        description="Complete index of every page on The Cockroach Janta Party. Includes the sitemap.xml and robots.txt URLs for Google Search Console submission."
        path="/sitemap"
      />

      <header className="border-b border-ink pb-6 mb-10">
        <p className="font-condensed text-[11px] tracking-[0.3em] text-ink/60">VOLUME 1 · INDEX</p>
        <h1 className="font-display text-5xl sm:text-6xl font-black tracking-tight mt-2">SITEMAP</h1>
        <p className="font-condensed text-sm text-ink/70 mt-3 max-w-2xl">
          Every public page in the swarm, indexed for humans and crawlers. Use the URLs below to submit the site to Google Search Console, Bing Webmaster Tools, or any indexing service.
        </p>
      </header>

      <section className="border border-ink p-6 mb-12 bg-paper">
        <p className="font-condensed text-[11px] tracking-[0.3em] text-ink/60 mb-4">FOR SEARCH ENGINES</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <UrlRow label="sitemap.xml" url={SITEMAP_URL} onCopy={copy} copied={copied} />
          <UrlRow label="robots.txt" url={ROBOTS_URL} onCopy={copy} copied={copied} />
        </div>
        <p className="font-condensed text-[11px] text-ink/60 mt-4 leading-relaxed">
          In Google Search Console → Sitemaps, paste <span className="font-mono">sitemap.xml</span> and click submit. The file is regenerated on every deploy.
        </p>
      </section>

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
        {groups.map((g) => (
          <section key={g.label}>
            <h2 className="font-display text-2xl font-black border-b border-ink pb-2 mb-4">{g.label}</h2>
            <ul className="divide-y divide-ink/20">
              {g.links.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="flex items-baseline justify-between gap-4 py-3 hover:bg-ink hover:text-paper px-2 -mx-2 transition-colors"
                  >
                    <span className="font-display text-base">{l.title}</span>
                    <span className="font-mono text-[11px] opacity-60 truncate">{l.path}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};

const UrlRow = ({
  label,
  url,
  onCopy,
  copied,
}: {
  label: string;
  url: string;
  onCopy: (t: string, l: string) => void;
  copied: string | null;
}) => (
  <div className="border border-ink p-3 flex items-center justify-between gap-3">
    <div className="min-w-0">
      <p className="font-condensed text-[10px] tracking-[0.25em] text-ink/60 uppercase">{label}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs truncate block hover:underline">
        {url}
      </a>
    </div>
    <button
      onClick={() => onCopy(url, label)}
      className="font-condensed text-[11px] px-3 py-1.5 border border-ink hover:bg-ink hover:text-paper shrink-0"
    >
      {copied === label ? "COPIED" : "COPY"}
    </button>
  </div>
);

export default Sitemap;
