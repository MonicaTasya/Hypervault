/**
 * Deployed contract addresses on Monad Testnet (chainId 10143).
 * Source: SC/deployments/monad-testnet.json
 */
export const MONAD_TESTNET_CHAIN_ID = 10143;

export const CONTRACT_ADDRESSES = {
  AgentRegistry: "0x49cB9c00A40dd44e4c9D0b421A7cC536680d6f86" as `0x${string}`,
  DelegationVault:
    "0xAF25Bf262877AB7185778aF6ebf929DC54EdDE96" as `0x${string}`,
  PlatformFee: "0xFE39312Ae8bd3e993177ef8cFd821C98fED74E01" as `0x${string}`,
  MockUSDC: "0xD0c9BB9e867341517A85D3eB8e5fACafD5DB723e" as `0x${string}`,
} as const;
