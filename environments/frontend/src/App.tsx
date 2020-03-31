import { hot } from 'react-hot-loader/root'
import React, {
  FC,
  useCallback,
  useState,
} from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Main from 'Styles/Main'
import Navbar from 'Components/Navbar'
import Users from 'Pages/Users'
import Places from 'Pages/Places'
import NewPlace from 'Pages/Places/NewPlace'
import UpdatePlace from 'Pages/Places/UpdatePlace'
import Auth from 'Pages/Auth'
import AuthContext from 'Api/context/auth'

const { Provider } = AuthContext

const App: FC = () => {
  const [
    isLogin,
    setIsLogin,
  ] = useState(false)

  const login = useCallback(() => setIsLogin(true), [])

  const logout = useCallback(() => setIsLogin(false), [])

  const routes = !isLogin
    ? (
      <Switch>
        <Route
          exact
          path="/"
        >
          <Users />
        </Route>
        <Route
          exact
          path="/:userId/places"
        >
          <Places />
        </Route>
        <Route
          exact
          path="/auth"
        >
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
    : (
      <Switch>
        <Route
          exact
          path="/"
        >
          <Users />
        </Route>
        <Route
          exact
          path="/:userId/places"
        >
          <Places />
        </Route>
        <Route
          exact
          path="/places/new"
        >
          <NewPlace />
        </Route>
        <Route
          exact
          path="/places/:placeId"
        >
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    )

  return (
    <BrowserRouter>
      <Provider
        value={
          {
            isLogin,
            login,
            logout,
          }
        }
      >
        <Navbar />
        <Main>
          { routes }
        </Main>
      </Provider>
    </BrowserRouter>
  )
}

export default hot(App)
