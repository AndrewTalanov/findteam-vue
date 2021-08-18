import { createStore } from 'vuex'

export default createStore({
  state: {
    active: 2,
    widthBrows: null,
  },
  mutations: {
    changeActive(state) {
      return state.active
    },
    updateWidthBrows(state) {
      return state.widthBrows = window.innerWidth;
    }  
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
