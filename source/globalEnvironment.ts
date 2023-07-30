/**
 * An plugin global environment type
 */
type GlobalEnvironment = {
  /**
   * `true`, if user requests testnet usage
   */
  isTestnetEnabled: boolean

  readonlyKeyValueStrorage: ReadonlyKeyValueStrorage
}

type ReadonlyKeyValueStrorage = {
  value(forKey: string): Promise<string | undefined>
}

declare global {
  const globalEnvironment: GlobalEnvironment
}

export type { GlobalEnvironment, ReadonlyKeyValueStrorage }
