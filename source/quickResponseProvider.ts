import { AccountAddress, AssetAddress } from './address'
import { Asset } from './assetsProvider'

type QuickResponseValue = {
  value: string
}

type QuickResponseActionTransfer = {
  transfer: {
    recipient: AccountAddress
    asset?: AssetAddress

    /**
     * BigInt
     */
    amount?: string
  }
}

type QuickResponseAction = {} | QuickResponseActionTransfer

type QuickResponseResolveRequest = QuickResponseValue

type QuickResponseResolveResponse = {
  action?: QuickResponseAction
}

type QuickResponsePurposeTransfer = {
  transfer: {
    recipient: AccountAddress
    asset?: Asset
  }
}

type QuickResponsePurpose = {} | QuickResponsePurposeTransfer

type QuickResponseGenerateRequest = {
  purpose: QuickResponseAction
}

type QuickResponseGenerateResponse = {
  value?: QuickResponseValue
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

  /**
   * Method that invoked by native code to generate QR code for a special purpose
   *
   * @param args - {@link QuickResponseGenerateRequest | QuickResponseGenerateRequest}
   * @returns Promise with a {@link QuickResponseResolveResponse | QuickResponseResolveResponse}
   */
  generate(
    args: QuickResponseGenerateRequest
  ): Promise<QuickResponseGenerateResponse>
}

export type {
  QuickResponseProvider,
  QuickResponseAction,
  QuickResponseActionTransfer,
  QuickResponsePurpose,
  QuickResponsePurposeTransfer,
  QuickResponseResolveRequest,
  QuickResponseResolveResponse,
  QuickResponseGenerateRequest,
  QuickResponseGenerateResponse,
}
