// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as userActions from '../actions/user'
import LoginForm from '../components/login-form'
import Firewall from '../components/firewall'

class Login extends Component {

  componentWillMount() {
    const {checkUserIsLogged} = this.props
    checkUserIsLogged()
  }

  handleSubmit = (email, password) => {
    const {loginUser} = this.props
    loginUser(email, password)
  }

  render() {
    const {loginState} = this.props

    return (
      <Firewall condition={loginState} pathname="/dashboard">
        <LoginForm onSubmit={this.handleSubmit}/>
      </Firewall>
    )
  }
}

const mapState = (state) => ({
  loginState: state.users.login
})

export default connect(mapState, userActions)(Login)
