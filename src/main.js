// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import store from './store'
import VueJsonp from 'vue-jsonp'
import Vuelazyload from 'vue-lazyload'
import ProgressBar from './view/ProgressBar.vue'
Vue.use(VueJsonp)
Vue.use(Vuelazyload, {
  loading: require('@/assets/pic/loading.svg')
})

Vue.config.productionTip = false
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
//挂载在body
document.body.appendChild(bar.$el)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
