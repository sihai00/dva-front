import axios from 'axios'
import common from '../common/common'
axios.defaults.baseURL = common.baseURLApi

export default function request(config) {
  let request = {url: '', method: '', headers: ''}

  for(let i of Object.keys(config)){
    if (Object.keys(request).includes(i)) request[i] = config[i]
  }

  // token
  if (request.url !== '/login') {
    request.headers = Object.assign(request.headers, {Authorization: localStorage.token})
  }

  // 参数
  if (request.method === 'get') {
    request.params = config.params
  } else if (request.method === 'upload') {
    request.headers = Object.assign(request.headers, {'Content-Type': 'application/x-www-form-urlencoded'})
    request.method = 'post'

    let formData = new FormData()
    for (let i of Object.keys(config.params)){
      if (Object.keys(config.params)) formData.append(i, config.params[i])
    }

    if (config.params) request['data'] = formData
  }else {
    request.data = config.params
  }

  return fetch(request, config.isToastError)
}

export const fetch = (request, isToastError = true) => {
  return axios(request)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      let error = err.response && err.response.data && err.response.data.error;

      if (!error) return

      throw {errCode: error.statusCode, errMsg: error.msg || error.message || "系统出错", isToastError} // eslint-disable-line
    })
}
