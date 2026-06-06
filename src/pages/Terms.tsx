import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";

const Terms = () => (
  <>
    <SEO title="Terms of Use" description="The terms of using The Cockroach Janta Party’s website, manifesto, and assets. Short, plain, and as friendly as legal can be." path="/terms" />
    <SectionLabel label="Legal · Terms" title="Terms of" emphasis="use." description="The rules of using this site, in plain language. Where the law requires precision, we keep it short anyway." />
    <div className="border-b border-ink">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16 text-base sm:text-lg leading-relaxed text-ink/85 space-y-8">
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Who we are</h2>
          <p>This site is operated by the informal collective writing under the byline of The Cockroach Janta Party. No registered entity, no salaried staff, no investor.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Acceptable use</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Don’t use this site to incite violence, harass individuals, or spread disinformation.</li>
            <li>Don’t scrape the issues feed to build a profile of anyone, including yourself.</li>
            <li>Don’t impersonate party members in submissions, comments, or press emails.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Editorial reuse</h2>
          <p>The manifesto text, gallery posters, and quotes are available for editorial reuse with attribution to The Cockroach Janta Party. Commercial reuse — merchandise, sponsored content, AI training corpora — requires written permission.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">User submissions</h2>
          <p>By filing an issue or member application, you grant us a non-exclusive, royalty-free licence to display, edit for clarity, and archive the submission. You retain the underlying right. You can ask for removal at any time.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Liability</h2>
          <p>This site is provided as-is. We do not guarantee uptime, the accuracy of user submissions, or the future of Indian politics. Use at your own risk; the risk is mostly emotional.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Changes</h2>
          <p>If we change these terms materially, we will note the change on this page with a dated entry. The latest version is always the one that governs.</p>
        </section>
      </div>
    </div>
  </>
);

export default Terms;
