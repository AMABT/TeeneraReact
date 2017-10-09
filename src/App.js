import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Dashboard from './containers/dashboard'

class App extends Component {

  render() {
    return (
      <div className="pusher">
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}

export default App;
