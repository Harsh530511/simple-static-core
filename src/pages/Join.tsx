import { useState } from "react";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { toast } from "sonner";

const Join = () => {
  const [form, setForm] = useState({ name: "", email: "", city: "", reason: "" });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    toast.success("Application filed. Welcome to the swarm.");
  };

  return (
    <>
      <SEO
        title="Join the Party"
        description="Membership is free, lifelong, and revocable only by you. No fees, no selfies, no missed-call registration. File an application to join The Cockroach Janta Party."
        path="/join"
      />
      <SectionLabel
        label="Membership"
        title="File an"
        emphasis="application."
        description="No fees. No selfies. No 'missed call to register'. Membership is lifelong and only you can revoke it."
      />
      <div className="border-b border-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          {done ? (
            <div className="border border-ink p-10 text-center">
              <div className="font-condensed text-xs text-gold mb-3">FILED</div>
              <h2 className="font-display text-4xl mb-3">Welcome to the swarm.</h2>
              <p className="text-ink/70">A confirmation will arrive in your inbox. Probably. Eventually.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="border border-ink bg-paper">
              {[
                { k: "name", label: "Full name", placeholder: "Your name", type: "text" },
                { k: "email", label: "Email", placeholder: "you@example.in", type: "email" },
                { k: "city", label: "City, State", placeholder: "e.g. Lucknow, UP", type: "text" },
              ].map((f) => (
                <div key={f.k} className="border-b border-ink p-6">
                  <label className="font-condensed text-[10px] text-ink/60 block mb-2">{f.label}</label>
                  <input
                    required
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.k as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="w-full bg-transparent outline-none font-display text-xl placeholder:text-ink/30"
                  />
                </div>
              ))}
              <div className="border-b border-ink p-6">
                <label className="font-condensed text-[10px] text-ink/60 block mb-2">
                  Why are you joining? (optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Rant, retweet, or resentment — all welcome."
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="w-full bg-transparent outline-none text-base placeholder:text-ink/30 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink text-paper font-condensed text-sm py-5 hover:bg-gold hover:text-ink transition-colors"
              >
                FILE MY APPLICATION →
              </button>
            </form>
          )}
          <p className="mt-6 text-center text-sm text-ink/60">
            Join 21,469+ cockroaches · 6,924 joined this week.
          </p>
        </div>
      </div>
    </>
  );
};

export default Join;
