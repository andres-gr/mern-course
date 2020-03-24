import { hot } from 'react-hot-loader/root'
import React, { FC } from 'react'
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

const App: FC = () => (
  <BrowserRouter>
    <Navbar />
    <Main>
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
        <Redirect to="/" />
      </Switch>
    </Main>
  </BrowserRouter>
)

export default hot(App)
