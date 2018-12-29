import dva from 'dva'
import createLoading from 'dva-loading'
import './index.css'
import { Toast } from 'antd-mobile'
import {routerRedux} from 'dva/router'

if (process.env.NODE_ENV !== 'production' || process.env.API_ENV !== 'prod') {
  // 手机调试
  if (window.eruda) window.eruda.init()
}

// 1. Initialize
const app = dva({
  onError(error, dispatch) {
    if (error.errCode === 401) {
      localStorage.clear()
      dispatch(routerRedux.push('/login'))
    }

    if (error.isToastError) {
      setTimeout(() => {
        Toast.info(`${error.errMsg}`)
      },1001)
    }
  },
  onStateChange(state){
    const { loading } = state

    if (loading.global) {
      Toast.loading('加载中...', 1)
    }else{
      Toast.hide()
    }
  }
})

// 2. Plugins
app.use(createLoading())

// 3. Model
app.model(require('./models/Global').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
