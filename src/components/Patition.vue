<template>
  <div>
    <slot></slot>
    <div class="menu clearFix">
      <div class="list" v-for = "list in menuList">
        <a href="list.link">
          <img :src="list.img_url" alt="">
        </a>
        <div class="text">
          <a href="list.link">
            {{ list.title }}
          </a>
        </div>

      </div>
    </div>
  </div>

</template>
<script>
  export default{
    data () {
      return{
        menuList:[
          {link:'',title:'动画',img_url:'../../static/pic/patition/animate.png'},
          {link:'',title:'电影',img_url:'../../static/pic/patition/movie.png'},
          {link:'',title:'生活',img_url:'../../static/pic/patition/life.png'},
          {link:'',title:'游戏',img_url:'../../static/pic/patition/game.png'},
          {link:'',title:'科技',img_url:'../../static/pic/patition/science.png'},
          {link:'',title:'电视剧',img_url:'../../static/pic/patition/series.png'}
        ]
      }
    }
  }
</script>
<style lang="scss">
  .menu{
    margin-right: -110px;
    overflow:hidden;
    >.list{
      float: left;
      margin-right: 110px;
      margin-bottom: 50px;
      img{
        width: 310px;
        height: 174px;
      }
    }
  }
</style>
