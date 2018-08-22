<template>
  <div>

    <!-- 分区 -->
    <patition :menuList="patitionImgData">
      <h2>分区</h2>
    </patition>
    <div class="clearFix">

      <!-- 专栏 -->
      <sp-colum class="col-5 spcol" :lists="preSpItem">
        <h2>专栏</h2>
      </sp-colum>

      <!-- 直播 -->
      <live class="col-5 live" :lists="liveItem">
        <h2>直播</h2>
      </live>
    </div>
  </div>

</template>
<script>
  import Patition from './components/Patition.vue'
  import SpColum from './components/SpColum.vue'
  import Live from './components/Live.vue'
  import faker from "@/assets/faker"
  import { mapGetters, mapActions} from 'vuex'
  export default {
    components:{
      Patition,
      SpColum,
      Live
    },
    data () {
      return {
        patitionImgData: [],
        liveData: []
      }
    },
    computed:{
      ...mapGetters(['preSpItem', 'liveItem']),
    },
    created () {
      this.patitionImgData = faker.patitionImgData();
      this.getliveItem();
      this.getSpItem();
    },
    methods: {
      ...mapActions(['getSpItem', 'getliveItem'])
    }
}
</script>
<style scoped lang="scss">
.more{
  text-align: right;
}
.col-5{
    float: left;
    width: 50%;
  }
.spcol{
  padding-right:40px;
}
.live{
  padding-left:40px;
}
h2{
    text-align: center;
}
</style>
