export interface NewsItem { id: string; date: string; outlet: string; headline: string; excerpt: string; href?: string; }

export const NEWS: NewsItem[] = [
  { id: "n1", date: "02 Jun 2026", outlet: "The Hatchery Weekly", headline: "A political party with no headquarters, no fees, and an unusually polite footer.", excerpt: "An on-the-ground piece on the TCJP launch event — which, technically, was a group chat." },
  { id: "n2", date: "30 May 2026", outlet: "Off-Record Mag", headline: "Reclaiming the slur: the long history behind a new Indian movement.", excerpt: "How a satirical party reframed an internet insult into an organising principle, and why young readers stuck around." },
  { id: "n3", date: "27 May 2026", outlet: "The Pamphleteer", headline: "Five demands, no chairs: inside the manifesto everyone is screenshotting.", excerpt: "A look at the document driving the conversation — and the design decision to keep it under four hundred words." },
  { id: "n4", date: "22 May 2026", outlet: "Counter Bureau", headline: "Is satire the only honest political product left in the country?", excerpt: "A long read on TCJP, parody candidates abroad, and the surprisingly serious work of being unserious in public." },
  { id: "n5", date: "18 May 2026", outlet: "Late Edition", headline: "The cockroach as a campaign emblem: a brief design appreciation.", excerpt: "On letterpress, restraint, and the case for an ugly mascot doing serious work." },
  { id: "n6", date: "14 May 2026", outlet: "Editorial Tonic", headline: "Why the burnt-out youth aren’t apathetic — they’re running out of patience.", excerpt: "A field report from three cities where TCJP membership filings doubled in a week." },
];
