const menu = [
  {
    name: '登录',
    path: 'login',
    isOpenRouter: true,
    component: () => import('../routes/Login/LoginPage'),
    model: ['Account'],
  },
  {
    name: '主页',
    component: () => import('../routes/Index/IndexPage')
  },
  {
    name: 'user',
    path: 'user',
    component: () => import('../routes/User/UserPage'),
    model: ['User'],
    children: [
      {
        name: 'user1',
        path: 'user1',
        component: () => import('../routes/User/UserPage1'),
        model: ['User1'],
        children: [
          {
            name: 'user2',
            path: 'user2',
            component: () => import('../routes/User/UserPage2'),
            model: ['User2'],
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
