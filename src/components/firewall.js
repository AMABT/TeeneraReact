// @flow
import React from 'react'
import {Redirect} from 'react-router-dom'

type Props = {
  condition: boolean,
  pathname: string,
  children: {}
}

const Firewall = (props: Props) => {

  const {condition, pathname, children} = props

  if (condition) return (<Redirect to={{pathname}}/>);

  return (children)
}

export default Firewall
