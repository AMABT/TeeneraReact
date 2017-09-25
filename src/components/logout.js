import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
//import {connect} from 'react-redux'
//import * as userActions from '../actions/user'

class Logout extends Component {

  render() {
    return (<Redirect to="/login"/>)
  }
}

export default Logout
