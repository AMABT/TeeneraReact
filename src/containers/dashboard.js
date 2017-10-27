// @flow
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import DashMenu from '../components/dashboard-menu'
import Logout from '../components/logout';
import DashboardFeed from '../components/dashboard-feed';
import {Container, Divider} from 'semantic-ui-react'
import ExperiencesList from './experiences-list';
import * as userActions from '../actions/user';
import Firewall from '../components/firewall';

type StoreProps = {
  loginState: boolean,
  loading: boolean
}

type Actions = {
  checkUserIsLogged: () => void
}

type Props = StoreProps & Actions

class Dashboard extends PureComponent<Props> {

  componentDidMount() {
    const {checkUserIsLogged, loginState} = this.props
    if (!loginState) checkUserIsLogged()
  }

  render() {
    const {loginState, loading} = this.props

    if (loading) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <Firewall condition={!loginState} pathname="/login">
        <div className="dashboard-page">
          <DashMenu/>
          <Container>
            <Divider/>
            <Switch>
              <Route component={Logout} path="/dashboard/logout"/>
              <Route component={ExperiencesList} path="/dashboard/experiences"/>
              <Route component={DashboardFeed}/>
            </Switch>
          </Container>
        </div>
      </Firewall>
    )
  }
}

const mapState = (state) => ({
  loginState: state.users.login,
  loading: state.users.loading
})

export default connect(mapState, userActions)(Dashboard)
