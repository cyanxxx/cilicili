import sp from '@/api/spColum'
const state = {
  spItem:[]
}
const getters = {
  preSpItem: state => state.spItem.slice(0,4),
  comSpItem: state => state.spItem
}
const actions = {
  getSpItem ({ commit }) {
    return sp.getItem(items => commit('setSpItem',items))
  }
}
const mutations = {
  setSpItem (state,items){
    state.spItem = items;
  }
}

export default{
  state,getters,actions,mutations
}
