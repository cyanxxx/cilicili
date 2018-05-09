<template lang="html">
  <div class="articles">
    <h2>{{ articles.title }}</h2>
    <div class="wrapper clearFix">
      <div class="author">
        <img :src="articles.author.img_url" alt="">
        <p>{{ articles.author.name }}</p>
      </div>
      <div class="text" v-html="articles.text">

      </div>
    </div>
  </div>
</template>

<script>
import faker from '../../static/faker'
export default {
  data () {
    return{
      articles:{}
    }
  },
  created () {
    this.articles = faker.articlesData();
  }
}
</script>

<style lang="scss" scoped>
  .articles{
    margin-top: 60px;
    h2{text-align: center;}
    .wrapper{
      .author,.text{
        float: left;
      }
      .author{
        color:#1fb5ad;
        text-align: center;
      }
      .text{
        margin-left: 30px;
        color:#fff;
        width: calc(100% - 75px);
      }
    }
  }

</style>
