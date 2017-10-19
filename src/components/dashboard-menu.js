// @flow
import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu, Container, Button} from 'semantic-ui-react';

const menuStyle = {
  marginTop: 20
}

const menuItems = [
  {url: '/dashboard', text: 'Dashboard'},
  {url: '/dashboard/experiences', text: 'Experiences'}
].map((item, index) => (<Menu.Item as={NavLink} key={index} to={item.url}>{item.text}</Menu.Item>))

const DashboardMenu = () => (
  <Container>
    <Menu className="dashboard-menu" secondary size="large" style={menuStyle}>
      <Menu.Item header>Teenera</Menu.Item>
      {menuItems}
      <Menu.Item className="right">
        <Button as={NavLink} to="/dashboard/logout">Logout</Button>
      </Menu.Item>
    </Menu>
  </Container>
)

export default DashboardMenu
