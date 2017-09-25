import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

export default (props) => (
  <Menu secondary vertical pointing fluid>
    {props.items.map(item => (
      <Menu.Item as={NavLink} to={Object.keys(item)[0]}>
        {Object.values(item)[0]}
      </Menu.Item>
    ))}
  </Menu>
)
