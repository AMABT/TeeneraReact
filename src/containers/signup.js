// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/user'
import SignupForm from '../components/signup-form'

type Props = {
  createUser: (string, string) => void
}

class Signup extends Component<Props> {

  handleSubmit = (data) => {
    const {createUser} = this.props
    const {email, password} = data
    createUser(email, password)
  }

  render() {
    return (<SignupForm onSubmit={this.handleSubmit}/>)
  }
}


export default connect(null, actions)(Signup)
