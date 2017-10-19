// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/user'
import LoginForm from '../components/login-form'
import Firewall from '../components/firewall'

type Props = {
  loginUser: (string, string) => void,
  checkUserIsLogged: void,
  loginState: boolean
}

type HandleSubmitData = {
  email: string,
  password: string
}

class Login extends Component<Props> {

  componentWillMount() {
    if (typeof this.props.checkUserIsLogged === 'function') {
      this.props.checkUserIsLogged()
    }
  }

  handleSubmit = ({email, password}: HandleSubmitData) => {
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

export default connect(mapState, actions)(Login)
