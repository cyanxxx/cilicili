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
@import '@/style/_variable.scss';
.down{
  position: fixed;
  right: 30px;
  bottom: 16px;
  cursor: pointer;
  .icon-58{
    font-weight: bold;
    font-size: 32px;
    color: $theme-color;
  }
}
.icon-58:before { content: "\e645"; }
</style>
