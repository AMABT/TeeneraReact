import React from 'react'
import {Grid, Header, Divider} from 'semantic-ui-react'
import DashSidebar from '../components/dashboard-sidebar'

export default () => (
  <Grid>
    <Grid.Column wide width="four">
      <DashSidebar items={[
        {'/dashboard/experiences': 'Experience'},
        {'/dashboard/profile': 'Profile'},
        {'/dashboard/settings': 'Settings'},
      ]}/>
    </Grid.Column>
    <Grid.Column wide width="four" className="dashboard-content">
      <Grid.Row>
        <Header as="h1">
          Your feed
        </Header>
      </Grid.Row>
      <Divider/>
      {/*List of items in feed*/}
    </Grid.Column>
  </Grid>
)
