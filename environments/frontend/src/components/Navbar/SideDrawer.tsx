import React, { FC } from 'react'
import styled from '@emotion/styled'
import {
  animated,
  useSpring,
} from 'react-spring'
import Portal from 'Components/Portal'

interface SideDrawerProps {
  onClick: () => void
  show: boolean
}

const Drawer = styled(animated.aside)`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  width: 70%;
  z-index: 100;
`

const SideDrawer: FC<SideDrawerProps> = ({
  children,
  onClick,
  show,
}) => {
  const props = useSpring({
    config    : { duration: 150 },
    transform : `translateX(${show ? '0' : '-100%'})`,
  })

  return (
    <Portal>
      <Drawer
        style={ props }
        onClick={ onClick }
      >
        { children }
      </Drawer>
    </Portal>
  )
}

export default SideDrawer
