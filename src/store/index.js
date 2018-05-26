import Vue from 'vue'
import Vuex from 'vuex'
import spColum from './modules/spColum'
import live from './modules/live'
import comment from './modules/comment'
import video from './modules/video'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spColum,live,comment,video,user
  }
})
