import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/cjp/SEO";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Not Found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="border-b border-ink">
      <SEO title="404 — Page not found" description="This page is not in the archive." path={location.pathname} />
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-24 sm:py-32 text-center">
        <div className="font-display text-9xl text-gold mb-6">404</div>
        <h1 className="font-display text-4xl sm:text-5xl mb-4">
          Not in the <span className="font-italic-serif">archive.</span>
        </h1>
        <p className="text-ink/70 mb-10">This page is unfiled, unfunded, and unaccounted for.</p>
        <Link to="/" className="font-condensed text-sm border border-ink px-6 py-4 hover:bg-ink hover:text-paper">
          ← BACK TO HQ
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
