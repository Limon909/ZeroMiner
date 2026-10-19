import { Card, Disclaimer, Mock, Title } from "@/components/ui";
import { quests } from "@/lib/data";
export default function Page() {
  return (<><Title sub={<>Completion will be verified server-side. <Mock /></>}>Quests</Title>
    <div className="space-y-3">{quests.map(q => <Card key={q.t}><div className="flex items-center justify-between gap-3">
      <div><div>{q.t}</div><div className="text-sm text-slate-400">{q.k} · +{q.reward} points</div></div>
      {q.done ? <span className="text-mint">Completed</span> : <button className="btn">Start</button>}</div></Card>)}</div>
    <Disclaimer /></>);
}
