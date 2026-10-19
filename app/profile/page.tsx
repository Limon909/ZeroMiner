import { Card, Disclaimer, Mock, Title } from "@/components/ui";
import { user } from "@/lib/data";
export default function Page() {
  return (<><Title sub={<>Real wallet data arrives in stage 3. <Mock /></>}>Profile & Settings</Title>
    <Card><div>Wallet: {user.addr}</div><div className="mt-1">Network: BNB Smart Chain Testnet (97)</div><div className="mt-1 text-slate-400">Activity: 14 actions this season</div>
      <button className="btn2 mt-4">Disconnect wallet</button></Card><Disclaimer /></>);
}
