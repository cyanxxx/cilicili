import Vue from 'vue'
import Router from 'vue-router'
import Main from '../view/Main.vue'
import SpColums from '../view/SpColums.vue'
import Patitons from '../view/Patitions.vue'
import LiveRooms from '../view/LiveRooms.vue'
import Videos from '../view/Videos.vue'
import LiveVideos from '../view/LiveVideos.vue'
import Articles from '../view/Articles.vue'
import Login from '../components/Login.vue'
import Roast from '../view/Roast.vue'


Vue.use(Router)

export default new Router({
   mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/video/:id',
      name: 'video',
      component: Videos,
    },
    {
      path: '/roast',
      name: 'roast',
      component: Roast,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/live-video/:id',
      name: 'liveVideos',
      component: LiveVideos
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: Articles
    },
    {
      path: '/patitons',
      name: 'patitons',
      component: Patitons
    },
    {
      path: '/spColums',
      name: 'spColums',
      component: SpColums
    },
    {
      path: '/liveRooms',
      name: 'liveRooms',
      component: LiveRooms
    },
    // {
    //   path: '*',
    //   redirect: '/main',
    // }
  ],
  linkActiveClass:"active",
})
