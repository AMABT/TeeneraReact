// @flow
import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as userActions from '../actions/user'

type Props = {
  logoutUser: void
}

class Logout extends PureComponent<Props> {

  componentWillMount() {
    if (typeof this.props.logoutUser === 'function') {
      this.props.logoutUser()
    }
  }

  render() {
    return (<Redirect to="/login"/>)
  }
}

export default connect(null, userActions)(Logout)
