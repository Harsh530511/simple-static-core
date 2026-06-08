import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface M { id: string; name: string; email: string; message: string; handled: boolean; created_at: string }

const AdminContacts = () => {
  const [list, setList] = useState<M[]>([]);
  const load = async () => {
    const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    setList((data as M[]) ?? []);
  };
  useEffect(() => { load(); }, []);

  const toggle = async (m: M) => {
    await supabase.from("contact_messages").update({ handled: !m.handled }).eq("id", m.id);
    load();
  };
  const remove = async (id: string) => { if (!confirm("Delete message?")) return; await supabase.from("contact_messages").delete().eq("id", id); load(); };

  return (
    <div>
      <h1 className="font-display text-3xl mb-6">Inbox</h1>
      <ul className="border border-ink divide-y divide-ink">
        {list.map((m) => (
          <li key={m.id} className={`p-5 ${m.handled ? "opacity-60" : ""}`}>
            <div className="flex justify-between gap-3 mb-2">
              <div>
                <p className="font-display text-base">{m.name} <span className="font-condensed text-[11px] text-ink/60">&lt;{m.email}&gt;</span></p>
                <p className="font-condensed text-[10px] text-ink/50">{new Date(m.created_at).toLocaleString()}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => toggle(m)} className="font-condensed text-[11px] px-3 py-1.5 border border-ink">{m.handled ? "REOPEN" : "MARK DONE"}</button>
                <button onClick={() => remove(m.id)} className="font-condensed text-[11px] px-3 py-1.5 border border-ink">DEL</button>
              </div>
            </div>
            <p className="text-sm text-ink/85 whitespace-pre-wrap">{m.message}</p>
          </li>
        ))}
        {list.length === 0 && <li className="p-6 text-sm text-ink/60">No messages yet.</li>}
      </ul>
    </div>
  );
};

export default AdminContacts;
