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
import GroupVideos from '../components/GroupVideos.vue'
import BackTop from '../components/BackTop.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return{
       laest : '最新更新',
    }

  },
  computed: mapGetters({
    areaVideos: "lists"
  }),
  components: {
    GroupVideos,BackTop
  },
  created() {
    this.$bar.start();
    this.$store.dispatch('getVideos')
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
$color : #1fb5ad;
.video{
  .laest,.title{
    background:$color;
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
}

</style>
