<template>
  <div id="app">
    <banner v-if="firstLoad" @finshImg="finshImg"></banner>
    <div class="container">
      <!-- 导航区 -->
      <my-header :items="routes"></my-header>
      <transition name="fade">
        <keep-alive>
          <router-view class="view"></router-view>
        </keep-alive>
      </transition>

    </div>
  </div>
</template>

<script>
let img =  require.context('@/assets/pic',false, /\.(png|jpg|gif|svg)$/)
import Banner from './components/Banner.vue'
import myHeader from './components/Header.vue'
import "./style/font.scss";
export default {
  name: 'App',
  components: {
    Banner, myHeader
  },
  data() {
    return {
      firstLoad: false,
    }
  },
  computed:{
    routes() {
      return this.$router.options.routes
    }
  },
  created() {
    this.firstLoad = this.$route.name == 'main'?   true : false;
  },
  methods:{
    finshImg() {
      
    }
  }
}
</script>
<style lang="scss">
#app{
  margin-bottom: 20px;
}
.container{
  width: 1160px;
  margin: auto;
  .nav{
    text-align: center;
    display: flex;
    >li{
      padding:16px 0;
      flex: 1;
      color:#fff;
      cursor:pointer;
    }
    a{
      display: block;
      text-decoration: none;
      color:#fff;
    }
    .active{
      border-bottom: 2px solid #1fb5ad
    }
  }
  .view{
    margin-top: 40px;
    transition: all .6s ease;
  }
  .fade-enter{
      opacity: 0;
  }
  .fade-leave-active{
      opacity: 0;
  }
}
</style>
