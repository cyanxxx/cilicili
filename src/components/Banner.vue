<template lang="html">
  <div class="img_wrapper" ref="box">
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
      <div class="text" :class="{blink:status}">CLICILI</div>
    </div>
    <div class="img_box">
      <img  ref="img" :src="img.url" :height="height" :class="{'twoCols':Math.floor(index/2)==0,'threeCols':Math.floor(index/2)>0}" :index = "index" alt="img.id" v-for=" (img,index) in bannerImg">
    </div>
  </div>
</template>

<script>

export default {
  props: {
    bannerImg: Array
  },
  data () {
    return{
      logo: {url: '',text: 'CILICILI'},
      visible:  false,
      status: true,
    }
  },
  computed:{
    height () {
      let height = window.localStorage.getItem('height');
      return height/2;
    }
  },
  created () {
    document.body.style.overflow = 'hidden';
  },
  mounted () {
    this.$nextTick(() => {
      let loadedIndex = 0;
      this.$refs.img.forEach((x) => {
        x.onload = ()=> {
          loadedIndex++;
          this.$refs.progress.style.width = 16 + parseInt(this.$refs.progress.style.width)+'%';
          if(loadedIndex==this.bannerImg.length){
            document.body.style.overflow = 'auto';
            this.$refs.progress.style.width = 100+'%';
            this.$refs.box.classList.add('fin');
            this.status = false;
          }
        }
      })
    });
  },
  methods:{
    down(){
      let height = window.localStorage.getItem('height');
      console.log(height,document.documentElement.scrollTop);
      // if(document.documentElement.scrollTop){
      //   document.documentElement.scrollTop = height+'px';
      //   console.log("jo")
      // }else{
      //   document.body.scrollTop= height+'px';
      // }
      document.documentElement.scrollTop = height;
        console.log(height,document.documentElement.scrollTop,document.body.scrollTop);
    }
  }
}
</script>

<style lang="scss" scoped>
  .img_wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    >.overlay{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      .box{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        bottom: 20px;
        left:50%;
        transform: translateX(-50%);
        .icon{
          position: absolute;
          top:50%;
          left: 50%;
          transform:translate(-50%,-50%);
          color:#1fb5ad;
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
      position: absolute;
      width: 100%;
      height: 100%;
      transition: all 0.5s cubic-bezier(.17, .67, .25, 1.02);
      background: #1fb5ad;
      background-position: center center;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      >.text{
        font-family: 'Lato-Bold';
        position: absolute;
        color:#fff;
        font-size: 50px;
        letter-spacing: 5px;
        top:50%;
        left:50%;

        &.blink{
          animation: blink .8s  steps(1)  infinite;
          @keyframes blink{50%{opacity: 0}}
        }
        transform: translate(-50%,-50%) scale(0.5);
        }

      }
    .img_box{
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
        >.text{
          transform: translate(-50%,-50%) scale(1);
          animation-play-state:paused;
        }
      }
  }
}
</style>
