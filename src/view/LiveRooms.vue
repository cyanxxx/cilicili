<template lang="html">
  <div class="room">
    <div class="recommand">
      <embed width="100%" height="574px" allownetworking="all" allowscriptaccess="always" src="https://staticlive.douyucdn.cn/common/share/play.swf?room_id=24422" quality="high" bgcolor="#000" wmode="window" allowfullscreen="true" allowFullScreenInteractive="true" type="application/x-shockwave-flash">
    </div>
    <div class="box">
      <div class="pre" v-show="1!=current" @click="current-- && turnTo(current)">&lt</div>
      <div class="other">
        <div class="wrapper" ref="list">
          <router-link :to="{ name: 'liveVideos', params: {id:item.roomid} }" v-for="item in liveLists"
          tag="div" class="live" :key=item.roomid ref="preVideo">
              <img v-lazy="item.pic" alt="item.title">
              <div class="overlay">
                <div class="content">
                  <div class="title">{{ item.title }}</div>
                  <div class="author">{{ item.uname }}</div>
                </div>
              </div>
          </router-link>
        </div>
      </div>
      <div class="next" v-show="current!=totalPage" @click="current++ && turnTo(current)">&gt</div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return{
      author: 'pigff',
      title: '【PIGFF】3点了,娱乐',
      showItem: 4,
      current: 1,
    }
  },
  computed: {
    ...mapGetters({liveLists:'liveItem'}),
    totalPage() {
      return Math.ceil((this.total - this.showItem)/ 2 + 1);
    },
    total() {
      return this.liveLists.length;
    },
    padding() {
      let left =  parseInt(window.getComputedStyle(this.$refs.preVideo[0].$el).marginLeft);
      let width =   parseInt(window.getComputedStyle(this.$refs.preVideo[0].$el).width);
      let totalWidth = left+width;
      return totalWidth*2;
    }
  },
  methods: {
    turnTo(c) {
      let dis = (c-1) * parseInt(this.padding);
      console.log(this.padding);
      this.$refs.list.style.left = -dis + 'px';
    }
  }
}
</script>

<style lang="scss" scoped>
$color:#1fb5ad;
@mixin jiantou($radius) {
  position: absolute;
  background: #1fb5ad;
  opacity: 0.6;
  color:#fff;
  z-index: 20;
  height: 100%;
  top:0;
  padding:75px 16px;
  border-radius: $radius;
  transition: all .2s ease-in;
  font-weight: bold;
  &:hover{
    opacity: 1;
  }
}
.room{
  .box{
    margin-top: 40px;
    position: relative;
    .pre{
      left:-50px;
      @include jiantou(100% 0 0 100% / 50%);
    }
    .next{
      right:-50px;
      @include jiantou(0 100% 100% 0 / 50%);
    }
  }
  .other{
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 175px;
    .wrapper{
      width:2960px;
      position: absolute;
      left: 0;
      margin-left: -24px;
      transition: all .3s cubic-bezier(.25,.1,.25,1);
      .live{
        float: left;
        color:$color;
        margin-left:24px;
        position: relative;
        .overlay{
          position: absolute;
          width: 100%;
          height: 175px;
          top:0;
          left:0;
          background: rgba(0,0,0,.7);
          .content{opacity: 0;padding: 10px;};
          cursor:pointer;
          &:hover{
            border: 2px solid $color;
            background: transparent;
            .content{
              opacity: 1;
              position: absolute;
              left:0;
              bottom:0;
              background: #000;
              width: 100%;

              .title{
                font-weight: bold;
                margin: 7px 0;
              }
              .author{
                font-size: 14px;
              }
            }
          }
        }
        img{
          width: 272px;
          height: 175px;
        }
      }
    }
  }
}
</style>
