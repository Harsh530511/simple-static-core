export interface Member {
  id: string;
  name: string;
  city: string;
  state: string;
  reqId: string;
  joined: string;
  reason: string;
  tag: "Founding" | "Early" | "Rising" | "Loud";
}

export const MEMBERS: Member[] = [
  { id: "ak", name: "Akhilesh Warsi", city: "Bhopal", state: "MP", reqId: "REQ / 00001", joined: "12 May 2026", reason: "Because complaining on Twitter started feeling like unpaid labour.", tag: "Founding" },
  { id: "jh", name: "Jhalak", city: "Pune", state: "MH", reqId: "REQ / 00012", joined: "13 May 2026", reason: "Three certificates, two internships, zero callbacks.", tag: "Founding" },
  { id: "abd", name: "Abhijit Das", city: "Kalna", state: "WB", reqId: "REQ / 00037", joined: "13 May 2026", reason: "Family WhatsApp group radicalised me. The other way.", tag: "Founding" },
  { id: "gx", name: "Girish Gawda", city: "Bengaluru", state: "KA", reqId: "REQ / 00104", joined: "14 May 2026", reason: "Rent ate my salary. The party ate my excuses.", tag: "Early" },
  { id: "ar", name: "Anandhan Rajamanikkam", city: "Tirupathur", state: "TN", reqId: "REQ / 00219", joined: "15 May 2026", reason: "Was told I had too many opinions. Tried opinions.", tag: "Early" },
  { id: "aku", name: "Anurag Kumar", city: "Delhi", state: "DL", reqId: "REQ / 00488", joined: "16 May 2026", reason: "Full time job, part time citizen, no time for either.", tag: "Early" },
  { id: "jo", name: "Joseph", city: "Chennai", state: "TN", reqId: "REQ / 01015", joined: "17 May 2026", reason: "Showed up because the venue had charging points.", tag: "Rising" },
  { id: "ahm", name: "Ahtesham Khan", city: "Kolkata", state: "WB", reqId: "REQ / 02238", joined: "18 May 2026", reason: "Civic anger, fully tested, no warranty.", tag: "Rising" },
  { id: "gx2", name: "Gauransh Astrohome", city: "Ghaziabad", state: "UP", reqId: "REQ / 04122", joined: "19 May 2026", reason: "Asked the news anchor a question. Got a verdict.", tag: "Rising" },
  { id: "are", name: "Areeb Mahfooz", city: "Delhi", state: "DL", reqId: "REQ / 06710", joined: "20 May 2026", reason: "Wanted a politics that wasn’t embarrassed by long words.", tag: "Loud" },
  { id: "sh", name: "Shobhit Hardeniya", city: "Gwalior", state: "MP", reqId: "REQ / 09031", joined: "21 May 2026", reason: "EMI alerts arrive faster than payslips. That is the politics.", tag: "Loud" },
  { id: "db", name: "Daksh Banerjee", city: "Kolkata", state: "WB", reqId: "REQ / 11542", joined: "22 May 2026", reason: "If the slur fits, print it on the letterhead.", tag: "Loud" },
];

export const LIVE_TICKER = MEMBERS.map((m) => ({
  initials: m.name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase(),
  name: m.name,
  city: `${m.city.toUpperCase()}, ${m.state}`,
}));
