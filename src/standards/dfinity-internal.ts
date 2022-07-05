/**
 * Data needed by the SNS frontend dapp for token summaries.
 */
export interface SnsSummary {
  // The principal of the root canister.
  rootCanisterId: Principal;
  // The symbol representing the SNS.
  logo: string;
  // The name of the SNS.
  name: string;
  // A short, accessible name for the SNS token.
  symbol: string;
  // Authority?  Root canister?
  url: URL;
  // Description
  description?: string;
  // The instant at which the swap is scheduled to take place.
  // Units: Seconds since the UNIX Epoch (1 Jan 1970)
  // Note: In future an SNS may have multiple token issuing events.  At present only a single decentralising tokenization event is supported.
  swapDeadline?: bigint;
  // The instance at which the SNS was created.
  // Units: Seconds since the UNIX Epoch (1 Jan 1970)
  swapStart?: bigint;
  // The minimum number of ICP that may be swapped for SNS tokens.
  // Units: ICP u8s
  swapMinCommitment: bigint;
  // The maximum number of ICP that may be swapped for SNS tokens, in total, by all contributors.
  // Units: ICP u8s
  swapMaxCommitment: bigint;
  // The maximum number of ICP that a single user (principal) may swap for SNS tokens.
  // Units: ICP u8s
  swapMaxCommitmentPerUser: bigint;
  // The cost of making an STS token transaction.
  // Units: SNS u8s
  snsTransactionFee: bigint;
}

export interface SnsSwapState {
  // The principal of the root canister.
  rootCanisterId: Principal;
  // The total of all commitments so far, by all contributors.
  // Units: ICP u8s
  currentCommitment: bigint;
  // The calling user's commitment, if not called by the anonymous user.  
  // Units: ICP u8s
  myCommitment?: bigint;
}

/**
 * The SNS logo represents the decentralised service.
 */
export class SnsLogo {
  /**
   * Checks that a logo is valid; throws an error otherwise.
   *
   * - The logo should be a data URL.
   * - The image should be SVG.
   * - The encoding should be base64 (using additional characters +/ not the URL-safe variant -_ or any other).
   * - The data URL should have modest length.
   */
  static checkValid(logo: string) {
    if (logo.length > SnsLogo.maxLength()) {
      throw new Error(
        `SNS logo is too long: ${logo.length} > ${SnsLogo.maxLength()}`
      );
    }
    const prefix = "data:image/svg;base64,";
    if (!logo.startsWith(prefix)) {
      throw new Error(
        `SNS logo has an incorect prefix.  Expected: '${prefix}...' Actual: '${logo.slice(
          0,
          20
        )}...'`
      );
    }
    const base64Chars = "[0-9a-zA-Z+/]+=*";
    const urlPattern = new RegExp(`^${prefix}${base64Chars}$`);
    if (!urlPattern.test(logo)) {
      throw new Error(
        `SNS logo should be a base64 encoded data URL, using +/ as the additional characters: '${logo.slice(
          0,
          30
        )}...'`
      );
    }
  }

  /**
   * Modern browsers support huge data URLs, however in the interest of having reasonable performance when getting a large number of logos, each logo SHOULD have modest length.
   *
   * Note: This limit is advisory.  In theory this limit will be added to a spec.  In practice each SNS canister that hosts such a URL may implement a different limit.
   */
  static maxLength(): number {
    return (8 << 10) - 1;
  }

  /**
   * Checks whether an SVG image contains script tags or event handlers.  If so, this throws an error.
   */
  static checkNoScript(svg: string): void {
    const doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = svg; // Should not execute scripts such as onload.
    
  }
}

/**
 * The full name of this SNS.
 */
export class SnsName {
  /**
   * An SNS may have any string name, using any characters, but of modest length.
   */
  static checkValid(name: string) {
    if (name.length > SnsName.maxLength()) {
      throw new Error(`SNS name is too long: ${name.length} > ${SnsName.maxLength()}`);
    }
    if (name.length < SnsName.minLength()) {
      throw new Error(`SNS name is too short: ${name.length} < ${SnsName.minLength()}`);
    }
  }

  /**
   * An SNS name should have modest length.
   */
  static maxLength(): number {
    return 127;
  }

  /**
   * An SNS name should not be too short
   */
  static minLength(): number {
    return 10;
  }
}

/**
 * The SNS symbol is an acronym for the governance token of the decentralised service.
 * - The symbol SHOULD be aligned with the conventions of exchanges, as some tokens MAY theoretically be tradeable assets.
 * - The symbol SHOULD be easy to type on keyboards of any nation, so umlauts, ideograms, control sequences, invisible characters etc SHOULD not be used.
 */
export class SnsTokenSymbol {
  /**
   * An SNS may have any string name, using any characters, but of modest length.
   */
  static checkValid(tokenSymbol: string): void {
    if (tokenSymbol.length > SnsTokenSymbol.maxLength()) {
      throw new Error(
        `SNS token symbol '${tokenSymbol.slice(
          0,
          SnsTokenSymbol.maxLength()
        )}...' is too long: Length ${
          tokenSymbol.length
        } > Max ${SnsTokenSymbol.maxLength()}`
      );
    }
    if (tokenSymbol.length < SnsTokenSymbol.minLength()) {
      throw new Error(
        `SNS token symbol '${tokenSymbol}' is too short: Length ${
          tokenSymbol.length
        } < Min ${SnsTokenSymbol.minLength()}`
      );
    }
    if (!SnsTokenSymbol.pattern().test(tokenSymbol)) {
      throw new Error(
        `SNS token symbol '${tokenSymbol}' MUST consist of capital ASCII characters: '${SnsTokenSymbol.pattern()}'`
      );
    }
  }

  /**
   * An SNS token name should have modest length.
   */
  static maxLength(): number {
    return 10;
  }

  /**
   * An SNS token name should not be too short
   */
  static minLength(): number {
    return 3;
  }

  /**
   * An SNS token name should use uppercase ASCII characters and should not start with a number.
   */
  static pattern(): RegExp {
    return /^[A-Z][A-Z0-9]*$/;
  }
}

/**
 * TODO: Are all URLs allowed?  E.g. data URLs?  Custom protocols?  For the time being I will assume http: and https: only.
 */
export class SnsUrl {
  /**
   * Throws an error if the URL is invalid?
   */
  static checkValid(url): void {
    const parsed = new URL(url); // Will throw an error if malformed.
    const supportedProtocols = ["http:", "https:"];
    if (!supportedProtocols.contains(parsed.protocol)) {
      throw new Error(
        `Unsupported protocol '${
          parsed.protocol
        }'.  Please use one of: ${supportedProtocols.join(", ")}`
      );
    }
  }
}

/**
 * The default, non-localised description of the SNS.
 *
 * Note: In future there MAY be several SNS descriptions to support multiple languages.  If we have an arbitrary map
 * of strings to strings for metadata, `description-${language}` should be used for the localised description, where
 * `language` is the two letter ISO 639-1 country code as provided by `navigator.language.split(`-`,1)[0]`.  Sorry Yanks,
 * you might have to put up with British spelling on occasion.  Germans, god help you with Schweitzerdeutsch.
 */
export class SnsDescription {
  /**
   * Throws an error if a description is invalid.
   */
  static checkValid(description): void {
    if (description.length > SnsDescription.maxLength()) {
      throw new Error(
        `SNS description is too long: Length ${
          description.length
        } > Max ${SnsDescription.maxLength()}`
      );
    }
  }

  /**
   * An SNS description should have modest length.
   */
  static maxLength() {
    return (1 << 20) - 1;
  }
}

/**
 * The instant, measured as seconds after the UNIX epoch, may blessigs be on its soul, at which the swap is scheduled to take place.
 */
export class SnsSwapDeadline {
  static checkValid(_deadline: bigint) {
    // All times are theoretically valid.  New deadlines SHOULD be in the future.
  }
}
