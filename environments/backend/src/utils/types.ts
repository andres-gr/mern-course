/* eslint-disable import/no-extraneous-dependencies */
import {
  ParamsDictionary,
  RequestHandler,
} from 'express-serve-static-core'
import { ValidationError } from 'express-validator'

export interface HttpErrorParams {
  message: string
  errors?: ValidationError[]
  status?: number
}

export type ReqHandler<P = never, ResBody = never, ReqBody = never> = RequestHandler<ParamsDictionary & P, ResBody, ReqBody>
