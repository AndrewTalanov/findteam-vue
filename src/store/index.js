import { createStore } from 'vuex'

export default createStore({
  state: {
    active: 2
  },
  mutations: {
    changeActive(state) {
      return state.active
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
