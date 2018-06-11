import { getUserInfo, getTimeLine,getPublicTimeline, getWbComment } from '../../api/userInfo'
import { oauthPost } from '../../api/auth'

const state  = {
  login:false,
  token: {},
  userInfo:{
    userName:'',
    userImg:''
  }
}

const getters = {
  needLogin: state => !state.login,
  token: state => state.token,
  login: state => state.login,
  userInfo: state => state.userInfo
}

const mutations = {
  loginIn(state, token) {
    //save in state
    state.token = token
    state.login = true
  },
  saveUserInfo(state,data) {
    state.userInfo.userName = data.screen_name;
    state.userInfo.userImg = data.profile_image_url;
  }
}

const actions = {
  signIn: ({ commit }, code) => {
    //异步请求，拿到token
    oauthPost(
        code,
        response => {
            //提交mutation
            commit('loginIn', response)
        },
        err => {
            console.log(err);
        }
    )
  },
  getUser: ({ commit, state}) => {
    getUserInfo(state.token.access_token,state.token.uid,
                response => {
                //console.log(response)
                commit('saveUserInfo',response)
                },
                err => {
                  console.log(err);
                }
              )
  },

}
export default {
  state,getters,actions,mutations
}
