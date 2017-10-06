import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as userActions from '../actions/user'
import LoginForm from '../components/login-form'
import Firewall from '../components/firewall'

class Login extends Component {

  handleSubmit(email, password) {
    const {fetchUser} = this.props
    fetchUser(email, password)
  }

  componentWillMount() {
    const {checkUserIsLogged} = this.props;
    checkUserIsLogged();
  }

  render() {
    return (
      <Firewall to={{pathname: '/dashboard'}} condition={this.props.loginState}>
        <LoginForm handleSubmit={this.handleSubmit.bind(this)}/>
      </Firewall>
    )
  }
}

const mapState = (state) => ({
  loginState: state.users.login
})

export default connect(mapState, userActions)(Login)
