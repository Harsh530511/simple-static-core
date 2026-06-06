import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";
import Vision from "@/components/cjp/Vision";

const VisionPage = () => (
  <>
    <SEO
      title="Our Vision"
      description="Why The Cockroach Janta Party exists, what it stands for, and what it refuses to apologise for. A short statement of purpose for a long, stubborn movement."
      path="/vision"
    />
    <SectionLabel
      label="Chapter One"
      title="What we"
      emphasis="stand for."
      description="A short statement of purpose. Long enough to mean something, short enough to fit on a poster."
    />
    <Vision />
    <div className="border-b border-ink">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-6 text-base sm:text-lg leading-relaxed text-ink/85">
        <p>We are a movement of people who got tired of being addressed in slogans and decided to write our own. We are not a party of grievances; we are a party of receipts.</p>
        <p>We believe a country is measured less by its loud freedoms and more by the boredom of its quiet ones — the right to change a job, change a city, change your mind, fail in public, and not be punished for any of it.</p>
        <p>We are unembarrassed by long words. We are unembarrassed by short demands. We are unembarrassed by the suggestion that politics, done correctly, should make some people uncomfortable.</p>
        <p>The rest of the work is on the manifesto. Five demands. No edits.</p>
      </div>
    </div>
  </>
);

export default VisionPage;
