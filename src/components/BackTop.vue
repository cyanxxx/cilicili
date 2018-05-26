<template lang="html">
  <div class="down">
    <i class="iconfont icon-58" @click="toTop()"></i>
  </div>
</template>

<script>
export default {
  methods: {
    toTop() {
      if (document.documentElement.scrollTop){
        document.documentElement.scrollTop = 0;
      } else {
        document.body.scrollTop = 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .down{
    position: fixed;
    right: 10%;
    top:95%;
    cursor: pointer;
    .icon-58{
      font-weight: bold;
      font-size: 32px;
      color:#1fb5ad;
    }
  }
  .icon-58:before { content: "\e645"; }
</style>
