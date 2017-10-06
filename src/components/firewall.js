import React from 'react'
import {Redirect} from 'react-router-dom'

export default ({condition, to, children}) => {
  if (condition)
    return (<Redirect to={to}/>);

  return (children)
}
