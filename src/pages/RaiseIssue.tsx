import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { CATEGORIES, Category } from "@/data/issues";

const RaiseIssue = () => {
  const [form, setForm] = useState({
    title: "", body: "", category: "Other" as Category,
    severity: 6, city: "", state: "", anonymous: false,
  });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("tcjp_issues") || "[]");
    stored.unshift({ ...form, date: new Date().toISOString().slice(0,10), id: `u${Date.now()}` });
    localStorage.setItem("tcjp_issues", JSON.stringify(stored));
    setDone(true);
    toast.success("Issue filed with the swarm.");
  };

  return (
    <>
      <SEO title="Raise an Issue" description="Tell the swarm what is broken in your city. Water, power, judiciary, employment, media — name it, rank it, and file it for the record." path="/voice/raise" />
      <SectionLabel
        label="Voice · File a complaint"
        title="Raise an"
        emphasis="issue."
        description="One issue, one paragraph, one location. The swarm reads everything. The swarm ranks everything."
      />
      <div className="border-b border-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          {done ? (
            <div className="border border-ink p-10 text-center">
              <p className="font-condensed text-xs text-gold mb-3">FILED</p>
              <h2 className="font-display text-4xl mb-3">Logged with the swarm.</h2>
              <p className="text-ink/70 mb-6">It will appear on the Voice feed once moderation clears it. Probably tonight. Possibly never. Definitely faster than the municipal helpline.</p>
              <Link to="/voice" className="font-condensed text-sm px-6 py-4 border border-ink hover:bg-ink hover:text-paper inline-block">SEE ALL ISSUES →</Link>
            </div>
          ) : (
            <form onSubmit={submit} className="border border-ink bg-paper">
              <div className="border-b border-ink p-6">
                <label className="font-condensed text-[10px] text-ink/60 block mb-2">Title (one sentence)</label>
                <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="What is broken, in eight words or less." className="w-full bg-transparent outline-none font-display text-xl placeholder:text-ink/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-ink">
                <div className="border-r border-ink p-6">
                  <label className="font-condensed text-[10px] text-ink/60 block mb-2">Category</label>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as Category })} className="w-full bg-transparent outline-none font-display text-lg border-b border-ink/30 pb-1">
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="p-6">
                  <label className="font-condensed text-[10px] text-ink/60 block mb-2">Severity · {form.severity}/10</label>
                  <input type="range" min={1} max={10} value={form.severity} onChange={(e) => setForm({ ...form, severity: +e.target.value })} className="w-full accent-[hsl(20_75%_45%)]" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-ink">
                <div className="border-r border-ink p-6">
                  <label className="font-condensed text-[10px] text-ink/60 block mb-2">City</label>
                  <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="e.g. Lucknow" className="w-full bg-transparent outline-none font-display text-lg" />
                </div>
                <div className="p-6">
                  <label className="font-condensed text-[10px] text-ink/60 block mb-2">State</label>
                  <input required value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} placeholder="UP" className="w-full bg-transparent outline-none font-display text-lg" />
                </div>
              </div>
              <div className="border-b border-ink p-6">
                <label className="font-condensed text-[10px] text-ink/60 block mb-2">Describe it (max 600 chars)</label>
                <textarea required maxLength={600} rows={5} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} placeholder="What happened. When. Who is affected. Skip the rhetoric — we have plenty." className="w-full bg-transparent outline-none text-base resize-none" />
              </div>
              <label className="flex items-center gap-3 p-6 border-b border-ink cursor-pointer">
                <input type="checkbox" checked={form.anonymous} onChange={(e) => setForm({ ...form, anonymous: e.target.checked })} className="w-4 h-4 accent-ink" />
                <span className="text-sm">File this anonymously. (We still ID-tag it for moderation.)</span>
              </label>
              <button type="submit" className="w-full bg-ink text-paper font-condensed text-sm py-5 hover:bg-gold hover:text-ink transition-colors">FILE ISSUE →</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default RaiseIssue;
