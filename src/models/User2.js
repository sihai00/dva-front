export default {
  namespace: 'user2',
  state: {},
  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/user/user1/user2') {
          console.log('user2')
        }
      })
    }
  },
  effects: {},
  reducers: {},
}
