export type Category =
  | "Water" | "Electricity" | "Police & Law" | "Corruption" | "Education"
  | "Healthcare" | "Employment" | "Environment" | "Transport" | "Housing"
  | "Women Safety" | "Media" | "Judiciary" | "Roads" | "Other";

export interface Issue {
  id: string;
  title: string;
  body: string;
  category: Category;
  severity: number; // 1-10
  city: string;
  state: string;
  author: string;
  authorInitials: string;
  reqId: string;
  date: string;
  up: number;
  down: number;
}

export const CATEGORIES: Category[] = [
  "Roads","Water","Electricity","Police & Law","Corruption","Education",
  "Healthcare","Employment","Environment","Transport","Housing","Women Safety","Media","Judiciary","Other",
];

export const ISSUES: Issue[] = [
  { id: "i1", title: "Clean water is a fundamental right, not a tanker subscription.", body: "Our locality has not seen tap water in eleven days. The municipal helpline rings out. The private tanker arrives on time, every time.", category: "Water", severity: 9, city: "Patna", state: "BR", author: "Rhea M.", authorInitials: "RM", reqId: "REQ / 15193", date: "31 May 2026", up: 412, down: 4 },
  { id: "i2", title: "Months of process. No implementation. Prices change anyway.", body: "Public consultation closed in December. The order arrived in May. The prices it was meant to control had already doubled.", category: "Employment", severity: 6, city: "Lucknow", state: "UP", author: "Aman K.", authorInitials: "AK", reqId: "REQ / 15201", date: "31 May 2026", up: 188, down: 12 },
  { id: "i3", title: "Coaching factories sell rejection by SMS.", body: "Twelve years of school. Two years of Kota. One exam. The rejection arrives as a text message at 3 PM, between a Zomato offer and a missed call.", category: "Education", severity: 8, city: "Surat", state: "GJ", author: "Swara S.", authorInitials: "SS", reqId: "REQ / 15310", date: "31 May 2026", up: 502, down: 7 },
  { id: "i4", title: "Local news has become a press release with music.", body: "Three channels. One owner. Same chyron. The questions that don’t get asked are the news that doesn’t get made.", category: "Media", severity: 8, city: "Balaghat", state: "MP", author: "Shaurya P.", authorInitials: "SP", reqId: "REQ / 15183", date: "31 May 2026", up: 291, down: 11 },
  { id: "i5", title: "R&D spend is a rounding error in the national budget.", body: "Less than 0.7 per cent of GDP. The brains we trained leave. The patents we file embarrass us. The dashboards we build celebrate the same five charts.", category: "Employment", severity: 10, city: "Darjeeling", state: "WB", author: "Poulami G.", authorInitials: "PG", reqId: "REQ / 15071", date: "31 May 2026", up: 163, down: 2 },
  { id: "i6", title: "Street vendors evicted with a notice taped to a tarpaulin.", body: "Hawkers in three markets received seventy-two hours notice. The bulldozers arrived in twelve. The fruit was on the road by sundown.", category: "Judiciary", severity: 8, city: "Kolkata", state: "WB", author: "Rhitika B.", authorInitials: "RB", reqId: "REQ / 15193", date: "30 May 2026", up: 246, down: 9 },
  { id: "i7", title: "Reservation politics keeps the conversation, not the seats.", body: "Every five years a fresh announcement. Every six years a quiet rollback. The seats stay the same. The slogans rotate.", category: "Education", severity: 7, city: "Jaipur", state: "RJ", author: "Vivek T.", authorInitials: "VT", reqId: "REQ / 15044", date: "29 May 2026", up: 134, down: 22 },
  { id: "i8", title: "Justice delayed has been rebranded as justice in progress.", body: "Five crore pending cases. One adjournment scheduled for 2031. The phrase ‘tareekh pe tareekh’ now appears on coffee mugs.", category: "Judiciary", severity: 9, city: "Allahabad", state: "UP", author: "Deepak", authorInitials: "DK", reqId: "REQ / 14990", date: "29 May 2026", up: 377, down: 8 },
  { id: "i9", title: "Electricity for three hours a day is not access. It is a guess.", body: "We have 5G in four towers and zero load-shedding schedules anyone can trust. The villages still light kerosene at 7 PM.", category: "Electricity", severity: 8, city: "Gaya", state: "BR", author: "Rohit P.", authorInitials: "RP", reqId: "REQ / 14882", date: "28 May 2026", up: 219, down: 5 },
  { id: "i10", title: "Highways with toll booths and no shoulders.", body: "Eight-lane expansion. Zero ambulance lanes. The fine for stopping in an emergency is higher than the cost of dying quietly.", category: "Roads", severity: 7, city: "Pune", state: "MH", author: "Neha D.", authorInitials: "ND", reqId: "REQ / 14781", date: "27 May 2026", up: 156, down: 6 },
  { id: "i11", title: "Women’s safety budgets are smaller than the awareness campaigns about them.", body: "The hoardings outnumber the helpline operators. The helpline operators outnumber the convictions.", category: "Women Safety", severity: 10, city: "Hyderabad", state: "TG", author: "Aanya R.", authorInitials: "AR", reqId: "REQ / 14622", date: "26 May 2026", up: 488, down: 3 },
  { id: "i12", title: "Air quality dashboards updated. The air, not so much.", body: "AQI is a daily statistic, a quarterly headline, an annual report. The lungs file a quieter dissent.", category: "Environment", severity: 8, city: "Delhi", state: "DL", author: "Karan V.", authorInitials: "KV", reqId: "REQ / 14555", date: "25 May 2026", up: 274, down: 4 },
];
