"use client";
import { useState } from "react";
import { Card, Disclaimer, Mock, Title } from "@/components/ui";
export default function Page() {
  const link = "https://zerominer.example/?ref=71C79A3F"; const [c, setC] = useState(false);
  return (<><Title sub={<>Referral rewards are checked on the server. <Mock /></>}>Friends & Referrals</Title>
    <Card><div className="break-all text-slate-300">{link}</div>
      <button className="btn mt-3" onClick={() => { navigator.clipboard?.writeText(link); setC(true); }}>{c ? "Copied" : "Copy referral link"}</button></Card>
    <div className="mt-4 grid grid-cols-2 gap-4"><Card>Referrals<div className="text-2xl text-mint">3</div></Card><Card>Eligible rewards<div className="text-2xl text-mint">45 pts</div></Card></div>
    <h2 className="mb-3 mt-8 text-xl font-semibold">History</h2>
    <div className="space-y-2">{["0x12ab...90", "0x88cd...f1", "0x5e0f...3a"].map(a => <Card key={a}>{a} joined · +15 pts</Card>)}</div>
    <Disclaimer /></>);
}
