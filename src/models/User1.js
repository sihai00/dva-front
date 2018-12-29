export default {
  namespace: 'user1',
  state: {},
  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/user/user1') {
          console.log('user1')
        }
      })
    }
  },
  effects: {},
  reducers: {},
}
