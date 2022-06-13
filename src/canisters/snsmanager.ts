// Hard-wired list as a placeholder:
const snsRootCanisters = [["abba", "ambrosia"]];

/**
 * Calls the SNS manager to get a pageful of SNS canister IDs.
 *
 * Note: This is a raw API call.
 */
export function getAPageOfSnsRootCanisters(pageNumber: number): Array<string> {
  return snsRootCanisters[pageNumber] ?? [];
}

/**
 * Returns an iterator over all SNS root canisters.
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
