import React, {Component} from 'react'
import {Segment, Button, Icon, Header, Visibility, Grid} from 'semantic-ui-react'
import {DefaultMenu, FollowingMenu} from './menu'
import {connect} from 'react-redux'
import LoginForm from './login-form'
import SignupForm from './signup-form'
import './home-header.css'

export default class HomeHeader extends Component {

  // fixed menu
  state = {followingVisible: false}

  showFollowing = () => this.setState({followingVisible: true})
  hideFollowing = () => this.setState({followingVisible: false})

  render() {

    return (
      <Visibility
        once={false}
        onOffScreen={this.showFollowing.bind(this)}
        onOnScreen={this.hideFollowing.bind(this)}>
        <FollowingMenu visible={this.state.followingVisible}/>
        <Segment inverted vertical textAlign="center" className="masthead">
          <DefaultMenu/>
          <Grid verticalAlign="middle" textAlign="center">
            <HomeHeaderContent/>
          </Grid>
        </Segment>
      </Visibility>
    )
  }
}

const formContainerStyle = {
  maxWidth: 400
}

class HomeHeaderContentComponent extends Component {

  render() {

    const {contentVisible} = this.props

    switch (contentVisible) {
      case 'SIGNUP': {
        return (
          <Grid.Column style={formContainerStyle}>
            <SignupForm/>
          </Grid.Column>
        )
      }
      case 'LOGIN': {
        return (
          <Grid.Column style={formContainerStyle}>
            <LoginForm/>
          </Grid.Column>
        )
      }
      default: {
        return (
          <Grid.Column>
            <HomeHeaderBanner/>
          </Grid.Column>
        )
      }
    }
  }
}

const HomeHeaderContent = connect(state => {
  return {
    contentVisible: state.toggleHomeHeaderContent.contentVisible
  }
})(HomeHeaderContentComponent)

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
