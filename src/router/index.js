import Vue from 'vue'
import Router from 'vue-router'
import Main from '../Main.vue'
import SpColums from '../SpColums.vue'
import Patitons from '../Patitions.vue'
import LiveRooms from '../LiveRooms.vue'
import Videos from '../Videos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: 'video/:id',
      name: 'Videos',
      component: Videos
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
  ]
})
