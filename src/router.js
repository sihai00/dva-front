import React from 'react'
import { Switch, routerRedux } from 'dva/router'
import Loadable from 'react-loadable'
import Authorized from './common/Authorized'
import routers from './common/router'
const { ConnectedRouter } = routerRedux

function dynamicWrapper(app, models, component){
  if (models) {
    if (Array.isArray(models)) {
      models.forEach(model => {
        app.model(require(`./models/${model}`).default)
      })
    } else {
      app.model(require(`./models/${models}`).default)
    }
  }

  if (component) {
    return Loadable({
      loader: component,
      loading: () => <div>loading</div>,
    })
  }
}

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {
          routers && routers.map((v, i) => {
            return v ? <Authorized key={i} exact {...Object.assign(v, {component: dynamicWrapper(app, v.model, v.component)})}/> : null
          })
        }
      </Switch>
    </ConnectedRouter>
  )
}

export default RouterConfig
