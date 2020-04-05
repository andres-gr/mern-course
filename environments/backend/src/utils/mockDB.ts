import faker from 'faker'
import {
  Place,
  User,
  UserPasswords,
} from 'Api/models'

const PLACES: Place[] = [
  {
    address     : faker.address.streetAddress(true),
    description : faker.company.catchPhrase(),
    id          : 'place_id_1',
    image       : faker.image.business(),
    location    : {
      lat : 3,
      lng : 3,
    },
    title  : faker.company.companyName(),
    userId : 'user_id_1',
  },
]

const USERS: User[] = [
  {
    email  : faker.internet.email(),
    id     : 'user_id_1',
    image  : faker.image.avatar(),
    name   : faker.name.findName(),
    places : 1,
  },
]

const USER_PASSWORDS: UserPasswords = {}

export {
  PLACES,
  USER_PASSWORDS,
  USERS,
}
