<template lang="html">
  <div class="room">
    <div class="title">
      <h3>{{ title }}</h3>
      <p>作者：{{ author }}</p>
    </div>
  <embed width="100%" height="574px" allownetworking="all" allowscriptaccess="always" src="https://staticlive.douyucdn.cn/common/share/play.swf?room_id=24422" quality="high" bgcolor="#000" wmode="window" allowfullscreen="true" allowFullScreenInteractive="true" type="application/x-shockwave-flash">
    <div class="danmu">
      <button type="submit" @click="send">发送</button>
      <div class="text">
        <input type="text" v-model="msg" placeholder="请输入你的弹幕">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      author: 'pigff',
      title: '【PIGFF】3点了,娱乐',
      msg: ''
    }
  },
  methods: {
    send() {
      this.msg = "";
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_variable.scss';
@mixin placeholder($theme-color) {
  &::-webkit-input-placeholder {color:$theme-color}
  &:-moz-placeholder           {color:$theme-color}
  &::-moz-placeholder          {color:$theme-color}
  &:-ms-input-placeholder      {color:$theme-color}
}
  .room{
    .title{
    background: $theme-color;
    padding:7px 16px;
    padding-top:1px;
    border-radius: 10px;
    color:#fff;
    margin-bottom: -10px;
  }
  .danmu{
    margin-top: -10px;
    width: 100%;
    background: $theme-color;
    padding:25px 16px;
    padding-top:35px;
    border-radius: 10px;
    color:#fff;
    .text{
      input{
        width: 100%;
        background: transparent;
        border: 1px solid #fff;
        padding:7px;
        color:#fff;
        outline: none;
        @include placeholder(#fff);
      }
      margin-right: 80px;
    }
    button{
      float: right;
      background: $theme-color;
      padding:7px 16px;
      border-radius: 4px;
      color: #fff;
      border: 0;
      border: 1px solid #fff;
    }
  }
}
</style>
