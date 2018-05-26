import { getUserInfo, getTimeLine,getPublicTimeline } from '../../api/userInfo'
import { oauthPost } from '../../api/auth'

const state  = {
  login:false,
  token: {},
  userName:'',
  userImg:'',
  timeLineLists:[],
  page:1
}

const getters = {
  needLogin: state => !state.login,
  token: state => state.token,
  login: state => state.login,
  userName: state => state.userName,
  userImg: state => state.userImg,
  timeLineLists: state => state.timeLineLists,
  page: state => state.page,
}

const mutations = {
  loginIn(state, token) {
    //save in state
    state.token = token
    state.login = true
    //console.log(state.login)
  },
  saveUserInfo(state,data) {
    state.userName = data.screen_name;
    state.userImg = data.profile_image_url;
  },
  saveTimeLine(state,data,okFun) {
    state.timeLineLists = data;
  },
  savePublicTimeLine(state,data) {
    state.timeLineLists = data;
  },
}

const actions = {
  signIn: ({ commit }, code) => {
    //异步请求，拿到token
    oauthPost(
        code,
        response => {
            //提交mutation
            commit('loginIn', response.data)
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
  getHomeTimeline: ({ commit,state },page) => {
    getTimeLine(state.token.access_token,page,
                response => {
                  commit('saveTimeLine',response.statuses)
                },
                err => {
                  console.log(err);
                }
              )
  }
}
export default {
  state,getters,actions,mutations
}
