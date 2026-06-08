import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import SEO from "@/components/cjp/SEO";

const LINKS = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/articles", label: "Articles" },
  { to: "/admin/events", label: "Events" },
  { to: "/admin/quotes", label: "Quotes" },
  { to: "/admin/news", label: "News" },
  { to: "/admin/contacts", label: "Inbox" },
];

const AdminLayout = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <SEO title="Admin" description="TCJP content administration." path="/admin" />
      <div className="border-b border-ink min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
          <aside className="border border-ink bg-paper p-5 lg:sticky lg:top-28 lg:self-start">
            <p className="font-condensed text-[10px] text-ink/60 mb-2">Signed in as</p>
            <p className="font-display text-sm break-all mb-6">{user?.email}</p>
            <nav className="flex flex-col gap-1 font-condensed text-sm">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `px-3 py-2 border border-transparent ${isActive ? "bg-ink text-paper" : "hover:border-ink"}`
                  }
                >
                  {l.label.toUpperCase()}
                </NavLink>
              ))}
            </nav>
            <button
              onClick={async () => { await signOut(); navigate("/"); }}
              className="mt-6 w-full font-condensed text-xs px-3 py-2 border border-ink hover:bg-ink hover:text-paper"
            >
              SIGN OUT
            </button>
          </aside>
          <main className="border border-ink bg-paper p-6 sm:p-8 min-h-[60vh]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
