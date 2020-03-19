/* eslint-disable import/no-extraneous-dependencies */
import { ParamsDictionary } from 'express-serve-static-core'

export type ApiParams<T> = ParamsDictionary & T

export class HttpError extends Error {
  status?: number

  constructor (params: HttpErrorParams) {
    super(params.message)
    this.message = params.message
    this.status = params.status
  }
}

export interface HttpErrorParams {
  message: string
  status?: number
}
