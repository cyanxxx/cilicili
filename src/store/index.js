import Vue from 'vue'
import Vuex from 'vuex'
import spColum from './modules/spColum'
import comment from './modules/comment'
import video from './modules/video'
import user from './modules/user'
import live from './modules/live'
import timeLineList from './modules/timeLineList'
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spColum, comment, video, user, timeLineList, live, main
  }
})
