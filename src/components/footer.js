// @flow
import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Container, Segment, Grid, List, Header} from 'semantic-ui-react';
import './footer.css';

const footerLinks = [
  {
    title: 'About',
    links: [
      {url: '#', text: 'Sitemap'},
      {url: '#', text: 'Contact Us'},
      {url: '#', text: 'Gazebo Plans'}
    ]
  },
  {
    title: 'Services',
    links: [
      {url: '#', text: 'Sitemap'},
      {url: '#', text: 'Contact Us'},
      {url: '#', text: 'Gazebo Plans'}
    ]
  }
].map((section, index) => {

  const links = section.links.map((link, index) => (
    <Menu.Item as={Link} key={index} to={link.url}>{link.text}</Menu.Item>));

  return (
    <Grid.Column className="wide" key={index} width="three">
      <Header as="h4" inverted>{section.title}</Header>
      <List inverted link>{links}</List>
    </Grid.Column>
  )

});

const Footer = () => (
  <Segment className="footer" inverted vertical>
    <Container>
      <Grid className="equal height" divided inverted stackable>
        {footerLinks}
        <Grid.Column className="wide" width="seven">
          <Header as="h4" inverted>Footer Header</Header>
          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
