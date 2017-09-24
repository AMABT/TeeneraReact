import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Header, Image, Form, Button} from 'semantic-ui-react'
import * as userActions from '../actions/user'
import Logo from '../images/logo.svg'

class LoginForm extends Component {

  formValues = {
    email: null,
    password: null
  }

  setFormValue(field, value) {
    this.formValues[field] = value
  }

  handleSubmit() {
    const {fetchUser} = this.props
    const {email, password} = this.formValues

    fetchUser(email, password)
  }

  render() {

    if (this.props.loginState) {
      return (<Redirect to={{pathname: '/dashboard'}}/>)
    }

    return (
      <div className="login-form">
        <Header as="h2" image inverted>
          <Image src={Logo}/>
          <div className="content">
            Login-in to your account
          </div>
        </Header>
        <Form size="large" onSubmit={this.handleSubmit.bind(this)}>
          <Form.Input placeholder="E-mail address"
                      icon="user" iconPosition="left"
                      onChange={(event, data) => this.setFormValue('email', data.value)}/>
          <Form.Input type="password" placeholder="Password"
                      icon="lock" iconPosition="left"
                      onChange={(event, data) => this.setFormValue('password', data.value)}/>
          <Button fluid type="submit" size="large" color="teal">Login</Button>
        </Form>
      </div>
    )
  }
}

const mapState = (state) => ({
  loginState: state.users.login
})

export default connect(mapState, userActions)(LoginForm)
