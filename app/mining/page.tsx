"use client";
import { useState } from "react";
import { Bar, Card, Disclaimer, Mock, Title } from "@/components/ui";
import { history, nfts, power, user } from "@/lib/data";
export default function Page() {
  const act = nfts.filter(n => n.active); const total = act.reduce((s, n) => s + power[n.r], 0); const [m, setM] = useState("");
  return (<>
    <Title sub={<>Rewards will come from contract rules, not frontend timers. <Mock /></>}>Mining Pool</Title>
    <div className="grid gap-4 md:grid-cols-3">
      <Card><div className="text-sm text-slate-400">Total mining power</div><div className="text-2xl text-mint">{total}</div></Card>
      <Card><div className="text-sm text-slate-400">Est. rate</div><div className="text-2xl text-mint">12.5 ZMT/day</div></Card>
      <Card><div className="text-sm text-slate-400">Claimable</div><div className="text-2xl text-mint">{user.pending} ZMT</div></Card></div>
    <Card className="mt-4"><div className="mb-2 text-sm text-slate-400">Epoch progress</div><Bar v={62} />
      <button className="btn mt-4" onClick={() => setM("Demo only: nothing claimed.")}>Claim Rewards</button>{m && <span className="ml-3 text-mint">{m}</span>}</Card>
    <h2 className="mb-3 mt-8 text-xl font-semibold">Active positions</h2>
    <div className="space-y-2">{act.map(n => <Card key={n.id}>#{n.id} {n.r} · power {power[n.r]}</Card>)}</div>
    <h2 className="mb-3 mt-8 text-xl font-semibold">History</h2>
    <div className="space-y-2">{history.map((h, i) => <Card key={i}>{h[0]} · {h[1]} · <span className="text-neon">{h[2]}</span> (explorer link later)</Card>)}</div>
    <Disclaimer /></>);
}
