import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import PosterCard from "@/components/cjp/PosterCard";
import { POSTERS, Poster } from "@/data/posters";

const CATS: (Poster["category"] | "All")[] = ["All", "Rally", "Manifesto", "Membership", "Poster", "Heritage", "Symbol"];

const Gallery = () => {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const items = cat === "All" ? POSTERS : POSTERS.filter((p) => p.category === cat);
  return (
    <>
      <SEO title="The Gallery — Posters & Pamphlets" description="Vintage propaganda posters and rally imagery from The Cockroach Janta Party, in the tradition of Indian independence-era pamphlets — reclaimed for India’s burnt-out, overqualified, politically frustrated youth." path="/gallery" />
      <SectionLabel
        label="The Swarm · In Pictures"
        title="The"
        emphasis="Gallery."
        description="Posters and pamphlets in the tradition of independence-era print — reclaimed for India’s overqualified and politically frustrated youth."
      />
      <div className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`font-condensed text-[11px] px-3 py-2 border border-ink ${cat === c ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-ink hover:text-paper"} transition-colors`}>{c.toUpperCase()}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border border-ink">
            {items.map((p) => (<div key={p.id} className="bg-paper"><PosterCard p={p} /></div>))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-ink/65 mb-4">Made by the swarm, for the swarm. Available for editorial reuse under our <Link to="/terms" className="underline">Terms of Use</Link>.</p>
            <Link to="/join" className="inline-block font-condensed text-sm px-6 py-4 bg-ink text-paper hover:bg-gold hover:text-ink transition-colors">JOIN THE SWARM →</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
