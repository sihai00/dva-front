import {getUser} from '../services/Account'

export default {
  namespace: 'user',
  state: {},
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/user') {
          dispatch({type: 'getUser'})
        }
      })
    }
  },
  effects: {
    *getUser({ payload = {} }, { call, put, select }) {
      // 登陆
      const data = yield call(getUser, payload)
      console.log(data, 'data')
    }
  },
  reducers: {},
}
