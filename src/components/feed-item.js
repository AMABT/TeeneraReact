// @flow
import React from 'react'
import {Grid, Header, Divider} from 'semantic-ui-react'

export type FeedItemType = {
  isFirst: boolean,
  title: string,
  description: string
}

const FeedItem = ({isFirst, title, description}: FeedItemType) => (
  <Grid.Row>
    {!isFirst && <Divider/>}
    <Header>{title}</Header>
    <p>{description}</p>
  </Grid.Row>
)

export default FeedItem
