// @flow
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Dashboard from './containers/dashboard'

const App = () => (
  <div className="pusher">
    <Switch>
      <Route component={Dashboard} path="/dashboard"/>
      <Route component={Home} path="/"/>
    </Switch>
  </div>
)

export default App
