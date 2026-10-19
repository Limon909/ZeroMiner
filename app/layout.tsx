import "./globals.css";
import Shell from "@/components/Shell";
import Providers from "@/components/Providers";
export const metadata = { title: "ZeroMiner", description: "NFT gaming and passive token mining on BNB Chain" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Providers><Shell>{children}</Shell></Providers></body></html>;
}
