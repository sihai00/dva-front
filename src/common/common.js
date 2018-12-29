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
      ENV.baseURL = `/api/dev`;
      break
    default:
      ENV.baseURL = process.env.API_ENV === 'dev' ? `/api/dev` : `/api/pro`;
      break
  }

  ENV.baseURLApi = `${ENV.baseURL}/v1`

  return ENV
})()

export default env
