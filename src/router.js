import React from 'react'
import { Route, Switch, routerRedux } from 'dva/router'
import Authorized from './common/Authorized'
import common from './common/common'
import routers from './common/router'
const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {
          routers && routers.map((v, i) => {
            if (!v) return null

            // model
            if (v.model) app.model(v.model().default)

            // routes
            if  (!common.isAuth) {
              return <Route key={i} path={v.path} exact component={v.component().default}/>
            }

            if (v.isOpenRouter) {
              return <Route key={i} path={v.path} exact component={v.component().default}/>
            } else {
              return <Authorized key={i} exact {...v}/>
            }
          })
        }
      </Switch>
    </ConnectedRouter>
  )
}

export default RouterConfig
