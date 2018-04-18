<template>
  <div>
    <!-- 分区 -->
    <patition>
      <h2>分区</h2>
    </patition>
    <div class="clearFix">
      <!-- 专栏 -->
      <sp-colum class="col-5 spcol">
        <h2>专栏</h2>
      </sp-colum>
      <!-- 直播 -->
      <live class="col-5 live">
        <h2>直播</h2>
      </live>
    </div>

  </div>

</template>
<script>
  import Patition from './components/Patition.vue'
  import SpColum from './components/SpColum.vue'
  import Live from './components/Live.vue'
  export default {
    components:{
      Patition,
      SpColum,
      Live
    }




  }
</script>
<style scoped lang="scss">
.col-5{
    float: left;
    width: 50%;
  }
.spcol{
  padding-right: 43px;
}
.live{
  padding-left: 43px;
}
</style>
