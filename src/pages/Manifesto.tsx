import SEO from "@/components/cjp/SEO";
import ManifestoSection from "@/components/cjp/Manifesto";
import SectionLabel from "@/components/cjp/SectionLabel";

const ManifestoPage = () => (
  <>
    <SEO
      title="The Manifesto — Five Demands"
      description="The five non-negotiable demands of The Cockroach Janta Party: judicial reform, electoral integrity, women's representation, media plurality, and a defection bar."
      path="/manifesto"
    />
    <SectionLabel
      label="Volume 1, Edition 1"
      title="The"
      emphasis="Manifesto."
      description="Five demands. No edits. Read it once. Read it twice. Then send it to someone who needs to read it."
    />
    <ManifestoSection withHeader={false} />
  </>
);

export default ManifestoPage;
