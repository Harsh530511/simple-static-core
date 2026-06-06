export interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "tareekh-pe-tareekh-indian-judiciary",
    title: "Tareekh Pe Tareekh: The Judiciary's Business Model",
    date: "23 May 2026",
    readTime: "6 min read",
    excerpt:
      "Five crore pending cases. One infinite adjournment. A field report from inside the world's longest queue, and a plan to shorten it.",
    body: [
      "There is a phrase every Indian litigant learns before they learn the name of their own lawyer: tareekh pe tareekh. Another date. Another adjournment. Another quiet shuffle in the registry.",
      "The official story is that the judiciary is overburdened. The honest story is that delay has become a feature, not a bug — a quiet rent collected on grief, property, and time.",
      "TCJP's position is that delay is a policy choice. End post-retirement reward seats. Publish judge-level disposal data. Cap adjournments. Treat the docket as a public ledger, not a private timetable.",
      "We are not asking for revolution from the bench. We are asking for the clock back.",
    ],
  },
  {
    slug: "the-quiet-rights-human-rights-india",
    title: "The Quiet Rights: Dignity, Shelter, and the Right to Fail Without Shame",
    date: "22 May 2026",
    readTime: "5 min read",
    excerpt:
      "India has loud rights and quiet ones. The loud ones get recited in court. The quiet ones are the ones we are slowly losing.",
    body: [
      "Some rights are loud. They have logos, hashtags, and televised hearings. Others are quiet — dignity, identity, the ability to be visibly poor without being treated as a criminal.",
      "This essay is about the quiet rights. The ones nobody clips for prime time. The ones that, when removed, do not produce a press release.",
      "We argue that a working democracy is measured less by its loud freedoms and more by the boredom of its quiet ones. When you can fail, change jobs, change cities, change minds without being punished — that is the republic working as designed.",
    ],
  },
  {
    slug: "reclaiming-the-cockroach-as-political-symbol",
    title: "Reclaiming the Cockroach: Why the Insect Is the Insignia",
    date: "20 May 2026",
    readTime: "4 min read",
    excerpt:
      "Tories. Quakers. Suffragettes. Queer. Cockroach. A short history of movements that took the slur and printed it on the letterhead.",
    body: [
      "Every successful political movement has, at some point, eaten an insult and turned it into a flag. Tories were thieves. Quakers shook. Suffragettes were diminutives. Queer was an attack.",
      "The slur lands hardest when it is most accurate, and the response that endures is rarely outrage — it is adoption. You take the word, you spell it correctly, you put it on the masthead.",
      "We picked Cockroach because the people calling us cockroaches were not entirely wrong about the survival part. We have lived through worse. We will live through this.",
    ],
  },
  {
    slug: "the-five-demands-explained",
    title: "The Five Demands, Explained",
    date: "18 May 2026",
    readTime: "8 min read",
    excerpt:
      "A walkthrough of each demand on the manifesto — what it means, what it would change, and why it has to be exactly five.",
    body: [
      "A short manifesto is harder to write than a long one. Long manifestos are written by people who want credit. Short ones are written by people who want change.",
      "Demand one is about post-retirement integrity. Two is about electoral integrity. Three is about who actually gets to govern. Four is about who controls the megaphone. Five is about loyalty as a political product.",
      "Five demands. No edits. We will explain each at length here, but the headline version is enough to start arguments — which is exactly what a manifesto is for.",
    ],
  },
  {
    slug: "the-great-emi-republic",
    title: "The Great EMI Republic",
    date: "12 May 2026",
    readTime: "4 min read",
    excerpt:
      "How a generation learned to swipe right on debt while being told it was financial discipline.",
    body: [
      "Somewhere in the last decade, a country with one of the highest savings rates in the world was sold the idea that paying in instalments was the same as owning.",
      "It is not. It is a polite, app-shaped form of indenture. The phone is yours after twenty-four months — unless the job goes first, in which case the phone is the bank's and the credit score is a souvenir.",
      "TCJP's position is small: financial products marketed to young people must say the quiet part loud. Interest in bold. Default consequences in bold. Total cost in bold. The romance can stay in the brochure.",
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
