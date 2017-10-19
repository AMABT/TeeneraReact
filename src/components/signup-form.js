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

type InputValue = { value: string }

export default class Signup extends Component<Props, State> {

  state = {
    emailError: false,
    passwordError: false
  }

  email: string = ''
  password: string = ''
  confirmPassword: string = ''

  handlePasswordValidation = () => {
    const {password, confirmPassword} = this
    const passwordError = confirmPassword !== '' && password !== confirmPassword
    this.setState({passwordError})
  }

  handleEmailValidation = () => {
    const {email} = this
    const emailError = email.indexOf('@') < 0 || email.indexOf('.') < 0
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
    const {email, password} = this
    const {onSubmit} = this.props
    onSubmit({email, password})
    return true
  }

  handleEmailChange = (event: Event, {value}: InputValue) => {
    this.email = value
    this.handleEmailValidation()
  }

  handlePasswordChange = (event: Event, {value}: InputValue) => {
    this.password = value
  }

  handleConfirmPasswordChange = (event: Event, {value}: InputValue) => {
    this.confirmPassword = value
    this.handlePasswordValidation()
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
              name="email" onChange={this.handleEmailChange}
              placeholder="E-mail address" type="email"
          />
          <Form.Input
              icon="lock" iconPosition="left" name="password"
              onChange={this.handlePasswordChange} placeholder="Password"
              type="password"
          />
          <Form.Input
              error={this.state.passwordError} icon="lock" iconPosition="left"
              name="confirm-password" onChange={this.handleConfirmPasswordChange}
              placeholder="Confirm password" type="password"
          />
          <Button color="teal" fluid size="large" type="submit">Signup</Button>
        </Form>
      </div>
    )
  }
}
