// @flow
import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

type Props = {
  items: Array<Object>
}

const DashboardSidebar = (props: Props) => (
  <Menu fluid pointing secondary vertical>
    {props.items.map((item, index) => (
      <Menu.Item as={NavLink} key={index} to={Object.keys(item)[0]}>
        {Object.values(item)[0]}
      </Menu.Item>
    ))}
  </Menu>
)

export default DashboardSidebar
