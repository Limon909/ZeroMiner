"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const nav = [["/", "Dashboard"], ["/mint", "NFT Mint"], ["/garage", "NFT Garage"], ["/mining", "Mining Pool"], ["/quests", "Quests"], ["/friends", "Friends & Referrals"], ["/leaderboard", "Leaderboard"], ["/profile", "Profile & Settings"]];
export default function Shell({ children }: { children: React.ReactNode }) {
  const p = usePathname(); const [open, setOpen] = useState(false); const [on, setOn] = useState(false);
  const links = nav.map(([h, n]) => <Link key={h} href={h} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-2.5 ${p === h ? "bg-neon/20 text-white" : "text-slate-400 hover:text-white"}`}>{n}</Link>);
  return (<div className="md:flex">
    <aside className={`glass fixed inset-y-0 left-0 z-20 w-64 rounded-none p-4 transition-transform md:static md:translate-x-0 ${open ? "" : "-translate-x-full"}`}>
      <div className="mb-6 px-4 text-2xl font-bold bg-gradient-to-r from-neon to-mint bg-clip-text text-transparent">ZeroMiner</div>
      <nav className="space-y-1">{links}</nav>
    </aside>
    <div className="min-w-0 flex-1">
      <header className="flex items-center justify-between p-4 md:justify-end">
        <button className="btn2 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">Menu</button>
        <button className="btn" onClick={() => setOn(!on)}>{on ? "0x71C7...9a3F (demo)" : "Connect Wallet (demo)"}</button>
      </header>
      <main className="mx-auto max-w-5xl p-4 pb-16">{children}</main>
    </div></div>);
}
