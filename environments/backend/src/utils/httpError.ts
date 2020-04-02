import { HttpErrorParams } from './types'

class HttpError extends Error {
  status?: number

  constructor (params: HttpErrorParams) {
    super(params.message)
    this.message = params.message
    this.status = params.status
  }
}

export default HttpError
