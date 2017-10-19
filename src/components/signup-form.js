// @flow
import React, {Component} from 'react'
import {Header, Image, Form, Button} from 'semantic-ui-react'
import Logo from '../images/logo.svg'

type Props = {
  onSubmit: ({
    email: string,
    password: string
  }) => void
}

type State = {
  emailError: boolean | null,
  passwordError: boolean | null
}

type FormInput = typeof Form.Input | { value: string }

type FormFields = {
  email: FormInput,
  password: FormInput,
  confirmPassword: FormInput
}

export default class Signup extends Component<Props, State> {

  state = {
    emailError: false,
    passwordError: false
  }

  fields: FormFields = {
    email: {value: ''},
    password: {value: ''},
    confirmPassword: {value: ''}
  }

  handlePasswordValidation = () => {
    const {password, confirmPassword} = this.fields
    const passwordError = confirmPassword.value !== '' && password.value !== confirmPassword.value
    this.setState({passwordError})
  }

  handleEmailValidation = () => {
    const val = this.fields.email.value
    const emailError = val.indexOf('@') < 0 || val.indexOf('.') < 0
    this.setState({emailError})
  }

  hasFormErrors() {
    this.handlePasswordValidation()
    const {emailError, passwordError} = this.state
    return emailError || passwordError
  }

  handleSubmit = (event: Event): boolean => {
    if (event) event.preventDefault()
    if (this.hasFormErrors()) return false
    const email = this.fields.email.value
    const password = this.fields.password.value
    const {onSubmit} = this.props
    onSubmit({email, password})
    return true
  }

  refEmail = (input: FormInput) => {
    this.fields.email = input
  }

  refPassword = (input: FormInput) => {
    this.fields.email = input
  }

  refConfirmPassword = (input: FormInput) => {
    this.fields.email = input
  }

  render() {
    return (
      <div className="signup-form">
        <Header as="h2" image inverted>
          <Image src={Logo}/>
          <div className="content">
            Signup in our website
          </div>
        </Header>
        <Form onSubmit={this.handleSubmit} size="large">
          <Form.Input
              error={this.state.emailError} icon="user" iconPosition="left"
              name="email" onChange={this.handleEmailValidation}
              placeholder="E-mail address" ref={this.refEmail}
              type="email"
          />
          <Form.Input
              icon="lock" iconPosition="left" name="password"
              placeholder="Password" ref={this.refPassword}
              type="password"
          />
          <Form.Input
              error={this.state.passwordError} icon="lock" iconPosition="left"
              name="confirm-password" onChange={this.handlePasswordValidation}
              placeholder="Confirm password" ref={this.refConfirmPassword}
              type="password"
          />
          <Button color="teal" fluid size="large" type="submit">Signup</Button>
        </Form>
      </div>
    )
  }
}
