export interface Commitment {
   owner: Principal,
   commitment_as_doms: bignum,
}

/**
 * Gets the commitment of the current user.  Users may have only one commitment.
 */
export function getMyCommitment(): Promise<Commitment> {
    return new Promise((_yay, nay) => nay("Not implemented"));
}

/**
 * Gets the commitments of all users.  Definitely paginated.  Is this needed at all?
 */
export function getAllCommitments() {
  // TODO: return an iterator over all commitments, using the paginate dbackend call.
}
