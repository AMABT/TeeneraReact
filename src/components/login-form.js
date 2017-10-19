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

type InputValue = { value: string }

export default class LoginForm extends PureComponent<Props> {

  email: string = ''
  password: string = ''

  handleSubmit = (event: Event) => {
    if (event) event.preventDefault()
    const {email, password} = this
    const {onSubmit} = this.props
    onSubmit({email, password})
  }

  handleEmailChange = (event: Event, {value}: InputValue) => {
    this.email = value
  }

  handlePasswordChange = (event: Event, {value}: InputValue) => {
    this.password = value
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
        <Form onSubmit={this.handleSubmit} size="large">
          <Form.Input
              icon="user" iconPosition="left"
              name="email" onChange={this.handleEmailChange}
              placeholder="E-mail address"
          />
          <Form.Input
              icon="lock" iconPosition="left"
              name="password" onChange={this.handlePasswordChange}
              placeholder="Password" type="password"
          />
          <Button color="teal" fluid size="large" type="submit">Login</Button>
        </Form>
      </div>
    )
  }
}
