import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  jsonLd?: object;
}

const SITE = "The Cockroach Janta Party";
const ORIGIN = typeof window !== "undefined" ? window.location.origin : "";

const SEO = ({ title, description, path, type = "website", jsonLd }: Props) => {
  const fullTitle = `${title} — ${SITE}`;
  const url = `${ORIGIN}${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default SEO;
