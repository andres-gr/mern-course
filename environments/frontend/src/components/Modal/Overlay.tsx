import React, {
  FC,
  FormEvent,
  ReactChild,
} from 'react'
import { SerializedStyles } from '@emotion/core'
import styled from '@emotion/styled'
import { animated } from 'react-spring'

interface OveralyProps {
  contentCSS?: SerializedStyles
  footer?: ReactChild
  footerCSS?: SerializedStyles
  header?: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  styles?: any
}

const Modal = styled(animated.div)<{}>`
  background: #FFF;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  left: 10%;
  position: fixed;
  top: 22vh;
  width: 80%;
  z-index: 100;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`

const Header = styled.div`
  background: #2A006E;
  color: #FFF;
  padding: 1rem 0.5rem;
  width: 100%;

  h2 {
    margin: 0.5rem;
  }
`

const Content = styled.div`
  padding: 1rem 0.5rem;
`

const Footer = styled(Content)``

const Overlay: FC<OveralyProps> = ({
  children,
  contentCSS,
  footer,
  footerCSS,
  header,
  onSubmit,
  styles,
}) => {
  const handleSubmit = onSubmit || ((e: FormEvent) => e.preventDefault())

  return (
    <Modal style={ styles }>
      <Header>
        <h2>{ header }</h2>
      </Header>
      <form onSubmit={ handleSubmit }>
        <Content css={ contentCSS }>
          { children }
        </Content>
        <Footer css={ footerCSS }>
          { footer }
        </Footer>
      </form>
    </Modal>
  )
}

export default Overlay
