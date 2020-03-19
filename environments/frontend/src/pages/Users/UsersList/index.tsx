import React, { FC } from 'react'
import { User } from 'Axios/api'
import styled from '@emotion/styled'
import Card from 'Components/Card'
import UsersListItem from './Item'

interface UsersListProps {
  items: User[]
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  max-width: 50rem;
  padding: 0;
  width: 90%;
`

const UsersList: FC<UsersListProps> = ({
  items,
}) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found!</h2>
        </Card>
      </div>
    )
  }

  return (
    <List>
      {
        items.map(item => (
          <UsersListItem
            key={ item.id }
            { ...item }
          />
        ))
      }
    </List>
  )
}

export default UsersList
