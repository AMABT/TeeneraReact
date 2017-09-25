import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const Dashboard = (props) => {

  if (props.loginState) {
    return (<Redirect to={{pathname: '/login'}}/>)
  }

  return (
    <div className="logged">
      User logged
    </div>
  )
}

const mapState = (state) => ({
  loginState: state.users.login
})

export default connect(mapState)(Dashboard);
