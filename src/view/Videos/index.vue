<template lang="html">
  <div class="videos">
    <video-wrapper></video-wrapper>
    <comment></comment>
  </div>
</template>

<script>
import VideoWrapper from './components/VideoWrapper'
import Comment from './components/Comment'

export default {
  components: {VideoWrapper, Comment}
}
</script>

<style lang="scss" scoped>
.videos{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
