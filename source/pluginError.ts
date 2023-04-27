/**
 * An error can be parsed by native code
 */
export class PluginError {
  readonly code?: number
  readonly message?: string

  constructor(code?: number, message?: string) {
    this.code = code
    this.message = message
  }
}
