import React, {
  FC,
  useMemo,
} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

interface InputProps {
  id: string
  label: string
  placeholder: string
  cols?: number
  name?: string
  rows?: number
  type?: string
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
  id,
  label,
  name = id,
  placeholder,
  rows = 3,
  type = 'text',
}) => useMemo(() => (
  <Control>
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
          />
        )
        : (
          <textarea
            cols={ cols }
            id={ id }
            name={ name }
            placeholder={ placeholder }
            rows={ rows }
          />
        )
    }
  </Control>
), [
  cols,
  id,
  label,
  name,
  placeholder,
  rows,
  type,
])

export default Input
