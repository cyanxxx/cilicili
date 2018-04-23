<template lang="html">
  <div class="img_wrapper" v-if="visible">
    <div class="progress"></div>
    <div class="overlay"></div>

    <div class="logo" ref="logo">
      <div class="text">giligili</div>
    </div>
    <div class="img_box">
      <img  :src="img.url" :height="height" :class="{'twoCols':Math.floor(index/2)==0,'threeCols':Math.floor(index/2)>0}" :index = "index" alt="img.id" v-for=" (img,index) in imgs">
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return{
      logo: {url: '',text: 'giligili'},
      visible:  false,
      imgs: [
        {url:'../../static/pic/banner/1.png',id: ''},
        {url:'../../static/pic/banner/2.png',id: ''},
        {url:'../../static/pic/banner/3.png',id: ''},
        {url:'../../static/pic/banner/4.png',id: ''},
        {url:'../../static/pic/banner/5.png',id: ''}
      ]
    }
  },
  computed:{
    height () {
      let height = window.localStorage.getItem('height');
      return height/2;
    }
  },
  mounted () {
    this.visible = true;
    this.$nextTick(() => {
    console.log(this.$refs.logo);
    this.$refs.logo.classList.add('fin');

});

  }
}
</script>

<style lang="scss">
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
      background: rgba(0,0,0,0.3);
    }

    >.progress{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: #fff;
      z-index: 10;
    }

    >.logo{
      position: absolute;
      width: 100%;
      height: 100%;
      transition: all 2s;
      background: #1fb5ad;
      &.fin{
        width: 494px;
        height: 108px;
        top:50%;
        left:50%;
        margin-left: -247px;
        margin-top: -54px;
      }
      >.text{
        margin: auto;
        color:#fff;
        text-align: center;
        font-size: 32px;
        line-height: 108px;
      }
    }

    .img_box{
      display: block;
      float: left;
      .twoCols{
        width: 50%;
      }
      .threeCols{
        width: 33.333333%;
      }
    }

  }

</style>
