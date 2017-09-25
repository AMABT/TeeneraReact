import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu, Container, Button} from 'semantic-ui-react';

const menuItems = [
  {url: '/dashboard', text: 'Dashboard'},
  {url: '/dashboard/experiences', text: 'Experiences'}
].map((item, index) => (<Menu.Item as={NavLink} to={item.url} key={index}>{item.text}</Menu.Item>))

export default () => (
  <Container>
    <Menu size="large" secondary className="dashboard-menu">
      <Menu.Item>Teenera</Menu.Item>
      {menuItems}
      <Menu.Item className="right">
        <Button as={NavLink} to="/dashboard/logout">Logout</Button>
      </Menu.Item>
    </Menu>
  </Container>
)
