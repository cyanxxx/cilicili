<template lang="html">
  <div class="video">
    <group-videos v-for="(val,key) in areaVideos" :videos="val" :key="key">
      <div class="laest" slot="laest">
        <div class="text">{{ laest }}</div>
      </div>
      <div class="title" slot="title">
        <div class="text">{{ key }}</div>
      </div>
    </group-videos>
    <back-top></back-top>
  </div>
</template>

<script>
import GroupVideos from './components/GroupVideos.vue'
import BackTop from '@/components/BackTop.vue'
import video from '@/api/video'
export default {
  data() {
    return{
       laest : '最新更新',
       areaVideos:[]
    }

  },
  components: {
    GroupVideos,BackTop
  },
  created() {
    this.$bar.start();
    video.getVideo((data) => {
      this.areaVideos = data
    })
  },
  methods:{
    toTop() {
      if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0;
      } else {
        document.body.scrollTop= 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_variable.scss';
.video{
  .laest,.title{
    background:$theme-color;
    display: flex;
    width: 248px;
    height: 142px;
    float: left;
    margin-right: 26px;
    margin-bottom: 26px;
    >.text{
      margin: auto;
      color:#fff;
      font-size: 26px;
    }
  }
      @media screen and (max-width: 414px){
       .title{
        float: none;
        margin: 26px auto;
      }
      .laest{
        display: none;
      }
    }
}

</style>
