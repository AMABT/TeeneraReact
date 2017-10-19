// @flow
import React, {PureComponent} from 'react'
import {Header, Image, Form, Button} from 'semantic-ui-react'
import Logo from '../images/logo.svg'

type Props = {
  onSubmit: ({
    email: string,
    password: string
  }) => void
}

export default class LoginForm extends PureComponent<Props> {

  handleSubmit = (event) => {
    if (event) event.preventDefault()
    const {elements} = event.target
    const email = elements['email'].value
    const password = elements['password'].value
    const {onSubmit} = this.props
    onSubmit({email, password})
  }

  render() {
    return (
      <div className="login-form">
        <Header as="h2" image inverted>
          <Image src={Logo}/>
          <div className="content">
            Login-in to your account
          </div>
        </Header>
        <Form
            onSubmit={this.handleSubmit}
            size="large"
        >
          <Form.Input
              icon="user" iconPosition="left"
              name="email" placeholder="E-mail address"
          />
          <Form.Input
              icon="lock" iconPosition="left"
              name="password" placeholder="Password" type="password"
          />
          <Button color="teal" fluid size="large" type="submit">Login</Button>
        </Form>
      </div>
    )
  }
}
