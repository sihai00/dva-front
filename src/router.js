import React from 'react'
import { Route, Switch, routerRedux } from 'dva/router'
import Loadable from 'react-loadable'
import Authorized from './common/Authorized'
import common from './common/common'
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
            if (!v) return null

            const Component = dynamicWrapper(app, v.model, v.component)

            // routes
            if (v.isOpenRouter || !common.isAuth) {
              return <Route key={i} path={v.path} exact component={Component}/>
            } else {
              return <Authorized key={i} exact {...Object.assign(v, {component: Component})}/>
            }
          })
        }
      </Switch>
    </ConnectedRouter>
  )
}

export default RouterConfig
