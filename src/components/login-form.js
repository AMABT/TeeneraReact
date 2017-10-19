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

type FormInput = typeof Form.Input

export default class LoginForm extends PureComponent<Props> {

  emailField: FormInput
  passwordField: FormInput

  handleSubmit = (event: Event) => {
    if (event) event.preventDefault()
    const email = this.emailField.value
    const password = this.passwordField.value
    const {onSubmit} = this.props
    onSubmit({email, password})
  }

  refEmail = (input: FormInput) => {
    this.emailField = input
  }

  refPassword = (input: FormInput) => {
    this.passwordField = input
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
              name="email" placeholder="E-mail address"
              ref={this.refEmail}
          />
          <Form.Input
              icon="lock" iconPosition="left"
              name="password" placeholder="Password"
              ref={this.refPassword} type="password"
          />
          <Button color="teal" fluid size="large" type="submit">Login</Button>
        </Form>
      </div>
    )
  }
}
