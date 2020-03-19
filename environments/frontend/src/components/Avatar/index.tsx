import React, { FC } from 'react'
import styled from '@emotion/styled'

interface AvatarProps {
  alt: string
  image: string
  className?: string
  style?: {}
  width?: number
}

const Container = styled.div`
  align-items: center;
  display: flex; 
  height: 100%;
  justify-content: center;
  width: 100%;

  img {
    border-radius: 50%;
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`

const Avatar: FC<AvatarProps> = ({
  alt,
  className,
  image,
  style,
  width,
}) => (
  <Container
    className={ className }
    style={ style }
  >
    <img
      alt={ alt }
      src={ image }
      style={
        {
          height: width,
          width,
        }
      }
    />
  </Container>
)

export default Avatar
