import comment from '../../api/comment'

const state = {
  comments: [],
  pages: 0,
}

const getters = {
  comments: state => state.comments,
  pages: state => state.pages
}

const actions = {
  getComments ({ commit }, param) {
    comment.getComments(param,items => commit('setComments',items))
  },
  postComments ({ commit }, items) {
    commit('addComments',items)
  }
}

const mutations = {
  setComments (state, items) {
    state.comments = items.comment;
    state.pages = items.totalcount;
  },
  addComments (state, items) {
    state.comments.unshift(items);
  }
}

export default {
  state,getters,actions,mutations
}
