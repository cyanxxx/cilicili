import { getUserInfo } from '@/api/userInfo'
import { oauthPost } from '@/api/auth'
import { getToken, saveToken } from '@/utils/localStore'

const state  = {
  token: getToken(),
  userInfo:{
    userName:'',
    userImg:''
  },
}

const getters = {
  token: state => state.token,
  login: state => !!state.token,
  userInfo: state => state.userInfo,
}

const mutations = {
  loginIn(state, token) {
    //save in state
    console.log(token)
    state.token = token
    saveToken(token)
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
    return new Promise((res,rej) =>{
      getUserInfo(state.token.uid,
        response => {
        //console.log(response)
        commit('saveUserInfo',response)
        },
        err => {
          console.log(err);
        })
      })
    },
}
export default {
  state,getters,actions,mutations
}
