import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Article {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  read_time: string;
  published: boolean;
}

const empty: Article = { slug: "", title: "", excerpt: "", body: [], date: "", read_time: "", published: true };

const AdminArticles = () => {
  const [list, setList] = useState<Article[]>([]);
  const [editing, setEditing] = useState<Article | null>(null);
  const [bodyText, setBodyText] = useState("");

  const load = async () => {
    const { data } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    setList((data as Article[]) ?? []);
  };

  useEffect(() => { load(); }, []);

  const startEdit = (a: Article) => {
    setEditing(a);
    setBodyText((a.body ?? []).join("\n\n"));
  };

  const startNew = () => { setEditing({ ...empty }); setBodyText(""); };

  const save = async () => {
    if (!editing) return;
    if (!editing.slug || !editing.title) { toast.error("Slug and title required"); return; }
    const body = bodyText.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
    const payload = { ...editing, body };
    const { error } = editing.id
      ? await supabase.from("articles").update(payload).eq("id", editing.id)
      : await supabase.from("articles").insert(payload);
    if (error) { toast.error(error.message); return; }
    toast.success("Saved");
    setEditing(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete article?")) return;
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    toast.success("Deleted");
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl">Articles</h1>
        <button onClick={startNew} className="font-condensed text-xs px-4 py-2 border border-ink hover:bg-ink hover:text-paper">+ NEW</button>
      </div>

      {editing && (
        <div className="border border-ink p-5 mb-8 bg-paper">
          <h2 className="font-display text-xl mb-4">{editing.id ? "Edit" : "New"} article</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Slug"><input className="inp" value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} /></Field>
            <Field label="Date"><input className="inp" value={editing.date} onChange={(e) => setEditing({ ...editing, date: e.target.value })} placeholder="23 May 2026" /></Field>
            <Field label="Title" full><input className="inp" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} /></Field>
            <Field label="Read time"><input className="inp" value={editing.read_time} onChange={(e) => setEditing({ ...editing, read_time: e.target.value })} placeholder="5 min read" /></Field>
            <Field label="Published">
              <label className="font-condensed text-sm flex items-center gap-2 py-2"><input type="checkbox" checked={editing.published} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} /> visible</label>
            </Field>
            <Field label="Excerpt" full><textarea className="inp h-20" value={editing.excerpt} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} /></Field>
            <Field label="Body (separate paragraphs with blank line)" full><textarea className="inp h-64" value={bodyText} onChange={(e) => setBodyText(e.target.value)} /></Field>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={save} className="font-condensed text-xs px-5 py-2 bg-ink text-paper hover:bg-gold hover:text-ink">SAVE</button>
            <button onClick={() => setEditing(null)} className="font-condensed text-xs px-5 py-2 border border-ink">CANCEL</button>
          </div>
        </div>
      )}

      <ul className="border border-ink divide-y divide-ink">
        {list.map((a) => (
          <li key={a.id} className="p-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-base truncate">{a.title}</p>
              <p className="font-condensed text-[11px] text-ink/60">/{a.slug} · {a.date} · {a.published ? "published" : "draft"}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => startEdit(a)} className="font-condensed text-[11px] px-3 py-1.5 border border-ink hover:bg-ink hover:text-paper">EDIT</button>
              <button onClick={() => remove(a.id!)} className="font-condensed text-[11px] px-3 py-1.5 border border-ink hover:bg-ink hover:text-paper">DEL</button>
            </div>
          </li>
        ))}
        {list.length === 0 && <li className="p-6 text-sm text-ink/60">No articles yet.</li>}
      </ul>
      <style>{`.inp{width:100%;border:1px solid #1f1b1a;background:#f1ede5;padding:.5rem .75rem;font-family:Inter,sans-serif;font-size:.875rem}`}</style>
    </div>
  );
};

const Field = ({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) => (
  <label className={`block ${full ? "sm:col-span-2" : ""}`}>
    <span className="font-condensed text-[10px] text-ink/60 block mb-1 uppercase">{label}</span>
    {children}
  </label>
);

export default AdminArticles;
