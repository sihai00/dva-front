import menu from './menu'
import common from './common'

const getRouterData = (menu = {}) => {
  const menus = Object.values(menu)

  return menus.map(v => {
    const authority = v.authority ? [...common.authority, ...v.authority] : common.authority
    const item = Object.assign({}, v, {authority})

    if (v.paths) {
      item.path = item.paths
      delete item.paths
    }

    if (v.children) delete item.children

    return item
  })
}

export default getRouterData(menu)
