import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/contexts/AuthContext";
import SEO from "@/components/cjp/SEO";
import { toast } from "sonner";

const Auth = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigate(isAdmin ? "/admin" : "/", { replace: true });
    }
  }, [user, isAdmin, loading, navigate]);

  const signInGoogle = async () => {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/admin",
    });
    if (result.error) {
      toast.error("Sign-in failed: " + (result.error.message || "Unknown error"));
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    navigate("/admin", { replace: true });
  };

  return (
    <>
      <SEO title="Admin Sign In" description="Restricted access. Members of The Cockroach Janta Party administration team only." path="/auth" />
      <div className="border-b border-ink min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="border border-ink bg-paper max-w-md w-full p-10">
          <p className="font-condensed text-[11px] text-ink/60 mb-3">Restricted</p>
          <h1 className="font-display text-4xl mb-3">Admin sign in.</h1>
          <p className="text-sm text-ink/70 mb-8">
            Editorial &amp; CMS access only. First Google sign-in claims the admin seat; subsequent sign-ins are regular accounts.
          </p>
          <button
            onClick={signInGoogle}
            disabled={busy}
            className="w-full font-condensed text-sm py-4 border border-ink bg-ink text-paper hover:bg-gold hover:text-ink hover:border-gold transition-colors disabled:opacity-50"
          >
            {busy ? "REDIRECTING…" : "CONTINUE WITH GOOGLE →"}
          </button>
          <p className="font-condensed text-[10px] text-ink/50 mt-6 leading-relaxed">
            By signing in you agree that we may store your Google profile name, email and avatar for editorial attribution.
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
