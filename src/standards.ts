/**
 * Data needed by the SNS frontend dapp for token summaries.
 */
export interface SnsDappSummary {
  // Authority?  Root canister?
  logo: string;
  // Authority?  Root canister?
  name: string;
  // Authority?  Root canister?
  symbol: string;
  // Authority?  Root canister?
  description: string;
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
  totalSupply: bigint;
  // What will this be?  Initially the developer, then the sns root canister?
  // Authority?  Root canister?
  owner: Principal;
  // Cost per transaction???
  // Authority?  Root canister?
  fee: bigint;
}

// TODO: Use type from agentjs
export type Principal = string;
