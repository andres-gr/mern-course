import React, {
  FC, useCallback, useState,
} from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import Backdrop from 'Components/Backdrop'
import SideDrawer from './SideDrawer'
import Header from './Header'
import Links from './Links'

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 3rem;
  justify-content: space-around;
  margin-right: 2rem;
  width: 3rem;

  span {
    background: white;
    display: block;
    height: 2.5px;
    width: 3rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Title = styled.h1`
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const SideNav = styled.nav`
  height: 100%;
`

const Navbar: FC = () => {
  const [
    open,
    setOpen,
  ] = useState(false)

  const handleDrawerClose = useCallback(() => setOpen(false), [])

  const handleDrawerOpen = () => setOpen(true)

  return (
    <>
      { open && <Backdrop onClick={ handleDrawerClose } /> }
      <SideDrawer
        show={ open }
        onClick={ handleDrawerClose }
      >
        <SideNav>
          <Links />
        </SideNav>
      </SideDrawer>
      <Header>
        <Button
          type="button"
          onClick={ handleDrawerOpen }
        >
          <span />
          <span />
          <span />
        </Button>
        <Title>
          <Link to="/">
            Places App
          </Link>
        </Title>
        <Nav>
          <Links />
        </Nav>
      </Header>
    </>
  )
}

export default Navbar
