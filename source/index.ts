import { ChainpluginConstructor } from './chainplugin'

/**
 * Just a method to simplify work with types
 *
 * @example
 * ```
 * class BlockchainPlugin implements Chainplugin {}
 *
 * export default chainplugin(BlockchainPlugin)
 * ```
 *
 *
 * @param args {@link Chainplugin | Chainplugin}
 * @returns
 */
const chainplugin = (args: ChainpluginConstructor) => {
  return args
}

export * from './address'
export * from './chainplugin'
export * from './pluginError'
export * from './eventsProvider'
export * from './assetsProvider'
export * from './browserProvider'
export * from './messagesProvider'
export * from './visualRepresentation'
export * from './globalEnvironment'

export default chainplugin
