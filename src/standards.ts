/**
 * Data needed by the SNS frontend dapp for token summaries.
 */
export interface SnsSummary {
  // Authority?  Root canister?
  logo: string;
  // Authority?  Root canister?
  name: string;
  // Authority?  Root canister?
  symbol: string;
  // Authority?  Root canister?
  url: string;
  // Description
  description?: string;
}

/**
 * Data needed by the sns frontend dapp about the swap
 * TODO: What is the authoritative source for this data?  Is there and SNS Swap spec?  URL please, and include it in this code.
 */
export interface SwapSummary {
  // Commitments by all users or only the current user?
  Commitments;
  maxCommitments;
  deadline;
  status;
  // etc .. waht else?
}

/**
 * Dip 20 is the only established token standard for the IC.
 * https://github.com/Psychedelic/DIP20/blob/main/rust/token/src/main.rs#L28
 */
export interface Dip20SnsSummary {
  // Base64 logo, stored by??
  // String length limit?
  // Authority?  Root canister?
  logo: string;
  // Common name, e.g. "Internet Computer"
  // String length limit?
  // Authority?  Root canister?
  name: string;
  // Token name, e.g. "ICP"
  // Symbol length limit?
  // Authority?  Root canister?
  symbol: string;
  // The equivalent of 8 for ICP?
  // Min: 0, Max: 255.
  // Authority?  Root canister?
  decimals: number;
  // Note: this is presumably not fixed, although it will be fixed for the launch of a token.
  // Authority?  Root canister?
  // Skip
  totalSupply: bigint;
  // What will this be?  Initially the developer, then the sns root canister?
  // Authority?  Root canister? The root is owned by the sns controller.
  owner: Principal;
  // Cost per transaction???
  // Authority?  Root canister?
  // Verify but we probably need this.
  fee: bigint;
}

// TODO: Use type from agentjs
export type Principal = string;



CanisterStatus <-- 
