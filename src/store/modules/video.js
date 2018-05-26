import video from '../../api/video'
import rule from '../../api/public'

const state = {
  lists: {},
  open:false,
  videoId:0
}

const getters = {
  lists: state => state.lists,
  open: state => state.open,
  videoId: state => state.videoId
}

const mutations = {
  setVideos(state, item) {
    state.lists = item;
  },
  closeModal(state) {
    state.open = false;
  },
  openModal(state) {
    state.open = true;
  },

  setVideoId(state,id) {
    state.videoId = id;
    //console.log(state.videoId)
  }
}

const actions = {
  getVideos({ commit }) {
    video.getVideo(items => commit('setVideos', items))
  },

}
// "bangumi": {
//         "0": {
//             "aid": 22645982,
//             "videos": 1,
//             "tid": 33,
//             "tname": "连载动画",
//             "copyright": 2,
//             "pic": "http://i2.hdslb.com/bfs/archive/d5c07060bb409bab2ff4b411924dcf8557ea93a9.jpg",
//             "title": "【1月】戒律的复活 15【独家正版】",
//{'bangumi':[{},{},{}],'xx':[]}

export default{
  state,getters,actions,mutations
}
