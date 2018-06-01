<template lang="html">
  <div>
    <div class="modal" :style="{ top: top+'px' }">
      <div class="header">
        {{header}}
      </div>
      <div class="content">
        {{content}}
      </div>
      <button class="login" v-on:click="oauth">登录</button>
    </div>
    <div class="overlay" :style="{ width: width+'px' ,height:height+'px'}" @click="closeModal"></div>
  </div>

</template>

<script>
import { mapMutations } from 'vuex'
import { HOST_CONCIG, KEY_CONFIG } from '../api/auth'
export default {
  data() {
    return{
      height: 0,
      width: 0
    }

  },
  props: {
    header: {
      type: String,
      default: "登陆提示"
    },
    content: {
      type: String,
      default: "你暂未登陆，无法评论"
    },
    top: {
      type:Number
    },
    modalOpen: {
      type:Boolean
    }
  },
  mounted() {
    this.width = document.documentElement.clientWidth;
    this.height =  document.documentElement.clientHeight;
  },
  methods:{
    ...mapMutations({close:'closeModal'}),
    closeModal() {
      this.close();
    },
    oauth() {
      this.$router.push({name:'login'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal{
    position: absolute;
    width: 450px;
    height: 150px;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color:#777;
    background: #fff;
    box-shadow: 3px 3px 7px  rgba(0,0,0,0.3);
    z-index: 999;
    .header{
      background: #f1f1f1;
      padding: 7px;
    }
    .content{
      padding: 7px;
    }
    .login{
      position: absolute;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      color:#fff;
      background: #1fb5ad;
      border-radius: 4px;
      padding: 10px 16px;
      border:0;
      outline: 0;
    }
  }
  .overlay{
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,0.6);
  }
</style>
