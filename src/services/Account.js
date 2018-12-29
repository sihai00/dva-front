import request from '../utils/request'

export function login(params) {
  return request({
    url: `/login`,
    method: 'post',
    params
  })
}

export function getMe() {
  return request({
    url: `/me`,
    method: 'get'
  })
}

export function getUser() {
  return request({
    url: `/users`,
    method: 'get'
  })
}
