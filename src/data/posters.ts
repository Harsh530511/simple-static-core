export interface Poster {
  id: string;
  no: string;
  category: "Rally" | "Manifesto" | "Membership" | "Poster" | "Heritage" | "Symbol";
  title: string;
  caption: string;
  motif: "stripes" | "fist" | "swarm" | "five" | "march" | "crowd" | "ballot" | "emblem" | "shield" | "torch" | "scroll" | "wheel";
  accent: "red" | "gold" | "ink";
}

export const POSTERS: Poster[] = [
  { id: "p1",  no: "001", category: "Rally",      title: "Stronger Together",      caption: "The first official rally poster. They tried to step on us. We came back.",      motif: "fist",   accent: "red" },
  { id: "p2",  no: "002", category: "Rally",      title: "Action & Movement",      caption: "Bodies on the street, ink on the page, both at once.",                            motif: "stripes",accent: "red" },
  { id: "p3",  no: "003", category: "Poster",     title: "The Recruitment Call",   caption: "Membership is free, lifelong, and revocable only by you.",                       motif: "march",  accent: "red" },
  { id: "p4",  no: "004", category: "Poster",     title: "Voice of the Lazy & Unemployed", caption: "The party slogan, rendered in the typography of the protests that came before.", motif: "torch", accent: "red" },
  { id: "p5",  no: "005", category: "Heritage",   title: "Heritage of the Swarm",  caption: "The lineage: from independence-era pamphlets to today’s unemployed graduates.",  motif: "scroll", accent: "ink" },
  { id: "p6",  no: "006", category: "Rally",      title: "The People’s Banner",    caption: "Inaugural rally · wherever the wifi works.",                                     motif: "crowd",  accent: "red" },
  { id: "p7",  no: "007", category: "Manifesto",  title: "Visualising the Demands",caption: "Five demands. One screen. Send to one person who needs to read them.",          motif: "five",   accent: "gold" },
  { id: "p8",  no: "008", category: "Manifesto",  title: "The Manifesto Plate",    caption: "Non-negotiable. Specific enough to fail at, on purpose.",                        motif: "wheel",  accent: "red" },
  { id: "p9",  no: "009", category: "Poster",     title: "The Demands · Broadsheet",caption: "Read it once. Read it twice. Forward it.",                                      motif: "five",   accent: "gold" },
  { id: "p10", no: "010", category: "Membership", title: "Approved",               caption: "Unemployed. Lazy. Chronically online. Can rant professionally.",                 motif: "emblem", accent: "ink" },
  { id: "p11", no: "011", category: "Membership", title: "Join the Party",         caption: "Free. Lifelong. Revocable only by you.",                                          motif: "shield", accent: "red" },
  { id: "p12", no: "012", category: "Symbol",     title: "The Emblem on the March",caption: "Three flags. Six legs. Infinite patience.",                                       motif: "ballot", accent: "gold" },
];
