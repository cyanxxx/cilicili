<template lang="html">
  <div class="wrapper clearFix">
    <div class="top clearFix">
      <h2>{{ title }}</h2>
    </div>
    <iframe src="http://jx.yylep.com/?url=http://v.youku.com/v_show/id_XOTI3MDU3MzY0.html" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" id="player_iframe" allowfullscreen="true"></iframe>
  </div>
</template>

<script>
import faker from "../../static/faker"
export default {
  data () {
    return{
      content:''
    }
  },
  created () {
    this.title = faker.videosData().title;
    this.author = faker.videosData().author;
  },
}
</script>

<style lang="scss" scoped>
  .top{
    margin: 20px 0;
    h2{
      float: left;
      margin: 0;
      line-height: 60px;
      color:#fff
    }
  }
  iframe{
    width: 100%;
    height: 564px;
  }

</style>
