import SectionLabel from "./SectionLabel";

const Vision = () => (
  <section id="vision">
    <SectionLabel label="Chapter One" title="Our Movement's" emphasis="Vision." />
    <div className="border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="font-condensed text-xs text-ink/60 mb-4">01 · The Vision</p>
          <p className="text-lg sm:text-xl leading-relaxed text-ink/85">
            We are not here to set up another acronym, another committee, or another scheme named after
            someone's grandfather. We are here because a country was promised to a generation and
            quietly handed to someone else. We would like it back, with receipts.
          </p>
        </div>
        <div>
          <p className="font-condensed text-xs text-ink/60 mb-4">02 · The Mission</p>
          <p className="text-lg sm:text-xl leading-relaxed text-ink/85">
            Build a party for a generation raised on promises, notifications, and low battery warnings.
            Overqualified. Underpaid. Politically frustrated. Financially confused. The rest, as the
            disclaimer reminds you, is satire.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Vision;
