import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import Header from './Header'

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

const Navbar = () => (
  <Header>
    <Button type="button">
      <span />
      <span />
      <span />
    </Button>
    <Title>
      <Link to="/">
        Places App
      </Link>
    </Title>
    <nav>...</nav>
  </Header>
)

export default Navbar
