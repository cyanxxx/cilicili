import Vue from 'vue'
import Router from 'vue-router'
import Main from '../view/Main.vue'
import SpColums from '../view/SpColums.vue'
import Patitons from '../view/Patitions.vue'
import LiveRooms from '../view/LiveRooms.vue'
import Videos from '../view/Videos.vue'
import LiveVideos from '../view/LiveVideos.vue'
import Articles from '../view/Articles.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/video/:id',
      name: 'video',
      component: Videos,
    },
    {
      path: '/live-video/:id',
      name: 'LiveVideos',
      component: LiveVideos
    },
    {
      path: '/articles/:id',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/patitons',
      name: 'Patitons',
      component: Patitons
    },
    {
      path: '/SpColums',
      name: 'SpColums',
      component: SpColums
    },
    {
      path: '/LiveRooms',
      name: 'LiveRooms',
      component: LiveRooms
    }
  ],
  linkActiveClass:"active",
})
