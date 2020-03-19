import { hot } from 'react-hot-loader/root'
import React, { FC } from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Users from 'Pages/Users'
import NewPlace from 'Pages/Places/NewPlace'

const App: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
      >
        <Users />
      </Route>
      <Route
        exact
        path="/places/new"
      >
        <NewPlace />
      </Route>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default hot(App)
