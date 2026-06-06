import { useState } from "react";
import SectionLabel from "./SectionLabel";

const FAQS = [
  {
    q: "What is The Cockroach Janta Party?",
    a: "TCJP is a satirical political movement that reclaims an insult thrown at young, unemployed and politically vocal Indians, and pairs it with five non-negotiable demands on judicial reform, electoral integrity, women's representation, media monopoly, and defection.",
  },
  {
    q: "Why is it called the Cockroach Janta Party?",
    a: "Because the slur lands hardest when it is most accurate. Reclaiming an insult — as Quakers, Suffragettes and others have done — is a recurring pattern in durable political movements.",
  },
  {
    q: "What are the five demands?",
    a: "No post-retirement seats for retiring senior judges; criminal liability for unlawful vote deletion; fifty per cent women's representation without expanding seats; break-up of broadcast monopolies; a twenty-year bar on defectors.",
  },
  {
    q: "How can I join?",
    a: "File an application on the Join page. Membership is free, lifelong, and revocable only by you. Four standards: overqualified, politically frustrated, civic anger, financially confused. Honesty preferred over completeness.",
  },
  {
    q: "Is this a registered political party?",
    a: "Presented as a political and satirical movement, not currently registered with the Election Commission. The aesthetic, manifesto and demands are sincere; the organisational claims are deliberately self-mocking. See the disclaimer.",
  },
  {
    q: "Is membership free?",
    a: "Yes. No fees. No selfies. No 'missed call to register'. Membership is lifelong and only the member can revoke it.",
  },
  {
    q: "Where is the headquarters?",
    a: "Wherever the wifi works. The party has no salaried staff, no office, and no fundraising arm. Press and member mail goes through email.",
  },
  {
    q: "Who runs it?",
    a: "At present the party speaks under a collective byline. Written responses to journalists are routed through the press address.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq">
      <SectionLabel
        label="Frequently Asked"
        title="About the"
        emphasis="party."
        description="The eight questions we get asked most often, in roughly the order Google asks them."
      />
      <div className="border-b border-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-ink last:border-b-0">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                >
                  <span className="font-display text-lg sm:text-2xl leading-tight pr-4">{f.q}</span>
                  <span className="font-condensed text-3xl text-gold shrink-0 leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-8 -mt-2">
                    <p className="text-base text-ink/75 leading-relaxed max-w-3xl">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
