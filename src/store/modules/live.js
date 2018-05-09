import live from '../../api/live'
const state = {
  liveItem:[]
}
const getters = {
  liveItem: state => state.liveItem
}
const actions = {
  getliveItem ({ commit }) {
    live.getData(items => commit('setLiveItem',items))
  }
}
const mutations = {
  setLiveItem (state,items){
    state.liveItem = items;
  }
}

export default{
  state,getters,actions,mutations
}
