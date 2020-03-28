import React, { FC } from 'react'
import { USERS } from 'Utils/mockStore'
import UsersList from './UsersList'

const Users: FC = () => <UsersList items={ USERS } />

export default Users
