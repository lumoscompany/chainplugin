import { EventsProvider } from './eventsProvider'
import { AssetsProvider } from './assetsProvider'
import { MessagesProvider } from './messagesProvider'
import { Environment } from './environment'

/**
 * A {@link AssetsProvider | Chainplugin} constructor
 */
interface ChainpluginConstructor {
  new (args: Environment): Chainplugin
}

interface Chainplugin {
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
