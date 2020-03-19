import React, { FC } from 'react'
import uniqueId from 'lodash/uniqueId'
import { User } from 'Axios/api'
import UsersList from './UsersList'

const USERS: User[] = [
  {
    id     : uniqueId('user_'),
    image  : 'https://frinkiac.com/img/S06E11/315748.jpg',
    name   : 'Cosme Fulanito',
    places : 3,
  },
]

const Users: FC = () => <UsersList items={ USERS } />

export default Users
