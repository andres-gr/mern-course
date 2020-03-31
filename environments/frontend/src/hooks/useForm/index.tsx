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
  handleUpdate: (props: FormState) => void
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
        isValid: !!formIsValid,
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

  const handleUpdate = useCallback<(props: FormState) => void>(({
    inputs: updateInputs,
    isValid,
  }) => {
    dispatch({
      payload: {
        inputs: updateInputs,
        isValid,
      },
      type: FormTypes.UPDATE,
    })
  }, [])

  return {
    handleInput,
    handleUpdate,
    state,
  }
}

export default useForm
