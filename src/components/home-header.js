import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import {Segment, Button, Icon, Header, Visibility, Grid} from 'semantic-ui-react'
import {DefaultMenu, FollowingMenu} from './menu'
import LoginForm from './login-form'
import SignupForm from './signup-form'
import './home-header.css'

const formContainerStyle = {
  maxWidth: 400
}

export default class HomeHeader extends Component {

  // fixed menu
  state = {followingVisible: false}

  showFollowing = () => this.setState({followingVisible: true})
  hideFollowing = () => this.setState({followingVisible: false})

  render() {

    return (
      <Visibility once={false} onOffScreen={this.showFollowing.bind(this)} onOnScreen={this.hideFollowing.bind(this)}>
        <FollowingMenu visible={this.state.followingVisible}/>
        <Segment inverted vertical textAlign="center" className="masthead">
          <DefaultMenu/>
          <Grid verticalAlign="middle" textAlign="center">
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

const HomeHeaderBanner = () => (
  <div className="banner-home-header">
    <Header as="h1" inverted>Imagine-a-Company</Header>
    <h2>Do whatever you want when you want to.</h2>
    <Button as="div" size="huge" primary>
      Get Started
      <Icon name="arrow right"/>
    </Button>
  </div>
)
