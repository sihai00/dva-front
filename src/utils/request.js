import axios from 'axios'
import common from '../common/common'
axios.defaults.baseURL = common.baseURLApi

// export default function request(params, isFilter = true) {
//   const allow = ['url', 'method']
//   let request = {}
//
//   for(let i of Object.keys(params)){
//     if (allow.includes(i)) {
//       if (i === 'url') {
//         request[i] = `/api/v1${params[i]}`
//       }else{
//         request[i] = params[i]
//       }
//     }
//   }
//
//   // 参数
//   if (params.method === 'get') {
//     request.params = isFilter ? {filter: params.params} : params.params
//   } else {
//     request.data = params.params
//   }
//
//   // token
//   if (params.url !== '/accounts/login') {
//     request = Object.assign(request, {
//       headers: { Authorization: localStorage.token }
//     })
//   }
//
//   return fetch(request)
// }

function handleHeader(config) {
  const not = ['/accounts/login']
  let params = Object.assign({}, config)

  if (!not.includes(config.url)) {
    let headers = {}

    // 权限token
    if (localStorage.token) headers.Authorization = localStorage.token
    if (config.headers) headers = Object.assign(headers, config.headers)

    params['headers'] = headers
  }

  return params
}

export function get(config, isFilter = true) {
  if (!config.url) return

  let request = {
    method: 'get',
  }

  for (let i of Object.keys(config)){
    if (!config[i]) continue

    if (i === 'params') continue
    if (i === 'method') continue

    request[i] = config[i]
  }

  request = handleHeader(request)
  
  if (config.params) request['params'] = isFilter ? {filter: config.params} : config.params

  return fetch(request)
}

export function post(config) {
  if (!config.url || !config.params) return

  let request = {
    method: 'post'
  }

  for (let i of Object.keys(config)){
    if (!config[i]) continue

    if (i === 'params') continue
    if (i === 'method') continue

    request[i] = config[i]
  }

  request = handleHeader(request)

  if (config.params) request['data'] = config.params

  return fetch(request)
}

export function put(config) {
  if (!config.url || !config.params) return

  let request = {
    method: 'put',
  }

  for (let i of Object.keys(config)){
    if (!config[i]) continue

    if (i === 'params') continue
    if (i === 'method') continue

    request[i] = config[i]
  }

  request = handleHeader(request)

  if (config.params) request['data'] = config.params

  return fetch(request)
}

export function delect(config) {
  if (!config.url || !config.params) return

  let request = {
    method: 'delete',
  }

  for (let i of Object.keys(config)){
    if (!config[i]) continue

    if (i === 'params') continue
    if (i === 'method') continue

    request[i] = config[i]
  }

  request = handleHeader(request)

  if (config.params) request['data'] = config.params

  return fetch(request)
}

export function upload(config) {
  if (!config.url || !config.params) return

  let request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }

  for (let i of Object.keys(config)){
    if (!config[i]) continue

    if (i === 'params') continue
    if (i === 'method') continue

    request[i] = config[i]
  }

  request = handleHeader(request)

  let formData = new FormData()
  for (let i of Object.keys(config.params)){
    if (Object.keys(config.params)) formData.append(i, config.params[i])
  }

  if (config.params) request['data'] = formData

  return fetch(request)
}

export const fetch = request => {
  return axios(request)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      let error = err.response && err.response.data && err.response.data.error;

      if (!error) return 
        
      throw { errCode: error.statusCode, errMsg: error.msg || error.message || "系统出错" } // eslint-disable-line
    })
}
