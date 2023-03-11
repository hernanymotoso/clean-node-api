export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Inavalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
