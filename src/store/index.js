import { createStore } from 'vuex'

export default createStore({
  state: {
    active: 2,
    widthBrows: null,
  },
  mutations: {
    changeActive(state, id) {
      return state.active = id
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
