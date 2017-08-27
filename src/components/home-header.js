import React, {Component} from 'react'
import {Segment, Button, Icon, Header, Visibility, Grid} from 'semantic-ui-react'
import {DefaultMenu, FollowingMenu} from './menu'
import {connect} from 'react-redux'
import LoginForm from './login-form'
import './home-header.css'

class HomeHeader extends Component {

  state = {followingVisible: false}

  showFollowing = () => this.setState({followingVisible: true})
  hideFollowing = () => this.setState({followingVisible: false})

  render() {

    const {loginVisible} = this.props

    return (
      <Visibility
        once={false}
        onOffScreen={this.showFollowing.bind(this)}
        onOnScreen={this.hideFollowing.bind(this)}>
        <FollowingMenu visible={this.state.followingVisible}/>
        <Segment inverted vertical textAlign="center" className="masthead">
          <DefaultMenu/>
          <Grid verticalAlign="middle">
            <Grid.Column>
              <div hidden={loginVisible}>
                <Header as="h1" inverted>Imagine-a-Company</Header>
                <h2>Do whatever you want when you want to.</h2>
                <Button as="div" size="huge" primary>
                  Get Started
                  <Icon name="arrow right"/>
                </Button>
              </div>
              <LoginForm visible={loginVisible}/>
            </Grid.Column>
          </Grid>
        </Segment>
      </Visibility>
    )
  }
}

export default connect(state => {
  return {
    loginVisible: state.toggleLogin.visible
  }
})(HomeHeader)
