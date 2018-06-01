<template lang="html">
  <div class="comment_container">
    <div class="top clearFix">
      <div class="comments fl">{{ commentList.total_number }}条评论</div>
      <button class="fr">切换 {{ order }} 顺序</button>
    </div>
    <div class="comment_wrapper">
      <div class="comment_item" v-for="list in commentList.comments">
        <div class="clearFix">
          <a :href="list.user.url" class="user_img" >
            <img :src="list.user.profile_image_url" alt="user_image">
          </a>
          <a href="list.user.url" class="name">{{ list.user.name }}</a>
          <span class="fr comment_date" >{{ formatTime(list.created_at) }}</span>
        </div>
        <p class="comment_text">{{ list.text }}</p>
      </div>
    </div>
    <pages></pages>
    <div class="add_comment line">
      <input type="text" name="reply"  placeholder="写下你的回复...">
      <div class="comment_action">
        <button type="button" class="comment_cancel">取消</button>
        <button type="button" class="comment">评论</button>
      </div>
    </div>
  </div>
</template>

<script>
import Pages from './Pages.vue'
import * as DateUtils from '../utils/date-utils'
import { formatDetails,formatUrl } from '../utils/getString'
export default {
  data() {
      return{
        order:"时间",
      }
  },

  props:{
    commentList:{
      type:Object
    }
  },
  components:{ Pages },
  methods:{
    formatTime(time) {
      return DateUtils.format(time);
    },
  }
}
</script>

<style lang="scss" scoped>
.comment_container {
  width: 98%;
  margin: 15px auto;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  .top {
    padding: 10px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    button:{
      border: 0;
      outline: 0;
      cursor: pointer;
      color: #c3c3c3;
      padding: 5px 8px;
      border-radius: 3px;
    }
  }
  .comment_wrapper {
    padding: 10px 16px;
  }
  .comment_item {
    margin-top: 26px;
    margin-bottom: 26px;
    a{
      text-decoration: none;
    }
    img {
      width: 26px;
      vertical-align: middle;
      border-radius: 50px;
    }
    .name{
      margin-left: 10px;
    }
    span {
      font-size: 14px;
    }
    .comment_date {
      color: #c3c3c3;
      font-size: 16px;
    }

    .comment_text {
      margin: 5px 0;
    }
  }
}
.add_comment {
  padding-top: 20px;
  >input{
    margin-top: 16px;
    width: 100%;
    color: #666;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #c3c3c3;
    outline:0;
  }
  .comment_action {
    text-align: right;
    margin-top: 10px;
    .comment {
      background: #1fb5ad;
      color: #fff;
      font-size: 14px;
      padding: 5px 12px;
      border-radius: 3px;
      border: 0;
      outline: 0;
      cursor: pointer;
    }
  }
}


.line {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding: 12px 16px;
}




</style>
