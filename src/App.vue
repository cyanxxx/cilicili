<template>
  <div id="app">
    <banner></banner>
    <div class="container">
      <!-- 导航区 -->
      <ul class="nav">
        <router-link tag="li" :to="{ name:'Main'}">首页</router-link>
        <router-link tag="li" :to="{ name:'Patitons'}">分区</router-link>
        <router-link tag="li" :to="{ name:'SpColums'}">专栏</router-link>
        <router-link tag="li" :to="{ name:'LiveRooms'}">直播</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: 'App',
  components:{
    Banner
  }
}
</script>
<style lang="scss">
.container{
  width: 1160px;
  margin: auto;
}
.nav{
  text-align: center;
  >li{
    padding: 16px 120px;
    display: inline-block;
    color:#fff;
    cursor:pointer;
  }
}
h2{
  text-align: center;
}
</style>
