// MOCK DATA: replaced by contract reads in stage 5.
export type Rarity = "Common" | "Rare" | "Epic" | "Legendary";
export const rarityColor: Record<Rarity, string> = { Common: "text-slate-300 border-slate-500", Rare: "text-sky-300 border-sky-500", Epic: "text-neon border-neon", Legendary: "text-amber-300 border-amber-400" };
export const power: Record<Rarity, number> = { Common: 10, Rare: 25, Epic: 60, Legendary: 150 };
export const tiers: { r: Rarity; supply: number; left: number }[] = [
  { r: "Common", supply: 6000, left: 5120 }, { r: "Rare", supply: 3000, left: 2610 },
  { r: "Epic", supply: 900, left: 801 }, { r: "Legendary", supply: 100, left: 94 }];
export const nfts = [
  { id: 101, r: "Common" as Rarity, active: true }, { id: 245, r: "Rare" as Rarity, active: true },
  { id: 512, r: "Epic" as Rarity, active: true }, { id: 777, r: "Legendary" as Rarity, active: false },
  { id: 1034, r: "Common" as Rarity, active: false }];
export const user = { addr: "0x71C7...9a3F", pending: 128.4, claimed: 2310.75, streak: 6, rank: 42, points: 1840 };
export const mintPrice = 0.05;
export const quests = [
  { t: "Daily check-in", k: "Daily", reward: 10, done: true }, { t: "Follow ZeroMiner on X", k: "Social", reward: 25, done: false },
  { t: "Join the community chat", k: "Community", reward: 25, done: false }, { t: "Invite 3 friends", k: "Referral", reward: 100, done: false }];
export const board = [["0x91aB...22cd", 9400, 3210], ["0x3fE1...77b0", 8120, 2890], ["0xaa07...c5d1", 7040, 2400], ["0x71C7...9a3F", 1840, 520]];
export const history = [["Claim", "+64.2 ZMT", "0xabc1...e9"], ["Claim", "+51.0 ZMT", "0xdef2...41"], ["Stake", "NFT #512", "0x7721...0c"]];
