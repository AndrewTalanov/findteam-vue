import { createStore } from 'vuex'
import { getCardContent } from './getCardContent';
import { listCardAdverts } from './listCardAdverts';
import { listCardMentors } from './listCardMentors';
import { listCardInvestors } from './listCardInvestors';

export default createStore({
  state: {
    active: 2,
    widthBrows: null,
    showCard: false,
    closeHeaderMobile: false,
  },
  mutations: {
    changeActive(state, id) {
      return state.active = id
    },
    updateWidthBrows(state) {
      return state.widthBrows = document.documentElement.clientWidth;
    },
    openCard(state) {
      if (state.showCard === false) {
        state.showCard = true
      } else{
        state.showCard = false
      }
    },
    onlyCloseCard(state) {
      state.showCard = false
    }, 
    closeHeader(state) {
      state.closeHeaderMobile = true
    },
    openHeader(state) {
      state.closeHeaderMobile = false
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
    adverts: listCardAdverts,
    mentors: listCardMentors,
    investors: listCardInvestors,
    getContent: getCardContent,
  }
})
