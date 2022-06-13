/**
 * Returns the details of an SNS canister, given by the root canister ID.
 */
export function getSnsOverview(rootCanisterId: string) {
  const rootCanister = new SnsRootCanisterApi(rootCanisterId);
  return rootCanister.getSnsCanistersSummary();
}

/**
 * Returns an iterator over all SNS instances with:
 * * SNS token
 * * SNS canister IDs: root and swap. // TODO: Is this list complete?
 * * SNS description
 *
 * Note: SNS details are returned as a promise rather than waiting for one set of details to be ready before requesting the next.
 *
 * Usage:
 * for await (const sns of listSnsOverviews()) {
 *   console.log("SNS root canister:", await snsRootCanisterId);
 * }
 */
export async function* listSnsOverviews() {
  for await (const snsRootCanister of listSnsRootCanisters()) {
    yield getSnsOverview(snsRootCanister);
  }
}
