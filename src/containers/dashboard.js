import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Switch, Route} from 'react-router-dom'
import DashMenu from '../components/dashboard-menu'
import DashSidebar from '../components/dashboard-sidebar'
import Logout from '../components/logout';
import DashboardFeed from '../components/dashboard-feed';
import {Container} from 'semantic-ui-react'

const Dashboard = (props) => {

  if (!props.loginState) {
    return (<Redirect to={{pathname: '/login'}}/>)
  }

  return (
    <div className="dashboard-page">
      <DashMenu/>
      <Container>
        <DashSidebar/>
        <div className="dashboard-content">
          <Switch>
            <Route path="/dashboard/logout" component={Logout}/>
            <Route component={DashboardFeed}/>
          </Switch>
        </div>
      </Container>
    </div>
  )
}

const mapState = (state) => ({
  loginState: state.users.login
})

export default connect(mapState)(Dashboard)
