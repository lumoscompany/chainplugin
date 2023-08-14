type QuickResponseResolveRequest = {
  value: string
}

type QuickResponseResolveResponseTransfer = {
  asset: string
  amount: string
  recipient: string
}

type QuickResponseResolveResponse = {} | QuickResponseResolveResponseTransfer

/**
 * An type that used by native code to manipulate with QR codes
 */
type QuickResponseProvider = {
  /**
   * Method that invoked by native code to resolve action for a QR code
   *
   * @param args - {@link QuickResponseResolveRequest | QuickResponseResolveRequest}
   * @returns Promise with a {@link QuickResponseResolveResponse | QuickResponseResolveResponse}
   */
  resolve(
    args: QuickResponseResolveRequest
  ): Promise<QuickResponseResolveResponse>
}

export type {
  QuickResponseProvider,
  QuickResponseResolveRequest,
  QuickResponseResolveResponse,
  QuickResponseResolveResponseTransfer,
}
