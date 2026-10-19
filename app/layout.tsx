import "./globals.css";
import Shell from "@/components/Shell";
export const metadata = { title: "ZeroMiner", description: "NFT gaming and passive token mining on BNB Chain" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Shell>{children}</Shell></body></html>;
}
