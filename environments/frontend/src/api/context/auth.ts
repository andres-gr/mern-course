import { createContext } from 'react'
import noop from 'lodash/noop'

export interface AuthContextValeus {
  isLogin: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValeus>({
  isLogin : false,
  login   : noop,
  logout  : noop,
})

export default AuthContext
