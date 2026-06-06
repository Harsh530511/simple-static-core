import SEO from "@/components/cjp/SEO";
import Hero from "@/components/cjp/Hero";
import Marquee from "@/components/cjp/Marquee";
import Vision from "@/components/cjp/Vision";
import Manifesto from "@/components/cjp/Manifesto";
import Faq from "@/components/cjp/Faq";
import Journal from "@/components/cjp/Journal";
import Eligibility from "@/components/cjp/Eligibility";

const BREAKING = [
  "BREAKING · TCJP rally swells past Sansad Bhavan",
  "EXIT POLLS · Burnt-Out Youth bloc surges +14",
  "EXCLUSIVE · 'We are not bugs, we are voters' — leader",
  "TRENDING · #CockroachJantaParty top all India",
  "MARKETS · Godi-media shares slip on licence review",
  "WEATHER · Smoke advisory near Jantar Mantar",
];

const SOLIDARITY = [
  "Together We Survive",
  "Stronger Together",
  "Unity · Resilience · Progress",
  "You Cannot Squash A Movement",
];

const Home = () => (
  <>
    <SEO
      title="Voice of the Burnt-Out Youth"
      description="The Cockroach Janta Party — a satirical Indian political movement. Five demands. Zero sponsors. One stubborn swarm. Est. 2026."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "The Cockroach Janta Party",
        url: "/",
      }}
    />
    <Hero />
    <Marquee items={BREAKING} separator="●" variant="ink" fast />
    <Marquee items={SOLIDARITY} variant="paper" />
    <Vision />
    <Manifesto />
    <Faq />
    <Journal />
    <Eligibility />
  </>
);

export default Home;
