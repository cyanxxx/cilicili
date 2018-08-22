import Vue from 'vue'

import Router from 'vue-router'
import Main from '../view/Main'
import SpColums from '../view/SpColums'
import Patitons from '../view/Patitions'
import Videos from '../view/Videos'
import Roast from '../view/Roast'
import LiveRooms from '../view/LiveRooms.vue'
import LiveVideos from '../view/LiveVideos.vue'
import Articles from '../view/Articles.vue'
import Login from '../components/Login.vue'

import store from '../store'

Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        title:"首页"
      }
    },
    {
      path: '/patitons',
      name: 'patitons',
      component: Patitons,
      meta: {
        title:"分区"
      }
    },
    {
      path: '/spColums',
      name: 'spColums',
      component: SpColums,
      meta: {
        title: "专栏"
      }
    },
    {
      path: '/liveRooms',
      name: 'liveRooms',
      component: LiveRooms,
      meta: {
        title: "直播"
      }
    },
    {
      path: '/roast',
      name: 'roast',
      component: Roast,
      meta: {
        title: "吐槽"
      },
      // beforeEnter (to, from, next) {
      //   if(store.getters.token){
      //     store.dispatch('getHomeTimeline',{ page:1 })
      //   }
      //   next();
      // },
    },
    {
      path: '/video/:id',
      name: 'video',
      component: Videos,
      hidden: true
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
      hidden: true
    },
    {
      path: '/live-video/:id',
      name: 'liveVideos',
      component: LiveVideos,
      hidden: true
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: Articles,
      hidden: true
    }
  ],
  linkActiveClass:"active",
})
