import React from 'react'
import {Redirect} from 'react-router-dom'

export default ({condition, pathname, children}) => {
  if (condition)
    return (<Redirect to={{pathname}}/>);

  return (children)
}
