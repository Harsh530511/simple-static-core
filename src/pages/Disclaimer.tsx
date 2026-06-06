import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";

const Disclaimer = () => (
  <>
    <SEO
      title="Disclaimer"
      description="Where the satire ends and the sincerity begins. The Cockroach Janta Party is a satirical political and cultural movement — read the line between the two."
      path="/disclaimer"
    />
    <SectionLabel label="Fine Print" title="A work of" emphasis="satire." />
    <div className="border-b border-ink">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-6 text-base sm:text-lg leading-relaxed text-ink/85">
        <p>
          The Cockroach Janta Party (TCJP) is presented as a political and satirical movement. It is
          not, at the time of writing, a political party registered with the Election Commission of
          India.
        </p>
        <p>
          The aesthetic, the format, and the five demands on the manifesto are sincere. The
          organisational claims — the rally attendance, the live member ticker, the cabinet
          appointments — are deliberately self-mocking, in the long tradition of political satire.
        </p>
        <p>
          Names of public institutions and individuals are used in good faith for the purposes of
          commentary and critique. No endorsement, affiliation, or partnership is implied or claimed.
        </p>
        <p>
          If you are a litigator, a regulator, or a particularly enthusiastic reader looking for
          something to be offended by — write to us first. We answer email.
        </p>
      </div>
    </div>
  </>
);

export default Disclaimer;
