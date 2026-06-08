import { useState } from "react";
import { z } from "zod";
import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { toast.error(parsed.error.issues[0]?.message ?? "Invalid input"); return; }
    setBusy(true);
    const { name, email, message } = parsed.data;
    const { error } = await supabase.from("contact_messages").insert({ name, email, message });
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Message sent. We read everything.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with The Cockroach Janta Party. Write to us — rants, retweets, resentment, all welcome." path="/contact" />
      <SectionLabel label="Get in touch" title="Connect" emphasis="with us." description="Want to join, volunteer, complain, or send a meme? Write to us. We read everything. We reply to most things." />
      <div className="border-b border-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink border border-ink">
          {[
            { label: "Email", value: "hello@tcjp.in", href: "mailto:hello@tcjp.in" },
            { label: "Press", value: "press@tcjp.in", href: "mailto:press@tcjp.in" },
            { label: "Headquarters", value: "Wherever the wifi works." },
          ].map((c) => (
            <div key={c.label} className="bg-paper p-8">
              <p className="font-condensed text-[10px] text-ink/60 mb-3">{c.label}</p>
              {c.href ? <a href={c.href} className="font-display text-2xl hover:text-gold break-all">{c.value}</a> : <p className="font-display text-2xl">{c.value}</p>}
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 pb-16">
          <form onSubmit={submit} className="border border-ink bg-paper p-8">
            <p className="font-condensed text-[11px] text-ink/60 mb-2">Send a message</p>
            <h3 className="font-display text-3xl mb-6">Drop a line.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required maxLength={200} placeholder="Your name" className="border border-ink bg-paper px-3 py-3 text-sm" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required maxLength={320} type="email" placeholder="Your email" className="border border-ink bg-paper px-3 py-3 text-sm" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea required maxLength={5000} placeholder="Your message" rows={6} className="sm:col-span-2 border border-ink bg-paper px-3 py-3 text-sm" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" disabled={busy} className="mt-5 font-condensed text-sm px-6 py-3 bg-ink text-paper hover:bg-gold hover:text-ink disabled:opacity-50">{busy ? "SENDING…" : "SEND →"}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
