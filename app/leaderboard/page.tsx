import { Card, Disclaimer, Mock, Title } from "@/components/ui";
import { board, user } from "@/lib/data";
export default function Page() {
  return (<><Title sub={<>Season points and mining power. <Mock /></>}>Leaderboard</Title>
    <Card className="mb-4">Your rank <span className="text-mint">#{user.rank}</span> · {user.points} season points</Card>
    <div className="space-y-2">{board.map((b, i) => <Card key={i}><div className="flex justify-between"><span>#{i + 1} {b[0]}</span><span className="text-slate-400">{b[1]} pts · power {b[2]}</span></div></Card>)}</div>
    <Disclaimer /></>);
}
