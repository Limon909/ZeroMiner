import Link from "next/link";
import { Card, Disclaimer, Mock, Stat, Title } from "@/components/ui";
import { nfts, user } from "@/lib/data";
export default function Page() {
  return (<>
    <Title sub={<>Wallet {user.addr} on BNB Testnet <Mock /></>}>Dashboard</Title>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      <Stat l="NFT balance" v={nfts.length} /><Stat l="Mining status" v={`${nfts.filter(n => n.active).length} active`} />
      <Stat l="Pending rewards" v={`${user.pending} ZMT`} /><Stat l="Total claimed" v={`${user.claimed} ZMT`} />
      <Stat l="Daily streak" v={`${user.streak} days`} /><Stat l="Season rank" v={`#${user.rank}`} />
    </div>
    <Card className="mt-6"><div className="mb-3 font-semibold">Quick links</div>
      <div className="flex flex-wrap gap-2">{[["/mint", "Mint NFT"], ["/garage", "Open garage"], ["/mining", "Claim rewards"], ["/quests", "Do quests"], ["/friends", "Invite friends"], ["/leaderboard", "Leaderboard"]].map(([h, n]) => <Link key={h} className="btn2" href={h}>{n}</Link>)}</div></Card>
    <Disclaimer /></>);
}
