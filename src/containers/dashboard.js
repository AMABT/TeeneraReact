// @flow
import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Switch, Route} from 'react-router-dom'
import DashMenu from '../components/dashboard-menu'
import Logout from '../components/logout';
import DashboardFeed from '../components/dashboard-feed';
import {Container, Divider} from 'semantic-ui-react'

type Props = {
  loginState: boolean
}

const Dashboard = (props: Props) => {

  if (!props.loginState) {
    return (<Redirect to={{pathname: '/login'}}/>)
  }

  return (
    <div className="dashboard-page">
      <DashMenu/>
      <Container>
        <Divider/>
        <Switch>
          <Route component={Logout} path="/dashboard/logout"/>
          <Route component={DashboardFeed}/>
        </Switch>
      </Container>
    </div>
  )
}

const mapState = (state) => ({
  loginState: state.users.login
})

export default connect(mapState)(Dashboard)
