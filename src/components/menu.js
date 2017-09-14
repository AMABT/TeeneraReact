import React, {Component} from 'react';
import {Menu, Container, Button, Icon, Transition} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import './menu.css';

const menuItems = [
  {url: '/', text: 'Home'},
  {url: '/', text: 'Home'},
  {url: '/', text: 'Home'},
].map((item, index) => (<Menu.Item as={Link} to={item.url} key={index}>{item.text}</Menu.Item>))

const Default = props => {

  const {homeHeaderContent, contentVisible} = props
  const loginParam = contentVisible !== 'LOGIN' ? 'LOGIN' : null;
  const signupParam = contentVisible !== 'SIGNUP' ? 'SIGNUP' : null;

  return (
    <Container>
      <Menu size="large" secondary inverted className="default-menu">
        <Menu.Item className="toc">
          <Icon name="sidebar"></Icon>
        </Menu.Item>
        {menuItems}
        <Menu.Item className="right">
          <Button inverted
                  onClick={() => homeHeaderContent(loginParam)}
                  active={contentVisible === 'LOGIN'}>Login</Button>
          <Button inverted
                  onClick={() => homeHeaderContent(signupParam)}
                  active={contentVisible === 'SIGNUP'}>Sign Up</Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export const DefaultMenu = connect(
  state => ({contentVisible: state.homeContent.contentVisible}),
  actions
)(Default);

export const FollowingMenu = props => {

  const {visible} = props;

  return (
    <Transition animation="fade" visible={visible} duration={300}>
      <Menu size="large" fixed="top">
        <Container>
          {menuItems}
          <div className="right menu">
            <Menu.Item><Button>Log in</Button></Menu.Item>
            <Menu.Item><Button primary>Sign up</Button></Menu.Item>
          </div>
        </Container>
      </Menu>
    </Transition>
  )
}
