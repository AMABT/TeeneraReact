import React, {Component} from 'react'
import {Header, Image, Form, Button} from 'semantic-ui-react'
import Logo from '../images/logo.svg'

export default class LoginForm extends Component {

  render() {

    return (
      <div className="login-form">
        <Header as="h2" image inverted>
          <Image src={Logo}/>
          <div className="content">
            Login-in to your account
          </div>
        </Header>
        <Form size="large">
          <Form.Input placeholder="E-mail address"
                      icon="user" iconPosition="left"/>
          <Form.Input type="password" placeholder="Password"
                      icon="lock" iconPosition="left"/>
          <Button fluid type="submit" size="large" color="teal">Login</Button>
        </Form>
      </div>
    )
  }
}
