import {
  css,
  SerializedStyles,
} from '@emotion/core'

export interface BaseButtonStylesProps {
  danger?: boolean
  inverse?: boolean
  size?: string
}

type BaseButtonStyles = (props: BaseButtonStylesProps) => SerializedStyles

const baseButtonStyles: BaseButtonStyles = ({
  danger,
  inverse,
  size,
}) => css`
  background: #FF0055;
  border-radius: 4px;
  border: 1px solid #FF0055;
  color: #FFF;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  margin-right: 1rem;
  padding: 0.5rem 1.5rem;
  text-decoration: none;

  :focus {
    outline: none;
  }

  :active,
  :hover {
    background: #FF4382;
    border-color: #FF4382;
  }

  :disabled,
  :active:disabled,
  :hover:disabled {
    background: #CCC;
    border-color: #CCC;
    color: #979797;
    cursor: not-allowed;
  }

  ${inverse && css`
    background: transparent;
    color: #FF0055;

    :hover,
    :active {
      color: #FFF;
      background: #FF0055;
    }
  `}

  ${danger && css`
    background: #830000;
    border-color: #830000;

    :hover,
    :active {
      background: #F34343;
      border-color: #F34343;
    }
  `}

  ${size === 'small' && css`
    font-size: 0.8rem;
  `}

  ${size === 'big' && css`
    font-size: 1.5rem;
  `}
`

export default baseButtonStyles
