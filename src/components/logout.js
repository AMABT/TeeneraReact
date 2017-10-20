// @flow
import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as userActions from '../actions/user'

type ActionsType = {
  logoutUser: () => void
}

class Logout extends PureComponent<ActionsType> {

  componentWillMount() {
    const {logoutUser} = this.props
    logoutUser()
  }

  render() {
    return (<Redirect to="/login"/>)
  }
}

export default connect(null, userActions)(Logout)
