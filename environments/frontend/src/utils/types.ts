import { ReactNode } from 'react'
import {
  GetState,
  State,
  StoreApi,
} from 'zustand'

export type AnyPromise = (...args: any[]) => (void | Promise<void>)

export interface ChildrenProps {
  children: ReactNode
}

export type Impossible<K extends keyof any> = {
  [P in K]: never
}

export type NoExtraProperties<T, U extends T = T> = U & Impossible<Exclude<keyof U, keyof T>>

export type ZustandActions<S, A> = (set: ZustandNamedSet<S>, get: GetState<S>) => A

export type ZustandMiddleware<S> = (config: ZustandStateCreator<S>) => ZustandStateCreator<S>

export type ZustandNamedSet<S> = (partial: ((state: S) => any), name: string) => void

export type ZustandStateCreator<S extends State> = (
  set: ZustandNamedSet<S>,
  get: GetState<S>,
  api: StoreApi<S>,
) => S
