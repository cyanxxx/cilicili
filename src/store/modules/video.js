import video from '@/api/video'

const state = {
  lists: {},
}

const getters = {
  lists: state => state.lists,
}

const mutations = {
  setVideos(state, item) {
    state.lists = item;
  },
}

const actions = {
  getVideos({ commit }) {
    video.getVideo(items => commit('setVideos', items))
  },

}

export default{
  state,getters,actions,mutations
}
