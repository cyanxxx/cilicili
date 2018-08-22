import live from '@/api/live'
const state = {
  downData:false
}
const getters = {
  downData: state => state.downData
}

const mutations = {
  okData (state,items){
    state.downData = true;
  }
}

export default{
  state, getters, mutations
}
