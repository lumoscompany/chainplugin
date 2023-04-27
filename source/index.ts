import { Chainplugin } from './chainplugin'

/**
 * Just a method to simplify work with types
 *
 * @example
 * ```
 * export default chainplugin({ ... })
 * ```
 *
 *
 * @param args {@link Chainplugin | Chainplugin}
 * @returns
 */
const chainplugin = (args: Chainplugin) => {
  return args
}

export * from './address'
export * from './chainplugin'
export * from './pluginError'
export * from './eventsProvider'
export * from './assetsProvider'
export * from './messagesProvider'
export * from './visualRepresentation'

export default chainplugin
