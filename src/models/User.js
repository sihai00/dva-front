export default {
  namespace: 'user',
  state: {},
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/user') {
          console.log('user')
        }
      })
    }
  },
  effects: {},
  reducers: {},
}
