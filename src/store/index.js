import { createStore } from 'vuex'

export default createStore({
  state: {
    active: 2,
    widthBrows: null,
    show: false,
  },
  mutations: {
    changeActive(state, id) {
      return state.active = id
    },
    updateWidthBrows(state) {
      return state.widthBrows = document.documentElement.clientWidth;
    },
    openCard(state) {
      if (state.show === false) {
        state.show = true
      } else {
        state.show = false
      }
      return state.show
    }  
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
