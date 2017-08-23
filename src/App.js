import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {Container, Menu} from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';

class App extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <Menu.Item as={Link} to="/">
            Contacts list
          </Menu.Item>
          <Menu.Item as={Link} to="/contacts/new">
            Contacts list
          </Menu.Item>
        </Menu>
        <Switch>
          <Route exact path="/" component={ContactListPage}/>
          <Route path="/contacts/new" component={ContactFormPage}/>
          <Route path="/contacts/edit:_id" component={ContactFormPage}/>
        </Switch>
      </Container>
    )
  }
}

export default App;
