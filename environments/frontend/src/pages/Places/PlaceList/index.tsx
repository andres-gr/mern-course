import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Place } from 'Axios/api'
import Card from 'Components/Card'
import Button from 'Components/Button'
import PlaceItem from './PlaceItem'

interface PlaceListProps {
  items: Place[]
}

const List = styled.ul`
  list-style: none;
  margin: 1rem auto;
  max-width: 40rem;
  padding: 0;
  width: 90%;
`

const PlaceList: FC<PlaceListProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <List className="center">
        <Card>
          <h2>No places found. Create one?</h2>
          <Button
            to="/places/new"
            type="button"
          >
            Share Place
          </Button>
        </Card>
      </List>
    )
  }

  return (
    <List>
      {
        items.map(({
          id,
          ...rest
        }) => (
          <PlaceItem
            key={ id }
            id={ id }
            { ...rest }
          />
        ))
      }
    </List>
  )
}

export default PlaceList
