import {
  User,
  UsersApi,
} from 'Axios/api'
import {
  AnyPromise,
  ZustandActions,
} from 'Utils/types'
import delay from 'Utils/delay'
import UserTypes from './types'

export interface UserActions<S = User> {
  setUser: (user: S) => (void | Promise<void>)
  fetchUser: AnyPromise
}

const UsersAxios = new UsersApi()

const userActions: ZustandActions<User, UserActions> = set => ({
  fetchUser: async () => {
    const {
      data: { user },
    } = await UsersAxios.userGet()
    if (user) {
      set(state => {
        state.email = user.email
        state.id = user.id
        state.name = user.name
      }, UserTypes.FETCH_USER)
    }
  },
  setUser: async user => {
    await delay(500)
    set(state => {
      state.email = user.email
      state.name = user.name
      state.id = user.id
    }, UserTypes.SET_USER)
  },
})

export default userActions
