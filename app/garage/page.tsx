"use client";
import { useState } from "react";
import { Card, Disclaimer, Mock, Title } from "@/components/ui";
import { nfts, power, rarityColor } from "@/lib/data";
export default function Page() {
  const [sel, setSel] = useState<(typeof nfts)[number] | null>(null);
  return (<>
    <Title sub={<>Your NFTs <Mock /></>}>NFT Garage</Title>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {nfts.map(n => <button key={n.id} onClick={() => setSel(n)} className="glass p-4 text-left">
        <div className={`mb-3 flex h-28 items-center justify-center rounded-xl border bg-gradient-to-br from-neon/30 to-magenta/20 text-3xl ${rarityColor[n.r]}`}>#{n.id}</div>
        <div>{n.r}</div><div className="text-sm text-slate-400">Power {power[n.r]} · {n.active ? "Mining" : "Idle"}</div></button>)}
    </div>
    {sel && <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4" onClick={() => setSel(null)}>
      <Card className="w-full max-w-sm"><div onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-semibold">NFT #{sel.id}</h2><p className={rarityColor[sel.r].split(" ")[0]}>{sel.r}</p>
        <p className="mt-2 text-slate-400">Mining power {power[sel.r]}</p><p className="text-slate-400">Status: {sel.active ? "Mining active" : "Not mining"}</p>
        <div className="mt-4 flex gap-2"><button className="btn">{sel.active ? "Deactivate" : "Activate mining"}</button><button className="btn2" onClick={() => setSel(null)}>Close</button></div>
        <div className="mt-3"><Mock /></div></div></Card></div>}
    <Disclaimer /></>);
}
