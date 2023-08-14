import { AssetAddress } from './address'

type QuickResponseResolveRequest = {
  value: string
}

type QuickResponseActionTransfer = {
  transfer: {
    recipient: string
    asset?: AssetAddress

    /**
     * BigInt
     */
    amount?: string
  }
}

type QuickResponseAction = {} | QuickResponseActionTransfer

type QuickResponseResolveResponse = {
  action?: QuickResponseAction
}

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
  QuickResponseAction,
  QuickResponseActionTransfer,
}
