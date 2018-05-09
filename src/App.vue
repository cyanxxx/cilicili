<template>
  <div id="app">
    <banner :bannerImg="bannerImgData" v-if="firstLoad"></banner>
    <div class="container">
      <!-- 导航区 -->
      <ul class="nav">
        <router-link tag="li" :to="{ name:'Main'}" exact>首页</router-link>
        <router-link tag="li" :to="{ name:'Patitons' }" >分区</router-link>
        <router-link tag="li" :to="{ name:'SpColums' }" >专栏</router-link>
        <router-link tag="li" :to="{ name:'LiveRooms'}" >直播</router-link>
      </ul>
      <transition name="fade">
        <router-view class="view"></router-view>
      </transition>

    </div>
  </div>
</template>

<script>
let img =  require.context('../static/pic',false, /\.(png|jpg|gif|svg)$/)
import font from '../static/fonts/font.css'
import faker from "../static/faker"
import Banner from './components/Banner.vue'
export default {
  name: 'App',
  components:{
    Banner
  },
  data () {
    return{
      bannerImgData:[],
      firstLoad:false,
    }
  },
  created () {
    window.localStorage.setItem('height',document.documentElement.clientHeight);
    window.localStorage.setItem('width',document.documentElement.clientWidth);
    this.bannerImgData = faker.bannerImgData();
    this.$route.name=='Main'?this.firstLoad=true:this.firstLoad=false;
    window.localStorage.setItem('userImg',img('./'+'user.png'));
    this.$store.dispatch('getSpItem');
    this.$store.dispatch('getliveItem');
  },
  watch: {
    '$route' (to, from){
      this.firstLoad=false;
    }
  }
}
</script>
<style lang="scss" >
#app{
  margin-bottom: 20px;
}
.container{
  width: 1160px;
  margin: auto;
  .nav{
    text-align: center;
    >li{
      padding: 0px 90px 10px;
      display: inline-block;
      color:#fff;
      cursor:pointer;
    }
    .active{
      border-bottom: 2px solid #1fb5ad
    }
  }
  .view{
    margin-top: 40px;
    transition: all .5s ease;
  }
  .fade-enter{
      opacity: 0;
  }
  .fade-leave-active{
      opacity: 0;
  }
}
</style>
