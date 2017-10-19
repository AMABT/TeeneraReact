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

export default class Signup extends Component<Props> {

  state = {
    emailError: false,
    passwordError: false
  }

  formValues = {
    password: null,
    confirmPassword: null
  }

  updateFormValues = (field, value) => {
    this.formValues[field] = value
  }

  validatePasswords = () => {
    const {password, confirmPassword} = this.formValues
    const passwordError = confirmPassword && password !== confirmPassword
    this.setState({passwordError})
  }

  handleEmailChange = (event) => {
    const val = event.target.value
    const emailError = val.indexOf('@') < 0 || val.indexOf('.') < 0
    this.setState({emailError})
  }

  handlePasswordChange = (event) => this.updateFormValues('password', event.target.value)

  handleConfirmPasswordChange = (event) => {
    this.updateFormValues('confirmPassword', event.target.value)
    this.validatePasswords()
  }

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
              placeholder="E-mail address"
              type="email"
          />
          <Form.Input
              icon="lock" iconPosition="left" name="password"
              onChange={this.handlePasswordChange} placeholder="Password"
              type="password"
          />
          <Form.Input
              error={this.state.passwordError} icon="lock" iconPosition="left"
              name="confirm-password" onChange={this.handleConfirmPasswordChange}
              placeholder="Confirm password"
              type="password"
          />
          <Button color="teal" fluid size="large" type="submit">Signup</Button>
        </Form>
      </div>
    )
  }
}
