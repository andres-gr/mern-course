import uniqueId from 'lodash/uniqueId'
import {
  Place,
  User,
} from 'Axios/api'

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

const USERS: User[] = [
  {
    id     : uniqueId('user_'),
    image  : 'https://frinkiac.com/img/S06E11/315748.jpg',
    name   : 'Cosme Fulanito',
    places : 3,
  },
]

export {
  PLACES,
  USERS,
}
