const menu = [
  {
    name: '登录',
    path: 'login',
    isOpenRouter: true,
    component: () => require('../routes/Login/LoginPage'),
    model: () => require('../models/Account'),
  },
  {
    name: '主页',
    component: () => require('../routes/Index/IndexPage')
  },
  {
    name: 'user',
    path: 'user',
    component: () => require('../routes/User/UserPage'),
    model: () => require('../models/User'),
    children: [
      {
        name: 'user1',
        path: 'user1',
        component: () => require('../routes/User/UserPage1'),
        model: () => require('../models/User1'),
        children: [
          {
            name: 'user2',
            path: 'user2',
            component: () => require('../routes/User/UserPage2'),
            model: () => require('../models/User2'),
          }
        ]
      }
    ]
  },
]

const formatter = (menu, parent, authority = []) => {
  let res = {}

  menu && menu.forEach(v => {
    // 处理合并路径
    const paths = `${parent ? `${parent}` : ''}/${v.path || ''}`
    const item = Object.assign({}, v, {paths, authority: v.authority || []})

    let authorises = authority && Array.isArray(authority) ? [...authority, ...item.authority] : []

    res[paths] = Object.assign(item, {authority: authorises})

    if (v.children && v.children.length > 0)  {
      Object.assign(res, formatter(v.children, paths, authorises))
    }
  })

  return res
}

export default formatter(menu)
