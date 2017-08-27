import React, {Component} from 'react'
import {Header, Image, Transition} from 'semantic-ui-react'
import Logo from '../images/logo.svg'

export default class LoginForm extends Component {

  render() {

    const {visible} = this.props

    return (
      <Transition visible={visible}>
        <div className="login-form">
          <Header as="h2" image inverted>
            <Image src={Logo}/>
            <div className="content">
              Login-in to your account
            </div>
          </Header>
        </div>
      </Transition>
    )
  }
}
