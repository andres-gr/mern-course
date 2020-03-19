import React, { FC } from 'react'
import styled from '@emotion/styled'

interface CardProps {
  className?: string
  style?: {}
}

const Container = styled.div`
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 0;
  overflow: hidden;
  padding: 1rem;
  position: relative;
`

const Card: FC<CardProps> = ({
  children,
  className,
  style,
}) => (
  <Container
    className={ className }
    style={ style }
  >
    { children }
  </Container>
)

export default Card
