import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Validator } from 'Utils/validators'
import {
  inputReducer,
  inputState,
  InputTypes,
} from './state'

export interface SubmitProps {
  id: string
  isValid: boolean
  value: string
}

interface InputProps {
  cols?: number
  errorMessage: string
  id: string
  label: string
  onInput: (props: SubmitProps) => void
  placeholder: string
  isValid?: boolean
  name?: string
  rows?: number
  type?: string
  validators?: Validator[]
  value?: string
}

interface ControlProps {
  invalid?: boolean
}

const Control = styled.div<ControlProps>`
  margin: 1rem 0;

  label,
  input,
  textarea {
    display: block;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    background: #F8F8F8;
    border: 1px solid #CCC;
    font: inherit;
    padding: 0.15rem 0.25rem;
    width: 100%;
  }

  input:focus,
  textarea:focus {
    background: #EBEBEB;
    border-color: #510077;
    outline: none;
  }

  ${({ invalid }) => invalid && css`
    label,
    p {
      color: red;
    }

    input,
    textarea {
      background: #FFD1D1;
      border-color: red;
    }
  `}
`

const Input: FC<InputProps> = ({
  cols = 30,
  errorMessage,
  id,
  isValid,
  label,
  name = id,
  onInput,
  placeholder,
  rows = 3,
  type = 'text',
  validators = [],
  value,
}) => {
  const [
    state,
    dispatch,
  ] = useReducer(inputReducer, inputState, initState => {
    if (value) {
      return {
        ...initState,
        isValid,
        value,
      }
    }
    return initState
  })

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      payload: {
        validators,
        value: e.target.value,
      },
      type: InputTypes.CHANGE,
    })
  }, [validators])

  const handleTouched = useCallback(() => {
    dispatch({
      type: InputTypes.TOUCHED,
    })
  }, [])

  useEffect(() => {
    onInput({
      id,
      isValid : state.isValid!,
      value   : state.value,
    })
  }, [
    id,
    onInput,
    state.isValid,
    state.value,
  ])

  return useMemo(() => (
    <Control invalid={ !state.isValid && state.isTouched }>
      <label htmlFor={ id }>
        { label }
      </label>
      {
        type !== 'textarea'
          ? (
            <input
              id={ id }
              name={ name }
              placeholder={ placeholder }
              type={ type }
              value={ state.value }
              onBlur={ handleTouched }
              onChange={ handleChange }
            />
          )
          : (
            <textarea
              cols={ cols }
              id={ id }
              name={ name }
              placeholder={ placeholder }
              rows={ rows }
              value={ state.value }
              onBlur={ handleTouched }
              onChange={ handleChange }
            />
          )
      }
      {
        !state.isValid && state.isTouched && (
          <p>
            { errorMessage }
          </p>
        )
      }
    </Control>
  ), [
    cols,
    errorMessage,
    handleChange,
    handleTouched,
    id,
    label,
    name,
    placeholder,
    rows,
    state.isTouched,
    state.isValid,
    state.value,
    type,
  ])
}

export default Input
