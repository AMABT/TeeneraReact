// @flow
import React from 'react'
import {Grid, Header, Divider} from 'semantic-ui-react'
import DashSidebar from '../components/dashboard-sidebar'
import FeedItem from './feed-item'
import type {FeedItemType} from './feed-item'

type Props = {
  feedType: string,
  items: Array<FeedItemType>
}

const DashboardFeed = ({feedType, items}: Props) => (
  <Grid>
    <Grid.Column width="4">
      <DashSidebar items={[
        {'/dashboard/experiences': 'Experience'},
        {'/dashboard/profile': 'Profile'},
        {'/dashboard/settings': 'Settings'}
      ]}
      />
    </Grid.Column>
    <Grid.Column className="dashboard-content" width="12">
      <Grid.Row>
        <Header as="h1">
          Your {feedType} feed
        </Header>
      </Grid.Row>
      <Divider hidden section/>
      {
        items ?
          items.map((item, index) => <FeedItem isFirst={index === 0} key={index} {...item}/>)
          : null
      }
    </Grid.Column>
  </Grid>
)

export default DashboardFeed
