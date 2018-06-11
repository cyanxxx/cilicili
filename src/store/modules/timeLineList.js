import { getUserInfo, getTimeLine,getPublicTimeline, getWbComment } from '../../api/userInfo'
import { oauthPost } from '../../api/auth'

const state = {
  timeLineLists:[],
  weiboComments:[],
  hoverData:[],
  hoverOpen:false,
  wbCommentNums:10
}

const getters = {
  timeLineLists: state => state.timeLineLists,
  weiboComments: state => state.weiboComments,
  hoverData: state => state.hoverData,
  hoverOpen: state => state.hoverOpen,
  wbCommentNums: state => state.wbCommentNums
}

const mutations = {
  saveTimeLine(state, data) {
    state.timeLineLists = data;
  },
  saveComments(state, {data, id}){
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
  getHomeTimeline: ({ commit, state, getters },{page, okFun}) => {
    getTimeLine(getters.token.access_token,page,
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
  getWbComments: ( { commit,state, getters },{id, page, okfun} ) => {
    return new Promise((res, rej) => {
      getWbComment(getters.token.access_token, page, id,
                  response => {
                    commit('saveComments',{data:response,id:id});
                      okfun && okfun(id)
                      res(response)
                  },
                  err => {
                    console.log(err);
                  })
    })

  }
}

export default {
  state,getters,actions,mutations
}
