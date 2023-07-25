/**
 * Image representation with remote content
 */
type RemoteImage = {
  url: {
    /**
     * URL of image
     */
    string: string
  }
}

/**
 * Image representation with SVG data
 * @alpha
 */
type SVGImage = {
  svg: {
    /**
     * Base64 encoded SVG data
     */
    data: string
  }
}

type Image = {} & (RemoteImage | SVGImage)

/**
 * Formatting options for a {@link CurrencyFormattedText | CurrencyFormattedText}
 */
enum CurrencyTextFormattingOptions {
  POSITIVE = 1 << 1,
  NEGATIVE = 1 << 2,
}

/**
 * A currency formatted text
 */
type CurrencyFormattedText = {
  currency: {
    options?: CurrencyTextFormattingOptions
    abbreviation: string
  }
}

/**
 * A text type
 */
type FormattedText = {
  value: string

  /**
   * default is false
   */
  copyable?: boolean
} & (CurrencyFormattedText | {})

/**
 * Complementary data field that means it's will be visible only by user request
 */
type ComplementaryField = {
  /**
   * A name of the field
   */
  name?: string

  /**
   * A prompt of the field that displayed between name and text
   */
  prompt?: string

  /**
   * A text
   */
  text: FormattedText
}

export { CurrencyTextFormattingOptions }
export type {
  SVGImage,
  RemoteImage,
  Image,
  CurrencyFormattedText,
  FormattedText,
  ComplementaryField,
}
