import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import baseButtonStyles, { BaseButtonStylesProps } from './styles'

interface ButtonProps extends BaseButtonStylesProps {
  disabled?: boolean
  exact?: boolean
  href?: string
  onClick?: () => void
  to?: string
  type?: 'submit' | 'reset' | 'button'
}

const AnchorBtn = styled.a<BaseButtonStylesProps>`
  ${props => baseButtonStyles(props)}
`

const LinkBtn = styled(Link)<BaseButtonStylesProps>`
  ${props => baseButtonStyles(props)}
`

const RegularBtn = styled.button<BaseButtonStylesProps>`
  ${props => baseButtonStyles(props)}
`

const Button: FC<ButtonProps> = ({
  children,
  danger,
  disabled,
  href,
  inverse,
  onClick,
  size = 'default',
  to,
  type = 'button',
}) => {
  if (href) {
    return (
      <AnchorBtn
        danger={ danger }
        href={ href }
        inverse={ inverse }
        size={ size }
      >
        { children }
      </AnchorBtn>
    )
  }
  if (to) {
    return (
      <LinkBtn
        danger={ danger }
        inverse={ inverse }
        size={ size }
        to={ to }
      >
        { children }
      </LinkBtn>
    )
  }
  return (
    <RegularBtn
      danger={ danger }
      disabled={ disabled }
      inverse={ inverse }
      size={ size }
      type={ type }
      onClick={ onClick }
    >
      { children }
    </RegularBtn>
  )
}

export default Button
