<template lang="html">
  <div class="img_wrapper" ref="box" >
    <div class="progress" ref="progress" style="width:6%"></div>
    <div class="overlay">
      <div class="box" v-show="!status">
        <div class="start">
          <div class="border border1"></div>
          <div class="border border2"></div>
        </div>
        <div class="icon iconfont icon-xia" @click="down()"></div>
      </div>
    </div>
    <div class="logo" ref="logo">

    </div>
    <div class="text" :class="{blink:status}">{{ text }}</div>
    <div class="img_box" >
      <img  v-for="(img, index) in bannerImg" ref="img" :src="img.url"  :class="{'twoCols':Math.floor(index / 2) == 0,'threeCols':Math.floor(index / 2) >0 }"  alt="img.id" :style="{height:height+'px'}">
    </div>
  </div>
</template>

<script>
import faker from "@/assets/faker"
import { DEBUG } from '../api/config'
  import { mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return{
      text: 'CILICILI',
      visible:  false,
      status: true,
      bannerImg: [],
      loadedIndex: 0
    }
  },
  computed:{
    ...mapGetters(['downData']),
    height () {
      let height = document.documentElement.clientHeight;
      return height / 2;
    }
  },
  created () {
    this.bannerImg = faker.bannerImgData();
    document.body.style.overflow = 'hidden';
  },
  watch: {
    downData(val) {
        if(val){
          this.finishLoad(this.loadedIndex)
        }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.img.forEach((x) => {
        x.onload = ()=> {
            this.loadedIndex++
            this.finishLoad(this.loadedIndex)
        }
      })
    })
  },
  methods: {
    down() {
      let height = window.localStorage.getItem('height');
      document.documentElement.scrollTop = height;
    },
    finishLoad(loadedIndex) {
      if(loadedIndex == this.bannerImg.length && this.downData){
        document.body.style.overflowY = 'auto';
        this.$refs.progress.style.width = 100 + '%';
        this.status = false;
        this.$refs.box.classList.add('fin');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_variable.scss';
.img_wrapper{
  position: relative;
  width:100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  >.overlay{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    z-index: 9;
    .box{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      .icon{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: $theme-color;
        font-size: 30px;
        cursor: pointer;
      }
      .start{
        width:100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
      }
    }
    .border{
      width:100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #1fb5ad;
      position: absolute;
    }
    @keyframes myscale1 {
      to{transform: scale(1);opacity: 1}
    }
    @keyframes myscale2 {
      from{opacity: 1}
      to{transform: scale(1.5);opacity: 0}
    }
    .border1{
      transform: scale(0.5);
      opacity: 0;
      animation: myscale1 .8s infinite linear;
    }
    .border2{
      transform: scale(1);
      opacity: 0;
      animation: myscale2 .8s .8s infinite linear;
    }
  }
  >.progress{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 5px;
    background: #fff;
    z-index: 10;
    transition: all .5s linear;
  }
  >.logo{
    margin: auto;
    width: 100%;
    height: 100%;
    transition: all 0.5s linear;
    background: #1fb5ad;
    z-index: 10;
  }
  .text{
    font-family: 'Lato-Bold';
    position: absolute;
    color:#fff;
    font-size: 50px;
    letter-spacing: 5px;
    top:50%;
    left:50%;
    z-index: 11;
    &.blink{
      animation: blink .8s  steps(1)  infinite;
      @keyframes blink{50%{opacity: 0;visibility:hidden;}}
    }
    transform: translate(-50%,-50%);
  }
  .img_box{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      >img{
        display: block;
        float: left;
      }
      .twoCols{
        width: 50%;
      }
      .threeCols{
        width: 33.333333%;
      }
    }
  &.fin{
      >.progress{display: none;}
      >.logo{
        width: 390px;
        height: 108px;
      }
    }
}
</style>
