<template lang="html">
  <div class="box">
    <div class="lists clearFix">
      <slot name="title" class="laest"></slot>
      <router-link :to="{ name: 'video', params: {id:video.aid} }" v-for="video in videos" :key="video.aid" class="videoLink">
        <img v-lazy="video.pic" alt="video.title" >
        <div class="overlay">
          <div class="title">{{ video.title }}</div>
        </div>
      </router-link>
      <slot name="laest" class="laest"></slot>
    </div>
  </div>

</template>

<script>
export default {
  props:['videos'],
  created(){
    this.$bar.finish();
  },
}
</script>

<style lang="scss" scoped>
.box{
  .lists{
    .videoLink{
      position: relative;
      display: block;
      float: left;
      margin-right: 26px;
      margin-bottom: 26px;
      width: 248px;
      height: 142px;
      img{
        width: 100%;
        height: 100%;
      }
      .overlay{
        opacity: 0;
        animation: all .2s ease-in;
        width:100%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
      }
      &:hover{
        .overlay{
          opacity: 1;
          background: rgba(0,0,0,.7);
          .title{
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            color:#1fb5ad;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
