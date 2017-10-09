import React, {Component} from 'react'
import {Header, Image, Form, Button} from 'semantic-ui-react'
import Logo from '../images/logo.svg'

export default class Signup extends Component {

  state = {
    emailError: false,
    passwordError: false
  }
  formValues = {
    password: null,
    confirmPassword: null
  }

  updateFormValues(field, value) {
    this.formValues[field] = value
  }

  validatePasswords() {
    const {password, confirmPassword} = this.formValues
    const passwordError = confirmPassword && password !== confirmPassword
    this.setState({passwordError})
  }

  validateEmail(event) {
    const val = event.target.value
    const emailError = val.indexOf('@') < 0 || val.indexOf('.') < 0
    this.setState({emailError})
  }

  handleSubmit(event) {
    const elements = event.target.elements
    const {onSubmit} = this.props
    onSubmit({
      email: elements['email'].value,
      password: elements['password'].value
    })
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
        <Form size="large" onSubmit={this.handleSubmit.bind(this)}>
          <Form.Input type="email" placeholder="E-mail address" name="email"
                      icon="user" iconPosition="left"
                      error={this.state.emailError}
                      onChange={this.validateEmail.bind(this)}/>
          <Form.Input type="password" placeholder="Password" name="password"
                      icon="lock" iconPosition="left"
                      onChange={(event) => {
                        this.updateFormValues('password', event.target.value)
                      }}/>
          <Form.Input type="password" placeholder="Confirm password" name="confirm-password"
                      icon="lock" iconPosition="left"
                      error={this.state.passwordError}
                      onChange={(event) => {
                        this.updateFormValues('confirmPassword', event.target.value)
                        this.validatePasswords()
                      }}/>
          <Button fluid type="submit" size="large" color="teal">Signup</Button>
        </Form>
      </div>
    )
  }
}
