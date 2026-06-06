// Simplified India state heatmap data — fictional member counts for satirical map.
export interface StateData {
  code: string;
  name: string;
  members: number;
  // Approximate rectangular cell positions on a 12x14 grid for a stylised heatmap.
  col: number;
  row: number;
  w?: number;
  h?: number;
}

export const STATES: StateData[] = [
  { code: "JK", name: "J&K",            members: 58,  col: 3, row: 0, w: 2 },
  { code: "HP", name: "Himachal",       members: 81,  col: 4, row: 1 },
  { code: "PB", name: "Punjab",         members: 150, col: 3, row: 1 },
  { code: "UK", name: "Uttarakhand",    members: 104, col: 5, row: 1 },
  { code: "HR", name: "Haryana",        members: 264, col: 4, row: 2 },
  { code: "DL", name: "Delhi",          members: 379, col: 5, row: 2 },
  { code: "RJ", name: "Rajasthan",      members: 212, col: 3, row: 3, w: 2, h: 2 },
  { code: "UP", name: "Uttar Pradesh",  members: 393, col: 5, row: 3, w: 2 },
  { code: "BR", name: "Bihar",          members: 175, col: 7, row: 3 },
  { code: "SK", name: "Sikkim",         members: 14,  col: 8, row: 2 },
  { code: "AR", name: "Arunachal",      members: 22,  col: 10,row: 2 },
  { code: "AS", name: "Assam",          members: 167, col: 9, row: 3 },
  { code: "ML", name: "Meghalaya",      members: 31,  col: 9, row: 4 },
  { code: "NL", name: "Nagaland",       members: 18,  col: 10,row: 3 },
  { code: "MN", name: "Manipur",        members: 24,  col: 10,row: 4 },
  { code: "MZ", name: "Mizoram",        members: 19,  col: 9, row: 5 },
  { code: "TR", name: "Tripura",        members: 21,  col: 8, row: 4 },
  { code: "WB", name: "West Bengal",    members: 337, col: 7, row: 4, h: 2 },
  { code: "JH", name: "Jharkhand",      members: 144, col: 6, row: 5 },
  { code: "CG", name: "Chhattisgarh",   members: 162, col: 5, row: 6 },
  { code: "OD", name: "Odisha",         members: 153, col: 6, row: 6 },
  { code: "MP", name: "Madhya Pradesh", members: 239, col: 3, row: 5, w: 2 },
  { code: "GJ", name: "Gujarat",        members: 211, col: 1, row: 5, w: 2, h: 2 },
  { code: "MH", name: "Maharashtra",    members: 292, col: 3, row: 7, w: 3 },
  { code: "TG", name: "Telangana",      members: 162, col: 4, row: 8 },
  { code: "AP", name: "Andhra Pradesh", members: 116, col: 5, row: 9 },
  { code: "KA", name: "Karnataka",      members: 180, col: 3, row: 9, h: 2 },
  { code: "GA", name: "Goa",            members: 12,  col: 2, row: 9 },
  { code: "KL", name: "Kerala",         members: 153, col: 3, row: 11 },
  { code: "TN", name: "Tamil Nadu",     members: 128, col: 4, row: 11, w: 2 },
  { code: "AN", name: "Andaman",        members: 7,   col: 8, row: 10 },
];

export const TOP_CITIES = [
  { rank: "01", state: "Delhi", city: "Delhi", count: 379 },
  { rank: "02", state: "West Bengal", city: "Kolkata", count: 337 },
  { rank: "03", state: "Maharashtra", city: "Mumbai", count: 236 },
  { rank: "04", state: "Karnataka", city: "Bengaluru", count: 180 },
  { rank: "05", state: "Maharashtra", city: "Pune", count: 177 },
  { rank: "06", state: "Telangana", city: "Hyderabad", count: 162 },
  { rank: "07", state: "Tamil Nadu", city: "Chennai", count: 128 },
  { rank: "08", state: "Uttar Pradesh", city: "Lucknow", count: 104 },
  { rank: "09", state: "Rajasthan", city: "Jaipur", count: 54 },
  { rank: "10", state: "Bihar", city: "Patna", count: 54 },
  { rank: "11", state: "Haryana", city: "Gurugram", count: 52 },
  { rank: "12", state: "Gujarat", city: "Ahmedabad", count: 51 },
];
