import { AssetAddress } from './address'

type QuickResponseResolveRequest = {
  value: string
}

type QuickResponseActionTransfer = {
  asset: AssetAddress
  recipient: string

  /**
   * BigInt
   */
  amount?: string
}

type QuickResponseAction = {} | QuickResponseActionTransfer

/**
 * An type that used by native code to manipulate with QR codes
 */
type QuickResponseProvider = {
  /**
   * Method that invoked by native code to resolve action for a QR code
   *
   * @param args - {@link QuickResponseResolveRequest | QuickResponseResolveRequest}
   * @returns Promise with a {@link QuickResponseAction | QuickResponseAction}
   */
  resolve(
    args: QuickResponseResolveRequest
  ): Promise<QuickResponseAction | undefined>
}

export type {
  QuickResponseProvider,
  QuickResponseResolveRequest,
  QuickResponseAction,
  QuickResponseActionTransfer,
}
