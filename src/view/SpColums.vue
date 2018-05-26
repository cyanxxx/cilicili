<template lang="html">
  <div class="spwrapper">
    <sp-wrapper></sp-wrapper>
    <back-top></back-top>
  </div>

</template>

<script>
import BackTop from '../components/BackTop.vue'
import SpWrapper from '../components/SpWrapper.vue'
export default {
  components: {
    SpWrapper,
    BackTop
  },

}
</script>


<style lang="scss" scoped>
  .spwrapper{
    position: relative;
  }
</style>
