export default {
  namespace: 'global',
  state: {},
  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname, search }) => {

      })
    }
  },
  effects: {},
  reducers: {},
}
