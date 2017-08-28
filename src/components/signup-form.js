import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Header, Image, Form, Button} from 'semantic-ui-react'
import Logo from '../images/logo.svg'
import * as actions from '../actions/user'

class SignupComponent extends Component {

  formValues = {
    email: null,
    password: null,
    confirmPassword: null
  }

  formErrors = {
    email: false,
    password: false,
    confirmPassword: false
  }

  updateFormValues(field, value) {
    this.formValues[field] = value
    if (field.search('assword') > 0) {
      this.validatePasswords()
    }
    if (field.search('mail') > 0) {
      this.validateMail();
    }
  }

  validateMail() {
    const val = this.formValues.email
    let hasError = true

    if (val.indexOf('@') > 0 && val.indexOf('.') > 0) {
      hasError = false
    }
    if (hasError === this.formErrors.email) {
      return
    }

    this.formErrors.email = hasError
    this.forceUpdate()
  }

  validatePasswords() {
    const {password, confirmPassword} = this.formValues

    if (!confirmPassword) {
      this.formErrors.confirmPassword = false
      return
    }

    const hasError = password !== confirmPassword;
    if (this.formErrors.confirmPassword === hasError) {
      return
    }

    this.formErrors.confirmPassword = hasError
    this.forceUpdate()
  }

  handleSubmit() {

    const {createUser} = this.props
    const {email, password} = this.formValues

    createUser(email, password)
  }

  render() {

    return (
      <div className="login-form">
        <Header as="h2" image inverted>
          <Image src={Logo}/>
          <div className="content">
            Signup in our website
          </div>
        </Header>
        <Form size="large" onSubmit={this.handleSubmit.bind(this)}>
          <Form.Input type="email" placeholder="E-mail address"
                      icon="user" iconPosition="left"
                      error={this.formErrors.email}
                      onChange={(event, data) => {
                        this.updateFormValues('email', data.value)
                      }}/>
          <Form.Input type="password" placeholder="Password"
                      icon="lock" iconPosition="left"
                      error={this.formErrors.password}
                      onChange={(event, data) => {
                        this.updateFormValues('password', data.value)
                      }}/>
          <Form.Input type="password" placeholder="Confirm password"
                      icon="lock" iconPosition="left"
                      error={this.formErrors.confirmPassword}
                      onChange={(event, data) => {
                        this.updateFormValues('confirmPassword', data.value)
                      }}/>
          <Button fluid type="submit" size="large" color="teal">Signup</Button>
        </Form>
      </div>
    )
  }
}

const Signup = connect(null, actions)(SignupComponent)

export default Signup
