import React, {Component} from 'react'
import {Header, Image, Form, Button} from 'semantic-ui-react'
import Logo from '../images/logo.svg'

export default class Signup extends Component {

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
    let confirmError = this.formErrors.confirmPassword

    if (!confirmPassword) {
      confirmError = false
      return
    }

    const hasError = password !== confirmPassword;
    if (confirmError === hasError) {
      return
    }

    confirmError = hasError
    this.forceUpdate()
  }

  handleSubmit() {
    console.log(this.formValues)
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
