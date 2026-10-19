import { createConfig, http, injected } from "wagmi";
import { bscTestnet } from "wagmi/chains";

// BNB Smart Chain Testnet only (chain id 97). Injected = MetaMask and other EVM browser wallets.
export const TARGET_CHAIN = bscTestnet;
export const config = createConfig({
  chains: [bscTestnet],
  connectors: [injected()],
  transports: { [bscTestnet.id]: http() },
  ssr: true,
});

export function friendlyError(e: unknown): string {
  const err = e as { name?: string; code?: number; message?: string; shortMessage?: string };
  const m = `${err?.name ?? ""} ${err?.message ?? ""}`;
  if (err?.code === 4001 || /UserRejected|rejected/i.test(m)) return "You rejected the request in your wallet.";
  if (/ProviderNotFound|No injected/i.test(m)) return "No wallet found. Install MetaMask or another EVM wallet.";
  if (/insufficient funds/i.test(m)) return "Not enough BNB for this transaction and gas.";
  if (/chain|network/i.test(m)) return "Wrong network. Switch to BNB Smart Chain Testnet.";
  return err?.shortMessage ?? "Something went wrong. Please try again.";
}
