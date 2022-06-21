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
    async getState(): Promise<{acc}>

    /**
     * Makes a commitment.
     */
    async commitIcp({icp, userPrincipal, subaccountId}: {icp: whatever, userPrincipal: Principal, subaccountId: whatever}): Promise<void> {
      throw new Error("Unimplemented");
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
