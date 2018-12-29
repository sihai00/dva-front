var common = require('./src/common/common')

const proxy =  {
  // 支持值为 Object 和 Array
  [`GET ${common.baseURLApi}/users`]: { users: [1,2] },

  // 登陆
  [`POST ${common.baseURLApi}/login`]: {id: 1},

  // 个人信息
  [`GET ${common.baseURLApi}/me`]: {
    id: 1,
    role: {
      id: 1,
      name: '管理人员'
    }
  },
}

export default (common.isProxy ? proxy : {})
