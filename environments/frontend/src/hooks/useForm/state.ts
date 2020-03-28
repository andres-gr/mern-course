import { Reducer } from 'react'
import { ReducerAction } from 'Utils/types'
import { SubmitProps } from 'Components/Input'

enum FormTypes {
  CHANGE = 'CHANGE'
}

export interface FormState {
  inputs: {
    [key: string]: {
      isValid: boolean
      value: string
    }
  }
  isValid: boolean
}

const formState: FormState = {
  inputs  : {},
  isValid : false,
}

const formReducer: Reducer<FormState, ReducerAction<FormTypes, SubmitProps>> = (state, {
  payload,
  type,
}) => {
  switch (type) {
    case FormTypes.CHANGE: {
      if (payload) {
        const {
          id,
          isValid,
          value,
        } = payload
        const { inputs } = state
        const formIsValid = Object.entries(inputs).some(([
          key,
          { isValid: inputIsValid },
        ]) => {
          if (key !== id) return !inputIsValid
          return !isValid
        })
        return {
          ...state,
          inputs: {
            ...inputs,
            [id]: {
              isValid,
              value,
            },
          },
          isValid: !formIsValid,
        }
      }
      return {
        ...state,
      }
    }
    default:
      return state
  }
}

export {
  formReducer,
  formState,
  FormTypes,
}
