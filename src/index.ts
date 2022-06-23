export public class Sns {
    rootCanisterId: string;
    constructor(rootCanisterId: string, options: {}) {
      this.rootCanisterId = rootCanisterId;
    }

    /**
     * Gets static information about the SNS.
     */
    getSnsSummary(): SnsSummary {
      throw new Error("Unimplemented");
    }

    /**
     * Gets static information about the SNS according to DIP20.
     */
    getDip20SnsSummary(): Dip20SnsSummary {
      throw new Error("Unimplemented");
    }

    /**
     * Gets the overall state of the SNS, e.g. has the swap taken place yet?  Is it accepting commitments?
     */
    async getState(): Promise<{acc}> {
      throw new Error("Unimplemented");
      // Call: swap canister: get_canister_status()
    }

    async orderCommitmnet({fromUserPrincipal, icp}): Invoice {
      throw new Error("Unimplemented");
    }
    /**
     * Makes a commitment.
     */
    async claimCommitment({icp, userPrincipal, subaccountId}: {icp: whatever, userPrincipal: Principal, subaccountId: whatever}): Promise<void> {
      throw new Error("Unimplemented");
      // Call NNS ledger canister to send funds to an account number that is a function of SNS and user principal.
      // - Note: Should this be done in sns-js?  Should sns-js instead have a method to give the address to send funds?
      // Call the SNS swap canister: refresh_buyer_tokens(userPrincipal)
    }

    /**
     * Gets the commitment of a user before swap.
     */
    async getCommitment({userPrincipal}): Promise<someTypeForIcp> {
      throw new Error("Unimplemented");
    }

    /**
     * Gets the stake of a user after swap.
     */
    async getCommitment({userPrincipal}): Promise<someTypeForSnsTokens> {
      throw new Error("Unimplemented");
    }
}
