import { ValidationError } from 'express-validator'
import { HttpErrorParams } from './types'

class HttpError extends Error {
  errors?: ValidationError[]

  status?: number

  constructor (params: HttpErrorParams) {
    super(params.message)
    this.message = params.message
    this.errors = params.errors
    this.status = params.status
  }
}

export default HttpError
