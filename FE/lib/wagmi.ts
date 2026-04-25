import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const monadTestnet = {
  id: 10143,
  name: "Monad Testnet",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://testnet-rpc.monad.xyz/"] },
  },
  blockExplorers: {
    default: {
      name: "Monad Explorer",
      url: "https://testnet.monadexplorer.com",
    },
  },
} as const;

// `injected()` covers any EIP-1193 wallet (MetaMask, Rabby, Brave, …) when one
// is installed. The standalone `metaMask()` connector throws on init when the
// extension is missing, which surfaces as a noisy `Failed to connect to
// MetaMask` error in dev — keep just `injected()` so that absence is silent.
export const config = createConfig({
  chains: [monadTestnet, mainnet, sepolia],
  connectors: [injected({ shimDisconnect: true })],
  transports: {
    [monadTestnet.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
