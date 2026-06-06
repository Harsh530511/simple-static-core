import { Link } from "react-router-dom";
import SectionLabel from "./SectionLabel";

const DEMANDS = [
  {
    n: "01",
    title: "No Rajya Sabha seats as retirement rewards.",
    body: "Post-retirement political appointments for retiring judges of the highest courts will end. Service is not an audition for a seat.",
  },
  {
    n: "02",
    title: "Treat vote deletion as a serious crime.",
    body: "Any unlawful removal of a legitimate vote, in any state under any party, will be prosecuted as a grave offence against citizens.",
  },
  {
    n: "03",
    title: "Fifty per cent for women — without expanding seats.",
    body: "Half of all parliamentary seats and half of the cabinet, without inflating the total. Representation as arithmetic, not ornament.",
  },
  {
    n: "04",
    title: "Break the broadcast monopolies.",
    body: "Concentrated ownership of news by industrial conglomerates will end. Spectrum is a public asset, not a corporate loyalty card.",
  },
  {
    n: "05",
    title: "A twenty-year bar on defectors.",
    body: "Any legislator who defects mid-term sits out the next two decades from any elected or appointed public office. Loyalty is not a transfer market.",
  },
];

const ManifestoSection = ({ withHeader = true }: { withHeader?: boolean }) => (
  <section id="manifesto">
    {withHeader && (
      <SectionLabel
        label="The Five Demands"
        title="The"
        emphasis="Manifesto."
        description="Read it once. Read it twice. Then send it to someone who needs to read it."
      />
    )}

    <div className="border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink">
        {DEMANDS.map((d) => (
          <article key={d.n} className="bg-paper p-8 sm:p-10">
            <div className="flex items-start gap-6">
              <div className="font-display text-6xl text-gold leading-none">{d.n}</div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl leading-tight mb-3">{d.title}</h3>
                <p className="text-sm sm:text-base text-ink/75 leading-relaxed">{d.body}</p>
              </div>
            </div>
          </article>
        ))}
        <div className="bg-ink text-paper p-8 sm:p-10 flex items-center justify-between gap-6">
          <span className="font-display text-2xl sm:text-3xl leading-tight">
            Read the full <span className="font-italic-serif text-gold">explainer.</span>
          </span>
          <Link
            to="/articles/the-five-demands-explained"
            className="font-condensed text-sm text-gold hover:text-paper whitespace-nowrap"
          >
            READ →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ManifestoSection;
