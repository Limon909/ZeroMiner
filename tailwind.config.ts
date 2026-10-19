import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#07060d", neon: "#a855f7", magenta: "#ec4899", mint: "#34f5a0" } } },
  plugins: [],
};
export default config;
