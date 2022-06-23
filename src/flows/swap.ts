


export async function swapIcpForfutureTokens(owner: Principal, billingAccount: Principal, icpDoms: bignum, canisterIds: { swap: { canisterId: string }, ledger: { canisterId } }): Commitment {
    // Implementation:
    // - Send ICP to the swap canister
    //   - Exactly which principal should the ICP be sent to?
    await nns.sendIcp(icpDoms: bignum, credit: snscanisters.swapCanister, debit: billingAccount, nonce: randomNumber);  // TODO: Look up this API
    //   - Note: This uses the nns-dapp API for payment.
    // - Wait for a commitment to appear in the sns ledger canister.
    await ledgerCanister.waitForAndClaimCommitment(nonce);
    return {
      owner: callerId,
      icpDoms,
    }
}
