import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ChildrenProps } from 'Utils/types'
import { useUserStore } from 'Api/user'

const Base: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const fetchUser = useUserStore(state => state.fetchUser)

  const name = useUserStore(state => state.name)

  const email = useUserStore(state => state.email)

  return (
    <div>
      <h1>Base stuff</h1>
      <div>
        <Link
          to="/"
        >
          Home
        </Link>
      </div>
      { children }
      <div>
        <button
          type="button"
          onClick={ fetchUser }
        >
          press
        </button>
      </div>
      <p>{ name }</p>
      <p>{ email }</p>
    </div>
  )
}

export default Base
