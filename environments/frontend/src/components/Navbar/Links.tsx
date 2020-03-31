import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import AuthContext from 'Api/context/auth'
import Button from 'Components/Button'

const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  li {
    margin: 1rem;
  }

  a {
    border: 1px solid transparent;
    color: #292929;
    padding: 0.5rem;
    text-decoration: none;
  }

  a:hover,
  a:active,
  a.active {
    background: #F8DF00;
    border-color: #292929;
    color: #292929;
  }

  button {
    background: transparent;
    border: 1px solid #292929;
    color: #292929;
    cursor: pointer;
    font: inherit;
    padding: 0.5rem;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    color: white;
    background: #292929;
  }

  @media (min-width: 768px) {
    & {
      flex-direction: row;
    }

    li {
      margin: 0 0.5rem;
    }

    a {
      color: white;
      text-decoration: none;
    }

    button {
      background: transparent;
      border: 1px solid white;
      color: white;
    }
    
    button:hover,
    button:active {
      color: #292929;
      background: #F8DF00;
    }
  }
`

const Links = () => {
  const auth = useContext(AuthContext)

  return (
    <List>
      <li>
        <NavLink
          exact
          to="/"
        >
          ALL USERS
        </NavLink>
      </li>
      {
        auth.isLogin && (
          <>
            <li>
              <NavLink to="/user_3/places">
                MY PLACES
              </NavLink>
            </li>
            <li>
              <NavLink to="/places/new">
                ADD PLACE
              </NavLink>
            </li>
          </>
        )
      }
      {
        !auth.isLogin
          ? (
            <li>
              <NavLink to="/auth">
                AUTHENTICATE
              </NavLink>
            </li>
          )
          : (
            <li>
              <Button
                inverse
                onClick={ auth.logout }
              >
                LOGOUT
              </Button>
            </li>
          )
      }
    </List>
  )
}

export default Links
