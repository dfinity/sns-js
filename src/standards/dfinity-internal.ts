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
