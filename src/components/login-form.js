import React from 'react'
import {Header, Image, Form, Button} from 'semantic-ui-react'
import Logo from '../images/logo.svg'

/**
 *
 * @param handleSubmit function(email, password)
 */
export default ({handleSubmit}) => (
  <div className="login-form">
    <Header as="h2" image inverted>
      <Image src={Logo}/>
      <div className="content">
        Login-in to your account
      </div>
    </Header>
    <Form size="large" onSubmit={(event) => {
      event && event.preventDefault()
      const {elements} = event.target
      handleSubmit(elements['email'].value, elements['password'].value)
    }}>
      <Form.Input placeholder="E-mail address" name="email"
                  icon="user" iconPosition="left"/>
      <Form.Input type="password" placeholder="Password" name="password"
                  icon="lock" iconPosition="left"/>
      <Button fluid type="submit" size="large" color="teal">Login</Button>
    </Form>
  </div>
)
