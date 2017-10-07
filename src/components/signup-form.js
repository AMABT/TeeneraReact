import React, {Component} from 'react'
import {Header, Image, Form, Button} from 'semantic-ui-react'
import Logo from '../images/logo.svg'

class EmailField extends Component {

  state = {error: false}

  render() {
    return (
      <Form.Input type="email" placeholder="E-mail address" name={this.props.name}
                  icon="user" iconPosition="left"
                  error={this.state.error}
                  onChange={(event, data) => {
                    const val = data.value
                    const error = val.indexOf('@') < 0 || val.indexOf('.') < 0
                    this.setState({error})
                  }}/>
    )
  }
}

export default class Signup extends Component {

  state = {passwordError: false}
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
          <EmailField name="email"/>
          <Form.Input type="password" placeholder="Password" name="password"
                      icon="lock" iconPosition="left"
                      onChange={(event, data) => {
                        this.updateFormValues('password', data.value)
                      }}/>
          <Form.Input type="password" placeholder="Confirm password" name="confirm-password"
                      icon="lock" iconPosition="left"
                      error={this.state.passwordError}
                      onChange={(event, data) => {
                        this.updateFormValues('confirmPassword', data.value)
                        this.validatePasswords()
                      }}/>
          <Button fluid type="submit" size="large" color="teal">Signup</Button>
        </Form>
      </div>
    )
  }
}
