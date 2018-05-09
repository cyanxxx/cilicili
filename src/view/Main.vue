<template>
  <div>
    <!-- 分区 -->
    <patition :menuList="patitionImgData">
      <h2>分区</h2>
    </patition>
    <div class="clearFix">
      <!-- 专栏 -->
      <sp-colum class="col-5 spcol">
        <h2>专栏</h2>
      </sp-colum>
      <!-- 直播 -->
      <live class="col-5 live" :lists="liveData">
        <h2>直播</h2>
      </live>
    </div>
  </div>

</template>
<script>
  import Patition from '../components/Patition.vue'
  import SpColum from '../components/SpColum.vue'
  import Live from '../components/Live.vue'
  import faker from "../../static/faker"

  export default {
    components:{
      Patition,
      SpColum,
      Live
    },
    data () {
      return {
        patitionImgData: [],
        liveData: [],
        spColData: []
      }
    },
    created () {
      this.patitionImgData = faker.patitionImgData();
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
