import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Container, Segment, Grid, List, Header} from 'semantic-ui-react';

const footerLinks = [
  {
    title: 'About',
    links: [
      {url: '#', text: 'Sitemap'},
      {url: '#', text: 'Contact Us'},
      {url: '#', text: 'Gazebo Plans'},
    ]
  },
  {
    title: 'Services',
    links: [
      {url: '#', text: 'Sitemap'},
      {url: '#', text: 'Contact Us'},
      {url: '#', text: 'Gazebo Plans'},
    ]
  }
].map((section, index) => {

  const links = section.links.map((link, index) => (<Menu.Item as={Link} to={link.url} key={index}>{link.text}</Menu.Item>));

  return (
    <Grid.Column width="three" className="wide" key={index}>
      <Header as="h4" inverted>{section.title}</Header>
      <List inverted link>{links}</List>
    </Grid.Column>
  )

});

export default () => (
  <Segment inverted vertical className="footer">
    <Container>
      <Grid stackable inverted divided className="equal height">
        {footerLinks}
        <Grid.Column width="seven" className="wide">
          <Header as="h4" inverted>Footer Header</Header>
          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
)
