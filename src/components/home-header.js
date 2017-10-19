// @flow
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import {Segment, Button, Icon, Header, Visibility, Grid} from 'semantic-ui-react'
import {DefaultMenu, FollowingMenu} from './menu'
import LoginForm from '../containers/login'
import SignupForm from '../containers/signup'
// import styles from './home-header.css'
import './home-header.css'

const formContainerStyle = {
  maxWidth: 400
}

const HomeHeaderBanner = () => (
  <div className="banner-home-header">
    <Header as="h1" inverted>Imagine-a-Company</Header>
    <h2>Do whatever you want when you want to.</h2>
    <Button as="div" primary size="huge">
      Get Started
      <Icon name="arrow right"/>
    </Button>
  </div>
)

export default class HomeHeader extends Component {

  // fixed menu
  state = {followingVisible: false}

  handleShowFollowing = () => this.setState({followingVisible: true})
  handleHideFollowing = () => this.setState({followingVisible: false})

  render() {

    return (
      <Visibility onOffScreen={this.handleShowFollowing} onOnScreen={this.handleHideFollowing} once={false}>
        <FollowingMenu visible={this.state.followingVisible}/>
        <Segment className="masthead" inverted textAlign="center" vertical>
          <DefaultMenu/>
          <Grid textAlign="center" verticalAlign="middle">
            <Switch>
              <Route exact path="/login">
                <Grid.Column style={formContainerStyle}>
                  <Route component={LoginForm}/>
                </Grid.Column>
              </Route>
              <Route exact path="/signup">
                <Grid.Column style={formContainerStyle}>
                  <Route component={SignupForm}/>
                </Grid.Column>
              </Route>
              <Route>
                <Grid.Column>
                  <Route component={HomeHeaderBanner}/>
                </Grid.Column>
              </Route>
            </Switch>
          </Grid>
        </Segment>
      </Visibility>
    )
  }
}
