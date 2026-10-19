# ZeroMiner
NFT gaming and passive token mining on BNB Smart Chain. Stage 1: responsive UI with mock data. Every page marked MOCK is not connected to a contract.

## Run locally
    npm install
    npm run dev      # http://localhost:3000
    npm run build

## GitHub and Vercel
    git init && git add . && git commit -m "ZeroMiner stage 1"
    git branch -M main && git remote add origin <your-repo-url> && git push -u origin main
Then import the repo at vercel.com/new. Add env vars from `.env.example` in Project Settings. Never commit `.env`.

## Next stages
Wallet (wagmi + viem), contracts (VoidNFT, VoidToken, VoidMining under contracts/), tests, testnet deploy, server-verified claims.
