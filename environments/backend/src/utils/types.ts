/* eslint-disable import/no-extraneous-dependencies */
import { ParamsDictionary } from 'express-serve-static-core'

export type ApiParams<T> = ParamsDictionary & T

export interface HttpErrorParams {
  message: string
  status?: number
}
