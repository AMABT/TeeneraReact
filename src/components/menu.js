import React from 'react';
import {NavLink} from 'react-router-dom'
import {Menu, Container, Button, Icon, Transition} from 'semantic-ui-react';
import './menu.css';

const menuItems = [
  {url: '/', text: 'Home'},
  {url: '/about', text: 'About'},
  {url: '/contact', text: 'Contact'},
].map((item, index) => (<Menu.Item as={NavLink} to={item.url} key={index}>{item.text}</Menu.Item>))

const loginProps = {as: NavLink, to: '/login'}
const signupProps = {as: NavLink, to: '/signup'}

export const DefaultMenu = () => {
  return (
    <Container>
      <Menu size="large" secondary inverted className="default-menu">
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

export const FollowingMenu = props => {

  const {visible} = props;

  return (
    <Transition animation="fade" visible={visible} duration={300}>
      <Menu size="large" fixed="top">
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
