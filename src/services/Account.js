import {post, get} from '../utils/request'

export function login(params) {
  return post({
    url: `/login`,
    params
  })
}

export function getMe() {
  return get({
    url: `/me`,
  })
}

export function getUser() {
  return get({
    url: `/users`,
  })
}
