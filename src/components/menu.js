// @flow
import React from 'react';
import {NavLink} from 'react-router-dom'
import {Menu, Container, Button, Icon, Transition} from 'semantic-ui-react';
import './menu.css';

const menuItems = [
  {url: '/', text: 'Home'},
  {url: '/about', text: 'About'},
  {url: '/contact', text: 'Contact'}
].map((item, index) => (<Menu.Item as={NavLink} key={index} to={item.url}>{item.text}</Menu.Item>))

const loginProps = {as: NavLink, to: '/login'}
const signupProps = {as: NavLink, to: '/signup'}

export const DefaultMenu = () => {
  return (
    <Container>
      <Menu className="default-menu" inverted secondary size="large">
        <Menu.Item className="toc">
          <Icon name="sidebar"/>
        </Menu.Item>
        {menuItems}
        <Menu.Item className="right">
          <Button inverted {...loginProps}>Login</Button>
          <Button inverted {...signupProps}>Sign Up</Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}

type Props = {
  visible: boolean
}

export const FollowingMenu = (props: Props) => {

  const {visible} = props;

  return (
    <Transition animation="fade" duration={300} visible={visible}>
      <Menu fixed="top" size="large">
        <Container>
          {menuItems}
          <div className="right menu">
            <Menu.Item>
              <Button {...loginProps}>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button primary {...signupProps}>Sign up</Button>
            </Menu.Item>
          </div>
        </Container>
      </Menu>
    </Transition>
  )
}
