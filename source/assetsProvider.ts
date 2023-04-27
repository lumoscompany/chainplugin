import { ComplementaryField, Image } from './visualRepresentation'
import { AssetAddress, AccountAddress } from './address'

/**
 * An asset type
 */
type AssetType = 'fungible' | 'non-fungible' | string

/**
 * An asset pricing
 */
type AssetPricing = {
  /**
   * Total price for an asset, USD
   * Double
   */
  total: number

  /**
   * Price for one piece of an asset, USD
   * Double
   */
  one: number
}

/**
 * An asset general preview media type
 */
type AssetPreviewMediaSignificant = { media: {} }

/**
 * An asset regular preview type
 */
type AssetPreviewRegularSignificant = {}

/**
 * An asset general preview type
 */
type AssetPreviewSignificant = {} & (
  | AssetPreviewMediaSignificant
  | AssetPreviewRegularSignificant
)

/**
 * An event visual preview type
 */
type AssetPreview = {
  significant: AssetPreviewSignificant
  complementary: ComplementaryField[]
}

/**
 * An type that represents an asset.
 */
type Asset = {
  /**
   * Quantity of asset
   */
  name: string

  /**
   * Small icon of the asset
   */
  icon?: Image

  /**
   * Quantity of the asset
   * BigUInt
   */
  quantity: string

  /**
   * Decimals of the asset,
   * Int
   */
  decimals: number

  /**
   * A pricing of the asset {@link AssetPricing | AssetPricing}
   */
  pricing?: AssetPricing

  /**
   * An address of the asset {@link AssetAddress | AssetAddress}
   */
  address: AssetAddress

  /**
   * A type of the asset {@link AssetType | AssetType}
   */
  type: AssetType

  /**
   * Set to `true` if asset looks as malicious to hide some parts of user interface.
   */
  malicious: boolean

  /**
   * A visual representation of asset {@link AssetPreview | AssetPreview}
   */
  preview: AssetPreview
}

/**
 * A request to retrieve assets for specified account address.
 */
type FetchAssetsRequest = {
  /**
   * An address which assets fetched for, {@link AccountAddress | AccountAddress}
   */
  address: AccountAddress
}

/**
 * An type that used by native code to manipulate with assets.
 */
type AssetsProvider = {
  /**
   * Method that invoked by native code to fetch list of assets for specified account address.
   *
   * @param args - {@link FetchAssetsRequest | FetchAssetsRequest}
   * @returns Promise with list of {@link Asset | Asset}
   */
  fetch(args: FetchAssetsRequest): Promise<Asset[]>
}

export type {
  AssetsProvider,
  AssetType,
  FetchAssetsRequest,
  Asset,
  AssetPreview,
  AssetPreviewMediaSignificant,
  AssetPreviewRegularSignificant,
  AssetPreviewSignificant,
}
