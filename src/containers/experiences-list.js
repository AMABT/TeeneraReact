// @flow
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/experiences'
import DashboardFeed from '../components/dashboard-feed'

const feedType = 'experiences'

type ActionsType = {
  fetchAllExperiences: () => void
}

type StorePropsType = {
  experiences: Array<Object>
}

type Props = ActionsType & StorePropsType

class ExperiencesList extends PureComponent<Props> {

  componentWillMount() {
    const {fetchAllExperiences} = this.props
    fetchAllExperiences()
  }

  render() {
    return (
      <DashboardFeed feedType={feedType} items={this.props.experiences}/>
    )
  }
}

export default connect((state): StorePropsType => ({
  experiences: state.experiences.experiences
}), actions)(ExperiencesList)
