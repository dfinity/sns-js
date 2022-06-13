// Hard-wired list as a placeholder:
const snsRootCanisters = [
  // Page 1: (Realistically might have 500 entries per page)
  ["abba-canister-id", "ambrosia-canister-id"],
  // Page 2:
  ["bucks-fizz-canister-id"],
];

/**
 * Calls the SNS manager to get a pageful of SNS canister IDs.  Raw API call.
 *
 * Note: This is a raw API call.
 */
export function getAPageOfSnsRootCanisters(pageNumber: number): Array<string> {
  // TODO: When the snsmanager exists, make an API call to there.
  // Note: No special permissions are required, no special key, no special agent, no caller ID.
  return snsRootCanisters[pageNumber] ?? [];
}

/**
 * Returns an iterator over all SNS root canisters.  Wraps the paginated API.
 *
 * Usage:
 * for await (const snsRootCanisterId of listSnsRootCanisters()) {
 *   console.log("SNS root canister:", snsRootCanisterId);
 * }
 */
export async function* listSnsRootCanisters() {
  // We get the list of canisters one page at a time:
  const page: Array<string> = [];
  let pageNumber = 0;
  let indexInPage = 0;
  // Get the first page of SNS canisters - this is a promise, we don't wait for it to arrive.
  let requestNextPage = getAPageOfSnsRootCanisters(pageNumber++);

  const snsIterator = {
    async next() {
      if (indexInPage < page.length) {
        // Return one of the results we already have:
        yield page[indexInPage++];
      } else {
        // Get the page that we have already requested:
        page = await requestNextPage;
        // If the page is non-empty, we have not yet reached the end of the list:
        if (page.length > 0) {
          // Request the next page, pro-actively.  We do not wait for it here.
          requestNextPage = getAPageOfSnsRootCanisters(pageNumber++);
          // Return the first of the elements we just received:
          indexInPage = 0;
          yield page[indexInPage++];
        }
      }
    },
  };
  return snsIterator;
}
