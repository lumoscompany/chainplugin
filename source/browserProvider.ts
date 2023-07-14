import { Event } from './eventsProvider'
import { Asset } from './assetsProvider'

/**
 * A request to retrieve assets for specified event
 */
type BrowserURLEventRequest = {
  event: Event
}

/**
 * A request to retrieve assets for specified asset
 */
type BrowserURLAssetRequest = {
  asset: Asset
}

type BrowserURLRequest = {} & (BrowserURLEventRequest | BrowserURLAssetRequest)

type BrowserURLResponse = {
  url?: string
}

/**
 * An type that used by native code to manipulate external resources
 */
type BrowserProvider = {
  /**
   * Method that invoked by native code to compute exteral URL for a resource
   *
   * @param args - {@link BrowserURLRequest | BrowserURLRequest}
   * @returns Promise with a {@link BrowserURLResponse | BrowserURLResponse}
   */
  url(args: BrowserURLRequest): Promise<BrowserURLResponse>
}

export type {
  BrowserURLEventRequest,
  BrowserURLAssetRequest,
  BrowserURLRequest,
  BrowserProvider,
  BrowserURLResponse,
}
