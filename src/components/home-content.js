// @flow
import React from 'react';
import {Container, Segment, Button, Grid, Header, Image} from 'semantic-ui-react';
import Nan from '../images/nan.jpg';
import WhiteImage from '../images/white-image.png';
import './home-content.css';

/* eslint-disable max-len */
const aboutUsContent = [
  {
    header: 'We Help Companies and Companions',
    content: 'We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.'
  },
  {
    header: 'We Make Bananas That Can Dance',
    content: 'Yes that\'s right, you thought it was the stuff of dreams, but even bananas can be bioengineered.'
  }
].map((element, index) => (
  <div key={index}>
    <Header as="h3" className={index > 0 ? 'header-after-paragraph' : ''}>{element.header}</Header>
    <p>{element.content}</p>
  </div>
));

export default function HomeContent() {
  return (
    <div className="home-content">
      <Segment className="stripe" vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width="eight">{aboutUsContent}</Grid.Column>
            <Grid.Column floated="right" width="six">
              <Image bordered shape="rounded" size="large" src={WhiteImage} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Check Them out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment className="stripe quote" vertical>
        <Grid celled className="equal width internally" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column>
              <h3>&quot;What a Company&quot;</h3>
              <p>That is what they all say about us</p>
            </Grid.Column>
            <Grid.Column>
              <h3>&quot;I shouldn&apos;t have gone with their competitor.&quot;</h3>
              <p>
                <Image avatar src={Nan} />
                <b>Nan</b>
                Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment className="stripe" vertical>
        <Container text>
          <Header as="h3">Breaking The Grid, Grabs Your Attention</Header>
          <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing
            nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
            and worth your attention.
          </p>
          <Button>Read More</Button>
          <Header as="h4" className="horizontal divider">
            <a>Case Studies</a>
          </Header>
          <Header as="h3">Did We Tell You About Our Bananas?</Header>
          <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really
            true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
          </p>
          <Button size="large">I&apos;m Still Quite Interested</Button>
        </Container>
      </Segment>
    </div>
  )
}
