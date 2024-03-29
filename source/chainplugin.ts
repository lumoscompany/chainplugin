import { EventsProvider } from './eventsProvider'
import { AssetsProvider } from './assetsProvider'
import { MessagesProvider } from './messagesProvider'
import { BrowserProvider } from './browserProvider'
import { AddressProvider } from './addressProvider'
import { QuickResponseProvider } from './quickResponseProvider'

/**
 * A {@link AssetsProvider | Chainplugin} constructor
 */
interface ChainpluginConstructor {
  new (): Chainplugin
}

interface Chainplugin {
  /**
   * Method that invoked by native code to get address provider
   *
   * @returns Promise with {@link AddressProvider | AddressProvider}
   */
  address?(): Promise<AddressProvider>

  /**
   * Method that invoked by native code to manipulate with QR codes
   *
   * @returns Promise with {@link QuickResponseProvider | QuickResponseProvider}
   */
  qr?(): Promise<QuickResponseProvider>

  /**
   * Method that invoked by native code to get browser provider
   *
   * @returns Promise with {@link BrowserProvider | BrowserProvider}
   */
  browser(): Promise<BrowserProvider>

  /**
   * Method that invoked by native code to get assets provider
   *
   * @returns Promise with {@link AssetsProvider | AssetsProvider}
   */
  assets(): Promise<AssetsProvider>

  /**
   * Method that invoked by native code to get events provider
   *
   * @returns Promise with {@link EventsProvider | EventsProvider}
   */
  events(): Promise<EventsProvider>

  /**
   * Method that invoked by native code to get messages provider
   *
   * @returns Promise with {@link MessagesProvider | MessagesProvider}
   */
  messages(): Promise<MessagesProvider>
}

export type { Chainplugin, ChainpluginConstructor }
