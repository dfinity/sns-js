export class SnsRootCanisterApi {
  canisterId: string;

  constructor(canisterId: string) {
    this.canisterId = canisterId;
  }

  async getSnsCanistersSummary() {
    // Note: This is a placeholder response but should resemble the real API response.
    return {
      // TODO: Make a type for  acanister
      root: {
        canisterId: "rootCanisterIdPlaceholder",
        controller: "rootCanisterControllerPlaceholder",
        cycles: 20_0,
      },
      governance: {
        canisterId: "governanceCanisterIdPlaceholder",
        controller: "governanceCanisterControllerPlaceholder",
        cycles: 20_0,
      },
      ledger: {
        canisterId: "ledgerCanisterIdPlaceholder",
        controller: "ledgerCanisterControllerPlaceholder",
        cycles: 20_0,
      },
      ledgerArchive: [
        {
          canisterId: "ledgerArchive1CanisterIdPlaceholder",
          controller: "ledgerArchive1CanisterControllerPlaceholder",
          cycles: 20_0,
        },
        {
          canisterId: "ledgerArchive2CanisterIdPlaceholder",
          controller: "ledgerArchive2CanisterControllerPlaceholder",
          cycles: 20_0,
        },
        {
          canisterId: "ledgerArchive3CanisterIdPlaceholder",
          controller: "ledgerArchive3CanisterControllerPlaceholder",
          cycles: 20_0,
        },
      ],
      swap: {
        canisterId: "swapCanisterIdPlaceholder",
        controller: "swapCanisterControllerPlaceholder",
        cycles: 20_0,
      },
    };
  }
}

export interface CanisterSummary {
  canisterId: string; // TODO: Use a specialised type
  controller: string; // TODO: Special type
  cycles: bignum;
}

/**
 * data needed by the SNS frontend dapp
 */
export interface SnsdappSummary {
  logo: string,
  name: string,
  symbol: string,
  description: string,
}

/**
 * Dip 20 is the only established token standard for the IC.
 * https://github.com/Psychedelic/DIP20/blob/main/rust/token/src/main.rs#L28
 */
export interface Dip20SnsSummary {
  // Base64 logo, stored by??
  // String length limit?
  logo: string,
  // Common name, e.g. "Internet Computer"
  // String length limit?
  name: string,
  // Token name, e.g. "ICP"
  // Symbol length limit?
  symbol: string,
  // The equivalent of 8 for ICP?
  // Min: 0, Max: 255.
  decimals: number,
  // Note: this is presumably not fixed, although it will be fixed for the launch of a token.
  totalSupply: bigint,
  // What will this be?  Initially the developer, then the sns root canister?
  owner: Principal,
  // Cost per transaction???
  fee: bigint,
}

export type Principal = string;
