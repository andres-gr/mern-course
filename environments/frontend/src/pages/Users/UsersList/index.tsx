import React, { FC } from 'react'
import { User } from 'Axios/api'
import UsersListItem from './Item'

interface UsersListProps {
  items: User[]
}

const UsersList: FC<UsersListProps> = ({
  items,
}) => {
  if (items.length === 0) {
    return (
      <div>
        <h2>No users found!</h2>
      </div>
    )
  }

  return (
    <ul>
      {
        items.map(item => (
          <UsersListItem
            key={ item.id }
            { ...item }
          />
        ))
      }
    </ul>
  )
}

export default UsersList
