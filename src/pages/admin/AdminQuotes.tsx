import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Q { id?: string; text: string; author: string; published: boolean }

const AdminQuotes = () => {
  const [list, setList] = useState<Q[]>([]);
  const [draft, setDraft] = useState<Q>({ text: "", author: "Anonymous", published: true });

  const load = async () => {
    const { data } = await supabase.from("quotes").select("*").order("created_at", { ascending: false });
    setList((data as Q[]) ?? []);
  };
  useEffect(() => { load(); }, []);

  const add = async () => {
    if (!draft.text.trim()) return;
    const { error } = await supabase.from("quotes").insert(draft);
    if (error) { toast.error(error.message); return; }
    setDraft({ text: "", author: "Anonymous", published: true });
    load();
  };

  const togglePub = async (q: Q) => {
    await supabase.from("quotes").update({ published: !q.published }).eq("id", q.id!);
    load();
  };
  const remove = async (id: string) => {
    if (!confirm("Delete?")) return;
    await supabase.from("quotes").delete().eq("id", id);
    load();
  };

  return (
    <div>
      <h1 className="font-display text-3xl mb-6">Quotes</h1>
      <div className="border border-ink p-5 mb-8 bg-paper">
        <textarea className="w-full border border-ink bg-paper p-3 text-sm h-24" placeholder="Quote text" value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} />
        <div className="flex gap-2 mt-3">
          <input className="flex-1 border border-ink bg-paper p-2 text-sm" placeholder="Author" value={draft.author} onChange={(e) => setDraft({ ...draft, author: e.target.value })} />
          <button onClick={add} className="font-condensed text-xs px-5 py-2 bg-ink text-paper">ADD QUOTE</button>
        </div>
      </div>
      <ul className="border border-ink divide-y divide-ink">
        {list.map((q) => (
          <li key={q.id} className="p-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-base">"{q.text}"</p>
              <p className="font-condensed text-[11px] text-ink/60 mt-1">{q.author} · {q.published ? "published" : "draft"}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => togglePub(q)} className="font-condensed text-[11px] px-3 py-1.5 border border-ink">{q.published ? "HIDE" : "PUBLISH"}</button>
              <button onClick={() => remove(q.id!)} className="font-condensed text-[11px] px-3 py-1.5 border border-ink">DEL</button>
            </div>
          </li>
        ))}
        {list.length === 0 && <li className="p-6 text-sm text-ink/60">No quotes yet.</li>}
      </ul>
    </div>
  );
};

export default AdminQuotes;
