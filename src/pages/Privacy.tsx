import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";

const Privacy = () => (
  <>
    <SEO title="Privacy Policy" description="What The Cockroach Janta Party collects, what it doesn’t, and what happens to the things you send us." path="/privacy" />
    <SectionLabel label="Legal · Privacy" title="Privacy" emphasis="Policy." description="What we collect, what we don’t, and what happens to the things you send us. The short version is below; the long one follows." />
    <div className="border-b border-ink">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16 text-base sm:text-lg leading-relaxed text-ink/85 space-y-8">
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">The short version</h2>
          <p>We do not sell your data, share it with advertisers, or use it for targeting. We keep what we need to run the site and reply to you, and we delete the rest on a schedule. We do not use cookies for tracking. There is no “family of products”.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">What we collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Visitor analytics</strong> — anonymous, aggregated, no fingerprinting.</li>
            <li><strong>Hashed IPs</strong> — kept for fraud and abuse limiting only.</li>
            <li><strong>Email</strong> — if you write to us or subscribe to the dispatch.</li>
            <li><strong>Member application</strong> — name, city, and the reason you wrote.</li>
            <li><strong>Issue submissions</strong> — title, body, location, optional handle.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">What we do not collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>No tracking across other sites. No ad pixels.</li>
            <li>No phone numbers we did not explicitly ask for.</li>
            <li>No biometric data, no Aadhaar, no PAN, no caste.</li>
            <li>No “shadow profiles” of people who did not sign up.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Retention &amp; deletion</h2>
          <p>Analytics are deleted on a thirty-day rolling basis. Email and member data are kept while the relationship is active and deleted within fourteen days of a removal request. Write to <a href="mailto:privacy@tcjp.in" className="underline">privacy@tcjp.in</a> with the word DELETE in the subject line.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Children &amp; minors</h2>
          <p>This site is not designed for people below the age of significant consent. If a minor application is identified, we delete it on detection.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Legal basis (DPDPA / GDPR)</h2>
          <p>You may request access, correction, deletion, and portability of your data. Email <a href="mailto:privacy@tcjp.in" className="underline">privacy@tcjp.in</a> with the word PRIVACY in the subject line and we will respond within fifteen working days.</p>
        </section>
      </div>
    </div>
  </>
);

export default Privacy;
