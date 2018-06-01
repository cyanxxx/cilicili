<template lang="html">
  <div class="hover_img" :style="hoverStyle" ref="box" @mouseenter="open" @mouseleave="close">
    <div class="top clearFix" :style="{background:'url('+user.cover_image_phone+') center'}">
      <img :src="user.profile_image_url" alt="img" class="user_img">
      <div class="intro">
       <div class="username">{{ user.screen_name }}</div>
       <div class="user_signature">{{ user.description }}</div>
      </div>
    </div>
    <div class="info">
      <a  class="user_replys">
        关注
        <p>{{ user.friends_count }}</p>
      </a>
      <a class="user_articles">粉丝
        <p>{{ formatWbNumber(user.followers_count) }}</p>
      </a>
      <a class="user_followers">微博
        <p>{{ user.statuses_count }}</p>
      </a>
    </div>
    <div class="sub_button">
      <button class="follow">+&nbsp&nbsp关注</button>
      <button class="chat">私信</button>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
import { formatNumber } from '../utils/getString'
export default {
  data() {
    return {
      margin:36,
      view_h:0,
      box_h:0,
      offset:0,
    }
  },
  props:{
    height:{
      type:Number
    },
    hoverStyle:{
      type:Object
    },
    timer:{
      type:Number
    }
  },
  computed:{
    ...mapGetters({user:'hoverData'}),
    timerId:{
      get:function(){
        return this.timer
      },
      set:function(nv){
      }
    }
  },
  mounted() {
    this.view_h = document.documentElement.clientHeight;
    this.judgeDis();
  },
  methods:{
    ...mapMutations(['closeHover', 'openHover']),
    judgeDis:function() {
      var box = this.$refs.box
      var box_h = box.offsetHeight;
      var offset = box.offsetTop;
      if(box_h + offset + this.margin - document.documentElement.scrollTop > this.view_h){
        box.style.top = this.height - box_h +'px'
      }else{
        return;
      }
    },
    open:function() {
      if(this.timerId){clearTimeout(this.timerId);}
      this.openHover();
    },
    close:function() {
      this.timerId = setTimeout(()=>{
        this.closeHover()
      },500)
    },
    formatWbNumber:function(val) {
      return formatNumber(val);
    }
  }
}
</script>

<style lang="scss">
$color:#1fb5ad;
.hover_img{
  padding-bottom:16px;
  background: #fff;
  box-shadow:1px 1px 5px rgba(0,0,0,.1),-1px 1px 5px rgba(0,0,0,.1);
  position: absolute;
  z-index:999;
  .top{
  padding: 10px 7px;
  .user_img{
  border-radius: 50%;
  vertical-align: middle;
  }
  .intro{
    display: inline-block;
    margin-left: 7px;
    vertical-align: middle;
    width: 250px;
    color:#333;
    .username{
      margin-bottom: 7px;
    }
    .user_signature{
      font-size:14px;
    }
  }
}

  .info{
    text-align:center;
    a{
      display:inline-block;
      padding:10px 16px;
      color:#C3C3C3;
    }
    p{
     margin-top:12px;
     color:#000;
   }
  }
  .sub_button{
    text-align:center;
    button{
      border: 0;
      background: #fff;
      outline: 0;
      cursor: pointer;
      padding: 8px 26px;
      border-radius: 3px;
      margin-right:10px;
    }
    .follow{
      background: $color;
      color: #fff;
    }
    .chat{
      border:1px solid $color;
      background: #fff;
      color:$color;
    }
  }
}


</style>
