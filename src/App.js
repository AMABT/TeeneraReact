import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/home';

class App extends Component {

  render() {
    return (
      <div className="pusher">
        <Switch>
          <Route exact path="/" component={Home}/>
          {/*<Route path="/contacts/edit:_id" component={ContactFormPage}/>*/}
        </Switch>
      </div>
    )
  }
}

export default App;
