import React, {Component} from 'react';
import {Segment, Button, Icon, Header, Visibility, Grid} from 'semantic-ui-react';
import {DefaultMenu, FollowingMenu} from './menu';
import './home-header.css';

export default class HomeHeader extends Component {

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
          <Grid verticalAlign="middle">
            <Grid.Column>
              <Header as="h1" inverted>Imagine-a-Company</Header>
              <h2>Do whatever you want when you want to.</h2>
              <Button as="div" size="huge" primary>
                Get Started
                <Icon name="arrow right"/>
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
      </Visibility>
    )
  }
}
