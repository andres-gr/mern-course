import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { PLACES } from 'Utils/mockStore'
import PlaceList from './PlaceList'

interface PlacesParams {
  userId: string
}

const Places: FC = () => {
  const { userId } = useParams<PlacesParams>()

  const currentUserPlaces = PLACES.filter(({ userId: uId }) => uId === userId)

  return <PlaceList items={ currentUserPlaces } />
}

export default Places
