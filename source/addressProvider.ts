type GenerateAddressRequest = {
  /**
   * HEX
   */
  publicKey: string
}

type AddressValue = {
  address: string
}

type ValidateAddressPurposeTransfer = {
  transfer: {}
}

type ValidateAddressPurpose = {} | ValidateAddressPurposeTransfer

type ValidateAddressRequest = {
  address: string
  purpose?: ValidateAddressPurpose
}

/**
 * An type that used by native code to manipulate with custom addresses
 */
type AddressProvider = {
  /**
   * Method that invoked by native code to generate account address based on it's publicKey
   *
   * @param args - {@link GenerateAddressRequest | GenerateAddressRequest}
   * @returns Promise with a {@link AddressValue | AddressValue}
   */
  generate(args: GenerateAddressRequest): Promise<AddressValue>

  /**
   * Method that invoked by native code to validate address
   *
   * @param args - {@link ValidateAddressRequest | ValidateAddressRequest}
   */
  validate(args: ValidateAddressRequest): Promise<void>
}

export type {
  AddressProvider,
  ValidateAddressPurpose,
  ValidateAddressPurposeTransfer,
  ValidateAddressRequest,
  GenerateAddressRequest,
  AddressValue,
}
