import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface N { id?: string; title: string; source: string; url: string | null; summary: string; published_at: string; published: boolean }
const empty: N = { title: "", source: "", url: "", summary: "", published_at: "", published: true };

const AdminNews = () => {
  const [list, setList] = useState<N[]>([]);
  const [editing, setEditing] = useState<N | null>(null);

  const load = async () => {
    const { data } = await supabase.from("news").select("*").order("created_at", { ascending: false });
    setList((data as N[]) ?? []);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing || !editing.title) return;
    const { error } = editing.id
      ? await supabase.from("news").update(editing).eq("id", editing.id)
      : await supabase.from("news").insert(editing);
    if (error) { toast.error(error.message); return; }
    setEditing(null); load();
  };
  const remove = async (id: string) => { if (!confirm("Delete?")) return; await supabase.from("news").delete().eq("id", id); load(); };

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="font-display text-3xl">News</h1>
        <button onClick={() => setEditing({ ...empty })} className="font-condensed text-xs px-4 py-2 border border-ink">+ NEW</button>
      </div>
      {editing && (
        <div className="border border-ink p-5 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input className="inp sm:col-span-2" placeholder="Title" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
          <input className="inp" placeholder="Source" value={editing.source} onChange={(e) => setEditing({ ...editing, source: e.target.value })} />
          <input className="inp" placeholder="Date (text)" value={editing.published_at} onChange={(e) => setEditing({ ...editing, published_at: e.target.value })} />
          <input className="inp sm:col-span-2" placeholder="URL" value={editing.url ?? ""} onChange={(e) => setEditing({ ...editing, url: e.target.value })} />
          <textarea className="inp sm:col-span-2 h-24" placeholder="Summary" value={editing.summary} onChange={(e) => setEditing({ ...editing, summary: e.target.value })} />
          <label className="font-condensed text-sm flex items-center gap-2"><input type="checkbox" checked={editing.published} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} /> published</label>
          <div className="sm:col-span-2 flex gap-2">
            <button onClick={save} className="font-condensed text-xs px-5 py-2 bg-ink text-paper">SAVE</button>
            <button onClick={() => setEditing(null)} className="font-condensed text-xs px-5 py-2 border border-ink">CANCEL</button>
          </div>
        </div>
      )}
      <ul className="border border-ink divide-y divide-ink">
        {list.map((n) => (
          <li key={n.id} className="p-4 flex justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-base truncate">{n.title}</p>
              <p className="font-condensed text-[11px] text-ink/60">{n.source} · {n.published_at}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => setEditing(n)} className="font-condensed text-[11px] px-3 py-1.5 border border-ink">EDIT</button>
              <button onClick={() => remove(n.id!)} className="font-condensed text-[11px] px-3 py-1.5 border border-ink">DEL</button>
            </div>
          </li>
        ))}
        {list.length === 0 && <li className="p-6 text-sm text-ink/60">No news yet.</li>}
      </ul>
      <style>{`.inp{border:1px solid #1f1b1a;background:#f1ede5;padding:.5rem .75rem;font-size:.875rem}`}</style>
    </div>
  );
};

export default AdminNews;
