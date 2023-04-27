import {
  ComplementaryField,
  FormattedText,
  Image,
} from './visualRepresentation'
import { AccountAddress, AssetAddress } from './address'

/**
 * An event type
 *
 * @remarks
 * If used a well-known type user will see related icon of event
 */
type EventType = 'income-transaction' | 'outcome-transaction' | string

/**
 * An event general preview media type
 */
type EventPreviewMediaSignificant = { media: {} }

/**
 * An event regular preview type
 */
type EventPreviewRegularSignificant = {
  regular: {
    images: Image[]
    text: FormattedText
  }
}

/**
 * An event preview type
 */
type EventPreviewSignificant = {} & (
  | EventPreviewRegularSignificant
  | EventPreviewMediaSignificant
)

/**
 * An event visual preview type
 */
type EventPreview = {
  significant: EventPreviewSignificant
  complementary: ComplementaryField[]
}

/**
 * An type that represents an event.
 */
type Event = {
  /**
   * Date of the event, seconds
   */
  date: number

  /**
   * An unique hash of the event
   */
  hash: string

  /**
   * A type of event {@link EventType | EventType}
   */
  type: EventType

  /**
   * Set to `true` if event looks as malicious to hide some part of user interface
   */
  malicious: boolean

  /**
   * Set to `true` if event should be updated in future by user request.
   */
  incomplete: boolean

  /**
   * Address of releated asset, e.g. token contract address
   *
   * @remarks
   * This field used by native code to group event when user see an events of the asset, e.g. events for specified coin
   * {@link AssetAddress | AssetAddress}
   */
  asset: AssetAddress

  /**
   * A visual preview of event {@link EventPreview | EventPreview}
   */
  preview: EventPreview
}

/**
 * A request to retrieve updated verions of event for specified account address
 */
type EventsProviderUpdateRequest = {
  /**
   * An address of owner of the event
   */
  owner: string

  /**
   * Previous version of event that have been marked as `incomplete`
   */
  event: Event
}

/**
 * An additional fields to the {@link EventsProviderFetchRequest | EventsProviderFetchRequest} to retrieve events for specified account address before specified date
 */
type EventsProviderFetchRequestBefore = {
  /**
   * A timestamp, seconds
   */
  before: number
}

/**
 * An additional fields to the {@link EventsProviderFetchRequest | EventsProviderFetchRequest} to retrieve events for specified account address after specified date
 */
type EventsProviderFetchRequestAfter = {
  /**
   * A timestamp, seconds
   */
  after: number
}

/**
 * A request to retrieve events for specified account address.
 */
type EventsProviderFetchRequest = {
  /**
   * An address which events fetched for {@link AccountAddress | AccountAddress}
   */
  address: AccountAddress
} & (EventsProviderFetchRequestAfter | EventsProviderFetchRequestBefore)

/**
 * An type that used by native code to manipulate with events
 */
type EventsProvider = {
  /**
   * Method that can be invoked by native code to update a event if it's property `incomplete` marked as `true`
   *
   * @remarks
   * It strongly recommended to return event which field `incomplete` marked as `false` to avoid unnecessary network usage
   *
   * @param args - {@link EventsProviderUpdateRequest | EventsProviderUpdateRequest}
   * @returns Promise with updated {@link Event | Event}
   */
  update(args: EventsProviderUpdateRequest): Promise<Event>

  /**
   * Method that invoked by native code to fetch list of events for specified account address
   *
   * @remarks
   * Each {@link Event | Event} in can have `incomplete` flag to retrieve additional info by user request later
   *
   * @param args - {@link EventsProviderFetchRequest | EventsProviderFetchRequest}
   * @returns Promise with list of {@link Event | Event}
   */
  fetch(args: EventsProviderFetchRequest): Promise<Event[]>
}

export type {
  EventsProvider,
  EventsProviderFetchRequest,
  EventsProviderFetchRequestAfter,
  EventsProviderFetchRequestBefore,
  EventsProviderUpdateRequest,
  EventType,
  Event,
  EventPreview,
  EventPreviewMediaSignificant,
  EventPreviewRegularSignificant,
  EventPreviewSignificant,
}
