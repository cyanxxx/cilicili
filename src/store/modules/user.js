import { getUserInfo, getTimeLine,getPublicTimeline, getWbComment } from '../../api/userInfo'
import { oauthPost } from '../../api/auth'

const state  = {
  login:false,
  token: {},
  userName:'',
  userImg:'',
  timeLineLists:[],
  page:1,
  weiboComments:[],
  hoverData:[],
  hoverOpen:false
}

const getters = {
  needLogin: state => !state.login,
  token: state => state.token,
  login: state => state.login,
  userName: state => state.userName,
  userImg: state => state.userImg,
  timeLineLists: state => state.timeLineLists,
  page: state => state.page,
  weiboComments: state => state.weiboComments,
  hoverData: state => state.hoverData,
  hoverOpen: state => state.hoverOpen
}

const mutations = {
  loginIn(state, token) {
    //save in state
    state.token = token
    state.login = true
  },
  saveUserInfo(state,data) {
    state.userName = data.screen_name;
    state.userImg = data.profile_image_url;
  },
  saveTimeLine(state,data) {
    state.timeLineLists = data;
  },
  saveComments(state,{data,id}){
    state.timeLineLists.forEach((obj)=>{
      for (var key in obj) {
        if (key == 'id' && obj.id == id) {
          obj.weiboComments = data;
          state.weiboComments = data;
        }
      }
    })
  },
  closeHover(state){
    state.hoverOpen = false;
  },
  openHover(state){
    state.hoverOpen = true;
  },
  saveHoverData(state, data) {
    state.hoverData = data;
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
  getHomeTimeline: ({ commit, state },{page, okFun}) => {
    getTimeLine(state.token.access_token,page,
                response => {
                  commit('saveTimeLine',response.statuses);
                  console.log(this);
                  okFun()
                },
                err => {
                  console.log(err);
                }
              )
  },
  getWbComments: ( { commit,state },{id,page,okfun} ) => {
    getWbComment(state.token.access_token,page,id,
                response => {
                  commit('saveComments',{data:response,id:id});
                    okfun(id)
                },
                err => {
                  console.log(err);
                })
  }
}
export default {
  state,getters,actions,mutations
}
