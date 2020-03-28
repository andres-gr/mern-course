import {
  useCallback,
  useReducer,
} from 'react'
import { SubmitProps } from 'Components/Input'
import {
  formReducer,
  formState,
  FormState,
  FormTypes,
} from './state'

type UseForm = (props?: FormState | (() => FormState | undefined)) => {
  handleInput: (props: SubmitProps) => void
  state: FormState
}

const useForm: UseForm = props => {
  const {
    inputs,
    isValid: formIsValid,
  } = (typeof props === 'function' ? props() : props) || {}

  const [
    state,
    dispatch,
  ] = useReducer(formReducer, formState, initState => {
    if (inputs) {
      return {
        ...initState,
        inputs: {
          ...initState.inputs,
          ...inputs,
        },
        isValid: formIsValid!,
      }
    }
    return initState
  })

  const handleInput = useCallback<(props: SubmitProps) => void>(({
    id,
    isValid,
    value,
  }) => {
    dispatch({
      payload: {
        id,
        isValid,
        value,
      },
      type: FormTypes.CHANGE,
    })
  }, [])

  return {
    handleInput,
    state,
  }
}

export default useForm
