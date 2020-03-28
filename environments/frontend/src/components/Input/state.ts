import { Reducer } from 'react'
import { ReducerAction } from 'Utils/types'
import {
  validate,
  Validator,
} from 'Utils/validators'

enum InputTypes {
  CHANGE = 'CHANGE',
  TOUCHED = 'TOUCHED',
}

const inputState: InputState = {
  isTouched  : false,
  isValid    : false,
  validators : [],
  value      : '',
}

export interface InputState {
  value: string
  isValid?: boolean
  isTouched?: boolean
  validators?: Validator[]
}

const inputReducer: Reducer<InputState, ReducerAction<InputTypes, InputState>> = (state, {
  payload,
  type,
}) => {
  switch (type) {
    case InputTypes.CHANGE: {
      return {
        ...state,
        isValid : validate(payload!.value, payload!.validators || []),
        value   : payload!.value,
      }
    }
    case InputTypes.TOUCHED: {
      return {
        ...state,
        isTouched: true,
      }
    }
    default:
      return state
  }
}

export {
  inputReducer,
  inputState,
  InputTypes,
}
