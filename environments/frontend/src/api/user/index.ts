import { User } from 'Axios/api'
import ZustandStoreCreator from 'Api/store'
import userActions, { UserActions } from './actions'
import userState from './state'
import UserTypes from './types'

class UserStore extends ZustandStoreCreator<User, UserActions> {
  constructor () {
    super(
      {
        actions : userActions,
        name    : UserTypes.USER_STORE,
        state   : userState,
      },
    )
  }
}

const userStore = new UserStore()

const [
  useUserStore,
  userApi,
] = userStore.createStore()

export {
  userApi,
  useUserStore,
}
