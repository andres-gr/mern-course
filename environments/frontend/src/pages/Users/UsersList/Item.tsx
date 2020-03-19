import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { User } from 'Axios/api'
import Avatar from 'Components/Avatar'
import Card from 'Components/Card'

const Content = styled(Card)`
  padding: 0;
`

const Image = styled.div`
  height: 4rem;
  margin-right: 1rem;
  width: 4rem;
`

const Info = styled.div`
  h2 {
    color: #FFD900;
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0 0 0.5rem 0;
  }

  h3 {
    margin: 0;
  }
`

const UserItem = styled.li`
  margin: 1rem;
  min-width: 17.5rem;
  width: calc(45% - 2rem);

  a {
    align-items: center;
    background: #292929;
    color: white;
    display: flex;
    height: 100%;
    padding: 1rem;
    text-decoration: none;
    width: 100%;

    :active,
    :hover {
      background: #FFD900;

      ${Info} h2,
      ${Info} h3 {
        color: #292929;
      }
    }
  }
`

const UsersListItem: FC<User> = ({
  id,
  image,
  name,
  places,
}) => (
  <UserItem>
    <Content>
      <Link to={ `/${id}/places` }>
        <Image>
          <Avatar
            alt="name"
            image={ image }
          />
        </Image>
        <Info>
          <h2>{ name }</h2>
          <h3>{ places } { places > 1 ? 'Places' : 'Place' }</h3>
        </Info>
      </Link>
    </Content>
  </UserItem>
)

export default UsersListItem
