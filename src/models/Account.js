import { login, getMe } from '../services/Account'

export default {
  namespace: 'account',
  state: {
    token: '',
    me: {},
  },
  effects: {
    *login({ payload = {} }, { call, put, select }) {
      // 登陆
      const {id} = yield call(login, payload)

      if (id) {
        localStorage.token = id

        yield put({
          type: 'change',
          payload: {
            name: 'token',
            value: id
          }
        })
      }

      // 获取个人信息
      return yield put({
        type: 'getMe',
      })
    },
    *getMe({ payload = {} }, { call, put, select }){
      const me = yield call(getMe)

      if (me) {
        localStorage.me = JSON.stringify(me)
        yield put({
          type: 'change',
          payload: {
            name: 'me',
            value: me
          }
        })

        return true
      }else{
        return false
      }
    },
  },
  reducers: {
    change(state, action) {
      const {payload} = action

      if (!payload || !payload.name) return

      return {
        ...state,
        [payload.name]: payload.value
      }
    }
  },
};
