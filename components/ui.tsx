import { ReactNode } from "react";
export const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`glass p-5 ${className}`}>{children}</div>;
export const Mock = ({ label = "MOCK: not connected to a contract" }: { label?: string }) => <span className="inline-block rounded-full border border-amber-400/50 px-2 py-0.5 text-xs text-amber-300">{label}</span>;
export const Bar = ({ v }: { v: number }) => <div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-gradient-to-r from-neon via-magenta to-mint" style={{ width: `${v}%` }} /></div>;
export const Title = ({ children, sub }: { children: ReactNode; sub?: ReactNode }) => <div className="mb-6"><h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{children}</h1>{sub && <div className="mt-2 text-slate-400">{sub}</div>}</div>;
export const Stat = ({ l, v }: { l: string; v: ReactNode }) => <Card><div className="text-sm text-slate-400">{l}</div><div className="mt-1 text-2xl font-semibold text-mint">{v}</div></Card>;
export const Disclaimer = () => <p className="mt-8 text-xs text-slate-500">Token rewards are not guaranteed to have market value. Testnet only. Never share your seed phrase.</p>;
