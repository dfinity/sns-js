/**
 * Raw API: https://github.com/dfinity/ic/blob/master/rs/sns/root/canister/root.did
 */
export class SnsRootCanisterApi {
  canisterId: string;

  constructor(canisterId: string) {
    this.canisterId = canisterId;
  }

  async getSnsCanistersSummary() {
    // Note: This is a placeholder response but should resemble the real API response.
    return {
      // TODO: Make a type for a canister
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
