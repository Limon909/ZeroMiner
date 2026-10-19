"use client";
import { useState } from "react";
import { Card, Disclaimer, Mock, Title } from "@/components/ui";
import { mintPrice, nfts, power, rarityColor, tiers } from "@/lib/data";
export default function Page() {
  const [q, setQ] = useState(1); const [msg, setMsg] = useState("");
  return (<>
    <Title sub={<>Mint price {mintPrice} BNB each <Mock /></>}>NFT Mint</Title>
    <div className="grid gap-4 md:grid-cols-2">
      {tiers.map(t => <Card key={t.r}><div className={`inline-block rounded-full border px-3 py-0.5 text-sm ${rarityColor[t.r]}`}>{t.r}</div>
        <div className="mt-3 text-slate-400">Mining power {power[t.r]}</div><div className="text-slate-400">Remaining {t.left} / {t.supply}</div></Card>)}
    </div>
    <Card className="mt-6"><div className="flex flex-wrap items-center gap-3">
      <button className="btn2" onClick={() => setQ(Math.max(1, q - 1))}>-</button><span className="w-8 text-center text-xl">{q}</span>
      <button className="btn2" onClick={() => setQ(Math.min(10, q + 1))}>+</button>
      <span className="text-slate-400">Total {(q * mintPrice).toFixed(2)} BNB</span>
      <button className="btn" onClick={() => setMsg(`Demo only: no transaction sent. ${q} NFT(s) would be minted.`)}>Mint NFT</button></div>
      {msg && <p className="mt-3 text-mint">{msg}</p>}</Card>
    <h2 className="mb-3 mt-8 text-xl font-semibold">Owned NFTs <Mock /></h2>
    <div className="flex flex-wrap gap-2">{nfts.map(n => <span key={n.id} className={`rounded-full border px-3 py-1 text-sm ${rarityColor[n.r]}`}>#{n.id} {n.r}</span>)}</div>
    <Disclaimer /></>);
}
