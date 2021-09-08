import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAutenticated: false,
    token: '',
    isLoading: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
