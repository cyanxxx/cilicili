<template>
  <div>
    <slot></slot>
    <div class="menu clearFix">
      <div class="list" v-for = "list in menuList">
        <a href="list.link">
          <img v-lazy="list.img_url" alt="list.title" >
        </a>
        <div class="text">
          <a href="list.link">
            {{ list.title }}
          </a>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'patitons'}" tag="div" class="more">
        more<i class="iconfont icon-iconfontjiantou2"></i>
    </router-link>
  </div>

</template>
<script>
  export default{
    props: {
      menuList: Array
    }
  }
</script>
<style lang="scss" scoped>
.text{
    padding: 16px 0;
    font-weight: bold;
    >a{
      color:#fff;
      text-decoration: none;
    }
  }
.menu{
  @media screen and (max-width: 1160px){
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    >.list{
      flex: 1 50%;
      text-align: center;
      
    }
  }

  
  @media screen and (min-width: 1160px){
    margin-right: -110px;
    overflow:hidden;
    >.list{
      float: left;
      margin-right: 110px;
      margin-bottom: 50px;
      >a{
        display: block;
      }
      img{
        width: 310px;
        height: 174px;
      }
      
      }
    }

}
</style>
