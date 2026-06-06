import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import MembershipCard from "@/components/cjp/MembershipCard";
import { toast } from "sonner";

const CardPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [f, setF] = useState({ name: "", city: "", reason: "" });
  const reqId = `REQ / ${String(21564 + (f.name.length * 13) % 9999).padStart(5, "0")}`;
  const joined = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

  const download = async () => {
    if (!ref.current) return;
    try {
      const url = await toPng(ref.current, { pixelRatio: 2, backgroundColor: "#e8e1cf" });
      const a = document.createElement("a");
      a.href = url;
      a.download = `tcjp-card-${f.name.replace(/\s+/g, "-").toLowerCase() || "member"}.png`;
      a.click();
      toast.success("Card downloaded.");
    } catch {
      toast.error("Card export failed.");
    }
  };

  return (
    <>
      <SEO title="Get your Member Card" description="Generate your printable Cockroach Janta Party member card. Free, lifelong, and revocable only by you." path="/card" />
      <SectionLabel label="Members · Card" title="Get your" emphasis="card." description="Fill the form. Download the card. Print it, frame it, paste it on a Bullet — your call." />
      <div className="border-b border-ink">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">
          <form onSubmit={(e) => { e.preventDefault(); download(); }} className="border border-ink bg-paper">
            <div className="border-b border-ink p-6">
              <label className="font-condensed text-[10px] text-ink/60 block mb-2">Full name</label>
              <input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder="Your name as you want it printed" className="w-full bg-transparent outline-none font-display text-2xl placeholder:text-ink/30" />
            </div>
            <div className="border-b border-ink p-6">
              <label className="font-condensed text-[10px] text-ink/60 block mb-2">City, State</label>
              <input required value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} placeholder="e.g. Lucknow, UP" className="w-full bg-transparent outline-none font-display text-xl placeholder:text-ink/30" />
            </div>
            <div className="border-b border-ink p-6">
              <label className="font-condensed text-[10px] text-ink/60 block mb-2">Reason for joining (optional, ≤ 140 chars)</label>
              <input maxLength={140} value={f.reason} onChange={(e) => setF({ ...f, reason: e.target.value })} placeholder="A sharp, honest sentence." className="w-full bg-transparent outline-none text-base placeholder:text-ink/30" />
            </div>
            <button type="submit" className="w-full bg-ink text-paper font-condensed text-sm py-5 hover:bg-gold hover:text-ink transition-colors">DOWNLOAD CARD (PNG) →</button>
          </form>

          <div className="overflow-x-auto">
            <MembershipCard ref={ref} name={f.name} city={f.city} reqId={reqId} joined={joined} reason={f.reason} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPage;
