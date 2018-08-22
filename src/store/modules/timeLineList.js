import { getUserInfo } from '@/api/userInfo'
import { oauthPost } from '@/api/auth'

const state = {
  hoverData:[],
  hoverOpen:false,
}

const getters = {
  hoverData: state => state.hoverData,
  hoverOpen: state => state.hoverOpen,
}

const mutations = {
  closeHover(state){
    state.hoverOpen = false;
  },
  openHover(state){
    state.hoverOpen = true;
  },
  saveHoverData(state, data) {
    state.hoverData = data;
  }
}

export default {
  state,getters,mutations
}
