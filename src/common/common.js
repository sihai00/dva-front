const env = (() => {
  const ENV = {
    baseURL: '',
    baseURLApi: '',
    // 是否开启权限
    isAuth: true,
    // 权限
    authority: ['管理人员'],
    // 是否开启代理
    isProxy: true
  }

  switch (process.env.NODE_ENV) {
    case 'development':
      ENV.baseURL = `v1`;
      break
    default:
      ENV.baseURL = process.env.API_ENV === 'dev' ? `v1` : `v`;
      break
  }

  ENV.baseURLApi = `api/${ENV.baseURL}`

  return ENV
})()

export default env
