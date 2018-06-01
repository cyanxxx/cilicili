<template lang="html">
  <div class="container">
    <div class="login">
      <div class="top">
        <p class="main">已经有账号？</p>
        <p class="sub">欢迎回来</p>
      </div>
      <form id="sign" method="post">
        <div class="wrapper">
          <input type="text" id="username" name="username" v-model.trim="username" @blur="check(username,'uErr')" data-rule = 'required:"required"'>
          <label for="username">账号</label>
          <div class="error" v-show="uErr">*账号不能为空</div>
        </div>
        <div class="wrapper">
          <input type="password" id="password" name="password" v-model.trim="password" @blur="check(password,'pErr')" data-rule = 'required:"required"'>
           <label for="password">密码</label>
           <div class="error" v-show="pErr">*密码不能为空</div>
        </div>
        <button class="submit" @click.prevent="oauth">登陆</button>
        <a class="submit" @click.prevent="oauth">微博登陆</a>
      </form>
    </div>

    <div class="sign">
      <p class="main">新用户？</p>
      <p class="sub">创建一个新用户</p>
    </div>
  </div>
</template>

<script>
import { getUrlKey } from '../utils/getString'
import { getVideoId, clearVideoId } from '../utils/localStore'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { HOST_CONCIG, KEY_CONFIG, DEBUG } from '../api/config'

export default {
  data() {
    return {
      oauthCode: getUrlKey('code'),
      pErr: false,
      uErr: false,
      password:"",
      username:""
    }
  },
  computed: {
  ...mapGetters(['login','videoId']),
    //得到返回的code去换token
      code: function() {
          if (this.oauthCode) {
              return true
          } else {
              return false
          }
      },
  },
  mounted() {
    //检查是否拿到了code
    this.checkUrl();
  },
  watch: {
    login:function(val){
      if(val && DEBUG){
        this.$router.go(-1)
      }
    }
  },
  methods: {
    ...mapActions(['signIn']),
    ...mapMutations(['setVideoId']),
    checkUrl() {
        if (this.code) {
            this.signIn(this.oauthCode);
            var videoId = getVideoId();
          if(videoId){
            this.goBackToVideo(videoId);
          }else{
            this.getBackToRoast();
          }
        }

    },
    getBackToRoast() {
      this.$router.replace({name:'roast'});
    },
    goBackToVideo(videoId) {
      this.setVideoId(videoId);
      clearVideoId();
      this.$router.replace({name:'video',params:{id:this.videoId}});
    },
    oauth() {
      if(DEBUG){
        this.signIn(1);
      }else{
        var client_id = KEY_CONFIG.app_key;
        var redirect_uri = KEY_CONFIG.redirect_uri;
        var oauthUrl = HOST_CONCIG.oauth;
        //授权登陆页面
        window.open(oauthUrl + '?client_id=' + client_id + '&redirect_uri=' + redirect_uri, "_self", "", true);
      }

    },
    check(val,err) {
      if(!val){
        switch(err){
          case 'pErr':
            this.pErr = true;
          break;
          case 'uErr':
            this.uErr = true;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$color:#1fb5ad;
$darkColor:#1ca099;
@mixin middle {
  display: inline-block;
  width: 50%;
  margin-right: -3px;
  padding: 10px;
  vertical-align: middle;
  text-align: center;
}
@mixin space {
  .main{
    color:$color;
    font-size:20px;
    margin-bottom:5px;
  }
  .sub{
    color: #c3c3c3;
    letter-spacing: 2.5px;
  }
}
.login,.sign{
  height: 100%;
  margin-top:65px;
  text-align: center;
  @include middle;
  .top{
    padding: 10px 0;
    @include space;
  }
}
.sign{
  @include space;
}

form{
  margin-top:24px;
  color: #c4c2c3;
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  .wrapper{
    font-size:16px;
    position:relative;
    margin-bottom:40px;
    position: relative;
    input{
      width:100%;
      height:100%;
      outline:0;
      border:0;
      padding:10px;
      border-bottom: 1px solid rgba(0,0,0,.15);
      border-radius: 4px;
    }
    label{
      position:absolute;
      bottom:0;
      left:10px;
      top:10px;
      font-size:14px;
      height: 14px;
    }
    .error{
     color:#32323a;
     // display:none;
     position: absolute;
     top:-30px;
     left:0;
     padding: 5px 10px;
     background: #fff;
     font-size:10px;
     border-radius: 2px;
     &:before{
       content:'';
       position: absolute;
       top:100%;
       left:0;
       width: 0;
       height: 0;
       border-top:5px solid #fff;
       border-left:5px solid transparent;
       border-right: 5px solid transparent;
     }
   }
  }
  .submit{
    display: inline-block;
    cursor:pointer;
    background:$color;
    color:#fff;
    outline:0;
    border:0;
    padding:12px 0;
    border-radius: 4px;
    box-shadow: 0 1px 3px 1px rgba(0,0,0,.35);
    transition: all 0.3s ease-in-out;
    margin-right: 26px;
    width: 128px;
    letter-spacing: 2.5px;
    &:hover{
      background:$darkColor;
    }
  }
}


</style>
