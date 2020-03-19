import React, { FC } from 'react'
import styled from '@emotion/styled'

const MainHeader = styled.header`
  align-items: center;
  background: #FF0055;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  display: flex;
  height: 4rem;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

const Header: FC = ({ children }) => (
  <MainHeader>
    { children }
  </MainHeader>
)

export default Header
