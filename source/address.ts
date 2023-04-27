/**
 * An address
 */
type AccountAddress = string

/**
 * `_` used for native network asset, e.g. TRX for TRON
 */
type AssetAddress = '_' | AccountAddress

export type { AssetAddress, AccountAddress }
