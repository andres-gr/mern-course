import React, { FC } from 'react'
import styled from '@emotion/styled'
import { animated } from 'react-spring'

interface BackdropProps {
  onClick: () => void
  styles?: any
}

const BackdropContent = styled(animated.div)<{}>`
  background: rgba(0, 0, 0, 0.75);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

const Backdrop: FC<BackdropProps> = ({
  onClick,
  styles,
}) => (
  <BackdropContent
    style={ styles }
    onClick={ onClick }
  />
)

export default Backdrop
