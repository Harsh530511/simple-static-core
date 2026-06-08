import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Ev {
  id?: string;
  slug: string;
  title: string;
  location: string;
  event_date: string;
  time_range: string;
  theme: string;
  excerpt: string;
  body: string[];
  cover_image: string | null;
  published: boolean;
}

const empty: Ev = { slug: "", title: "", location: "", event_date: "", time_range: "", theme: "", excerpt: "", body: [], cover_image: null, published: true };

const AdminEvents = () => {
  const [list, setList] = useState<Ev[]>([]);
  const [editing, setEditing] = useState<Ev | null>(null);
  const [bodyText, setBodyText] = useState("");

  const load = async () => {
    const { data } = await supabase.from("events").select("*").order("created_at", { ascending: false });
    setList((data as Ev[]) ?? []);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing) return;
    if (!editing.slug || !editing.title) { toast.error("Slug and title required"); return; }
    const body = bodyText.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
    const payload = { ...editing, body };
    const { error } = editing.id
      ? await supabase.from("events").update(payload).eq("id", editing.id)
      : await supabase.from("events").insert(payload);
    if (error) { toast.error(error.message); return; }
    toast.success("Saved"); setEditing(null); load();
  };
  const remove = async (id: string) => {
    if (!confirm("Delete event?")) return;
    await supabase.from("events").delete().eq("id", id);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl">Events / Protests</h1>
        <button onClick={() => { setEditing({ ...empty }); setBodyText(""); }} className="font-condensed text-xs px-4 py-2 border border-ink hover:bg-ink hover:text-paper">+ NEW</button>
      </div>
      {editing && (
        <div className="border border-ink p-5 mb-8 bg-paper">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <F label="Slug"><input className="inp" value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} /></F>
            <F label="Title" full><input className="inp" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} /></F>
            <F label="Location"><input className="inp" value={editing.location} onChange={(e) => setEditing({ ...editing, location: e.target.value })} /></F>
            <F label="Date"><input className="inp" value={editing.event_date} onChange={(e) => setEditing({ ...editing, event_date: e.target.value })} placeholder="6 June 2026" /></F>
            <F label="Time"><input className="inp" value={editing.time_range} onChange={(e) => setEditing({ ...editing, time_range: e.target.value })} placeholder="10:00 AM – 5:00 PM" /></F>
            <F label="Theme"><input className="inp" value={editing.theme} onChange={(e) => setEditing({ ...editing, theme: e.target.value })} /></F>
            <F label="Cover image URL" full><input className="inp" value={editing.cover_image ?? ""} onChange={(e) => setEditing({ ...editing, cover_image: e.target.value })} /></F>
            <F label="Excerpt" full><textarea className="inp h-20" value={editing.excerpt} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} /></F>
            <F label="Body" full><textarea className="inp h-64" value={bodyText} onChange={(e) => setBodyText(e.target.value)} /></F>
            <F label="Published"><label className="font-condensed text-sm flex items-center gap-2 py-2"><input type="checkbox" checked={editing.published} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} /> visible</label></F>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={save} className="font-condensed text-xs px-5 py-2 bg-ink text-paper">SAVE</button>
            <button onClick={() => setEditing(null)} className="font-condensed text-xs px-5 py-2 border border-ink">CANCEL</button>
          </div>
        </div>
      )}
      <ul className="border border-ink divide-y divide-ink">
        {list.map((e) => (
          <li key={e.id} className="p-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-base truncate">{e.title}</p>
              <p className="font-condensed text-[11px] text-ink/60">{e.event_date} · {e.location}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => { setEditing(e); setBodyText((e.body ?? []).join("\n\n")); }} className="font-condensed text-[11px] px-3 py-1.5 border border-ink">EDIT</button>
              <button onClick={() => remove(e.id!)} className="font-condensed text-[11px] px-3 py-1.5 border border-ink">DEL</button>
            </div>
          </li>
        ))}
        {list.length === 0 && <li className="p-6 text-sm text-ink/60">No events yet.</li>}
      </ul>
      <style>{`.inp{width:100%;border:1px solid #1f1b1a;background:#f1ede5;padding:.5rem .75rem;font-size:.875rem}`}</style>
    </div>
  );
};

const F = ({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) => (
  <label className={`block ${full ? "sm:col-span-2" : ""}`}><span className="font-condensed text-[10px] uppercase text-ink/60 block mb-1">{label}</span>{children}</label>
);

export default AdminEvents;
