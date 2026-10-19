"use client";
import { useEffect, useState } from "react";
import { formatEther } from "viem";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { Card, Disclaimer, Mock, Title } from "@/components/ui";
import { TARGET_CHAIN } from "@/lib/wagmi";
export default function Page() {
  const [m, setM] = useState(false); useEffect(() => setM(true), []);
  const { address, isConnected, chainId } = useAccount();
  const { data: bal } = useBalance({ address });
  const { disconnect } = useDisconnect();
  const ok = chainId === TARGET_CHAIN.id;
  return (<><Title sub="Wallet data below is real (read from your wallet).">Profile & Settings</Title>
    <Card>{!m || !isConnected ? <p className="text-slate-400">No wallet connected. Use Connect Wallet at the top right.</p> : <>
      <div className="break-all">Wallet: {address}</div>
      <div className="mt-1">Network: {ok ? <span className="text-mint">BNB Smart Chain Testnet (97)</span> : <span className="text-red-400">Wrong network (chain {chainId}). Switch to BNB Testnet.</span>}</div>
      <div className="mt-1">Balance: {bal ? `${Number(formatEther(bal.value)).toFixed(4)} tBNB` : "..."}</div>
      <button className="btn2 mt-4" onClick={() => disconnect()}>Disconnect wallet</button></>}</Card>
    <Card className="mt-4"><div>Account activity <Mock /></div><div className="text-slate-400">Activity records come with the backend stage.</div></Card>
    <Disclaimer /></>);
}
