"use client";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { TARGET_CHAIN, friendlyError } from "@/lib/wagmi";

export const short = (a?: string) => (a ? `${a.slice(0, 6)}...${a.slice(-4)}` : "");

export default function WalletButton() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { address, isConnected, chainId } = useAccount();
  const { connect, connectors, isPending, error, reset } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: switching, error: swErr } = useSwitchChain();
  if (!mounted) return <button className="btn" disabled>Connect Wallet</button>;

  if (!isConnected)
    return (<div className="text-right">
      <button className="btn" disabled={isPending} onClick={() => { reset(); connect({ connector: connectors[0], chainId: TARGET_CHAIN.id }); }}>
        {isPending ? "Check your wallet..." : "Connect Wallet"}</button>
      {error && <p className="mt-1 max-w-xs text-xs text-red-400">{friendlyError(error)}</p>}
    </div>);

  const wrong = chainId !== TARGET_CHAIN.id;
  return (<div className="flex flex-col items-end gap-1">
    <div className="flex items-center gap-2">
      {wrong
        ? <button className="btn" disabled={switching} onClick={() => switchChain({ chainId: TARGET_CHAIN.id })}>{switching ? "Switching..." : "Switch to BNB Testnet"}</button>
        : <span className="rounded-full border border-mint/50 px-2 py-0.5 text-xs text-mint">BNB Testnet</span>}
      <button className="btn2" onClick={() => disconnect()}>{short(address)}</button>
    </div>
    {wrong && <p className="text-xs text-red-400">Wrong network. Switch to BNB Smart Chain Testnet.</p>}
    {swErr && <p className="max-w-xs text-xs text-red-400">{friendlyError(swErr)}</p>}
  </div>);
}
