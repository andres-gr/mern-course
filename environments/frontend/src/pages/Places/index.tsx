import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import uniqueId from 'lodash/uniqueId'
import { Place } from 'Axios/api'
import PlaceList from './PlaceList'

interface PlacesParams {
  userId: string
}

const PLACES: Place[] = [
  {
    address     : 'Manhattan, NY 10036, United States',
    description : 'This place here',
    id          : uniqueId('place_'),
    image       : 'https://placeimg.com/640/480/arch',
    location    : {
      lat : 40.7722858,
      lng : -73.9973887,
    },
    title  : 'Times Square',
    userId : 'user_1',
  },
  {
    address     : 'Manhattan, NY 10036, United States',
    description : 'This place here',
    id          : uniqueId('place_'),
    image       : 'https://placeimg.com/640/480/arch',
    location    : {
      lat : 40.7722858,
      lng : -73.9973887,
    },
    title  : 'Times Square',
    userId : 'user_2',
  },
]

const Places: FC = () => {
  const { userId } = useParams<PlacesParams>()

  const currentUserPlaces = PLACES.filter(({ userId: uId }) => uId === userId)

  return <PlaceList items={ currentUserPlaces } />
}

export default Places
