import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'dva/router'
import { connect } from 'dva'
import common from './common'
import {getUrlParams} from '../utils/utils'

const isAuth = (rest) => {
  const { authority, me, token } = rest

  let bol = true

  // 没登录
  if (!me) return false
  if (!token) return false

  // 判断角色
  if (me.role && me.role.name) {
    const name =  me.role.name

    if (authority && !authority.includes(name)) bol = false
  }
  return bol
}

function handleRouter(router, props, component){
  const authenticated = isAuth(router)

  if (authenticated || router.isOpenRouter || !common.isAuth) {
    return React.createElement(component, Object.assign(props, {
      name: router.name,
      authority: router.authority,
      params: getUrlParams()
    }))
  } else {
    return <Redirect to={{
      pathname: router.failureRedirect,
      state: {from: props.location}
    }}/>
  }
}

/* eslint-disable react/prop-types */
const ProtectedRoute = ({component, ...router}) => {
  return (
    <Route {...router} render={props => handleRouter(router, props, component)}/>
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  token: PropTypes.string,
  failureRedirect: PropTypes.string
}

ProtectedRoute.defaultProps = {
  token: false,
  failureRedirect: '/login'
}

const mapStateToProps = (state) => {
  const { account, me } = state

  return {
    token: localStorage.token || account && account.token,
    me: localStorage.me ? JSON.parse(localStorage.me) : me
  }
}

export default connect(mapStateToProps)(ProtectedRoute)
