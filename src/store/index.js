import { createStore } from 'vuex'
import { getCardContent } from './getCardContent';
import { listCardAdverts } from './listCardAdverts';
import { listCardMentors } from './listCardMentors';

export default createStore({
  state: {
    active: 2,
    widthBrows: null,
    showAdverts: false,
    showMentors: false,
  },
  mutations: {
    changeActive(state, id) {
      return state.active = id
    },
    updateWidthBrows(state) {
      return state.widthBrows = document.documentElement.clientWidth;
    },
    openCard(state) {
      if ((state.showAdverts === false && state.active == 2)) {
        state.showAdverts = true
      } else if ((state.showMentors === false && state.active == 7)) {
        state.showMentors = true
      } else if ((state.showAdverts === true && state.active == 2)){
        state.showAdverts = false
      } else if ((state.showMentors === true && state.active == 7)){
        state.showMentors = false
      }
      
    }  
  },
  actions: {
  },
  getters: {
  },
  modules: {
    adverts: listCardAdverts,
    getContent: getCardContent,
    mentors: listCardMentors
  }
})
