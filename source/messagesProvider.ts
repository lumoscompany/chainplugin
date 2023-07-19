import { AccountAddress, AssetAddress } from './address'

/**
 * An type that represents a transfer user action
 */
type MessageTransfer = {
  transfer: {
    /**
     * Address of account owner
     */
    sender: AccountAddress

    /**
     * An destination address
     */
    recipient: AccountAddress

    /**
     * An asset address
     */
    asset: AssetAddress

    /**
     * Value to be sent,
     * BigUInt
     */
    amount: string
  }
}

/**
 * A type that represents an user action
 */
type Message = {} & MessageTransfer

/**
 * A request to prepare message to be sent
 */
type BakeMessageRequest = {
  /**
   * A message to be baked {@link Message | Message}
   */
  message: Message
}

/**
 * A type that represents an prepared (but not signed) message
 */
type BakedMessageData = {
  /**
   * Data to be signed by user
   * Base64
   */
  shouldSign: string

  /**
   * Estimated fees for the message execution, measured in native network asset
   * BigUInt
   */
  estimatedFees: string

  /**
   * Data to internal plugin usage
   * Base64
   */
  extraData?: string
}

/**
 * A request to send message
 */
type SendMessageRequest = {
  /**
   * A message previously prepared message {@link Message | Message}
   */
  originalMessage: Message

  /**
   * A previosly prepared message {@link BakedMessageData | BakedMessageData},
   */
  bakedMessage: BakedMessageData

  /**
   * Signed data
   * Base64
   */
  userSignature: string
}

/**
 * A type that represents a successfully sent message
 */
type SendedMessageData = {
  originalMessage: Message
  eventHash: string
}

/**
 * An type that used by native code to manipulate with messages
 */
type MessagesProvider = {
  /**
   * Method that invoked by native code to prepare an message to be sent
   *
   * @param args - {@link BakeMessageRequest | BakeMessageRequest}
   * @returns Promise with a {@link BakedMessageData | BakedMessageData}
   */
  bake(args: BakeMessageRequest): Promise<BakedMessageData>

  /**
   * Method that invoked by native code to send already baked and signed message
   *
   * @param args - {@link SendMessageRequest | SendMessageRequest}
   * @returns Promise with a {@link SendedMessageData | SendedMessageData}
   */
  send(args: SendMessageRequest): Promise<SendedMessageData>
}

export type {
  MessagesProvider,
  Message,
  MessageTransfer,
  BakeMessageRequest,
  BakedMessageData,
  SendMessageRequest,
  SendedMessageData,
}
