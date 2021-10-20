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
    initializeStore(state){
      if (localStorage.getItem('cart') != "undefined"){
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else{
          localStorage.setItem('cart', JSON.stringify(state.cart))
      }

      if (localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
        state.isAutenticated = true
      } else {
        state.token = ''
        state.isAutenticated = false
      }
    },
    addToCart(state, item){
      const exist = state.cart.items.filter(i => i.product.id === item.product.id)

      if (exist.length){
        exist[0].quantity = parseInt(exist[0].quantity)+parseInt(item.quantity)
      } else{
        state.cart.items.push(item)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setIsLoading(state,status){
      state.isLoading = status
    },

    setToken(state,token){
      state.token = token
      state.isAutenticated = true
    },

    removeToken(state){
      state.token = ''
      state.isAutenticated = false
    },

  },
  actions: {
  },
  modules: {
  }
})
