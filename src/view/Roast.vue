<template lang="html">
  <div>
    <div class="articles" v-for="list in timeLineLists">
      <div class="user">
        <div class="top clearFix">
          <div class="date fr">{{ formatTime(list.created_at) }}</div>
        </div>
        <div class="usermsg">
          <a :href="list.user.url" class="user_img" data-load='false' popups-owns='user-457'>
            <img :src="list.user.profile_image_url" alt="user_image">
          </a>
          <div class="msg">
            <a class="name" :href="list.user.url">{{ list.user.screen_name }}</a>
            <p class="intro">{{ list.user.description }}</p>
          </div>
        </div>
      </div>
        <div class="articles_wrapper">
          <div class="articles_ctx">
            <span class="text">
              {{ list.text }}
            </span>
          </div>
          <div class="content_img">
            <ul  class="content-img-ul clearFix">
                <li v-for="img in list.pic_urls" class="img-li-default">
                    <div class="img-div" :style="{backgroundImage:'url(' + formatThumbImg(list.thumbnail_pic) + ')'}">
                    </div>
                </li>
            </ul>
          </div>
          <div class="content-re-content" v-if="list.retweeted_status">
              <span class="re-content-text" v-html="'@' + list.retweeted_status.user.name + ': '
                  + list.retweeted_status.text"></span>
              <div  class="content-img" v-if="list.retweeted_status.pic_urls">
                  <ul  class="content-img-ul clearFix">
                      <li v-for="innerImg in list.retweeted_status.pic_urls" class="img-li-default">
                          <div class="img-div" :style="{backgroundImage:'url(' + formatThumbImg(innerImg.thumbnail_pic) + ')'}"></div>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
        <div class="sub_wrapper">
          <button type="button" class="like_btn hover_action">
              <i class="iconfont icon-zan2"></i>
              {{ list.attitudes_count }}
            </button>
          <button type="button" class="comment_btn" >
              <i class="iconfont icon-icon"></i>
              回复
            </button>
          <button type="button" class="collect_btn" :class="{ active : list.favorited}">
            <i class="iconfont icon-shoucang"></i>
            收藏
          </button>
          <button type="button" class="collect_btn">
            <i class="iconfont icon-iconfonticonfontfenxiang"></i>
            分享
          </button>
        </div>
      </div>
    <modal v-if="needLogin && open"></modal>
    <back-top></back-top>
  </div>
</template>

<script>
import BackTop from '../components/BackTop.vue'
import * as DateUtils from '../utils/date-utils'
import Modal from '../components/Modal.vue'
import {
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  data() {
    return {
    }
  },
  components:{ Modal, BackTop} ,
  computed: {
    ...mapGetters(['timeLineLists', 'login','needLogin','open'])
  },
  watch:{
    timeLineLists:function(val){
      if(val.length){
        this.$bar.finish();
      }
    },
    login:function(val){
      if(val){
        this.$bar.start();
        this.getHomeTimeline(1);
      }
    }
  },
  mounted() {
    if (this.login) {
      this.getHomeTimeline(1);
    }else{
      this.openModal();
    }
  },
  methods: {
    ...mapActions(['getHomeTimeline', 'getPublicTimeline']),
    ...mapMutations(['openModal']),
    formatThumbImg: function(img) {
      let format = img.replace('thumbnail', 'thumb180');
      format = format.replace('wx1', 'wx3')
      return format
    },
    formatTime(time) {
      return DateUtils.format(time);
    },
  }
}
</script>

<style lang="scss" scoped>
.content-re-content {
    background: #f4f4f4;
    padding: 10px 16px;
}
.content-img-ul {
    margin-left: 0;
    padding-left: 0;
    .img-li-default {
        width: 180px;
        height: 180px;
        float: left;
        margin: 16px;
        .img-div {
            width: 100%;
            padding-bottom: 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}

.articles {
    padding: 16px 20px;
    background: #fff;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 26px;
    .user {
        .date {
            color: #c3c3c3;
        }
    }
    .usermsg {
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 15px;
        img {
            border-radius: 50px;
        }
        a {
            display: inline-block;
            vertical-align: middle;
        }
        .msg {
            color: #666;
            display: inline-block;
            vertical-align: middle;
            a {
                color: #666;
            }
            p {
                margin-top: 0;
                margin-bottom: 3px;
            }
        }
    }
    .articles_wrapper {
        cursor: pointer;
    }
    .sub_wrapper {
        margin-top: 10px;
        button {
            border: 0;
            background: #fff;
            outline: 0;
            cursor: pointer;
            color: #c3c3c3;
            padding: 5px 8px;
            border-radius: 3px;
            &.active{
              color: #11A388;
            }
        }
        .like_btn {
            background: rgba(17, 163, 136, .1);
            color: #11A388;
        }
        .like_btn.active {
            background: rgba(17, 163, 136, .8);
            color: #fff;
        }
    }
}

.comment_container {
    width: 98%;
    margin: 15px auto;
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: none;
    &.active {
        display: block;
    }
    .top {
        padding: 10px 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .comment_wrapper {
        padding: 10px 16px;
    }
    /*二级评论底栏样式*/
    .comment_item .like_btn {
        background: #fff;
        color: #c3c3c3;
    }

    .collect_btn.active,
    .comment_item .like_btn.active,
    .dislike_btn.active,
    .share_btn.active {
        color: #11A388;
        background: #fff;
    }
    .comment_item .sub_wrapper button:not(:first-child) {
        display: none;
    }
    .comments {
        margin: 0;
    }
}

.comment_item {
    margin-top: 10px;
    margin-bottom: 10px;
    img {
        max-width: 22px;
        width: 100%;
        vertical-align: middle;
        border-radius: 50px;
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
.recomment {
    margin-top: 15px;
    display: none;
    &:active {
        display: block;
    }
}

.add_comment input[type=text],
.recomment input[type=text] {
    width: 100%;
    color: #666;
}

.comment_action,
.recomment_action {
    text-align: right;
    margin-top: 10px;
}

.line {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    padding: 12px 16px;
}

.add_comment {
    padding-top: 20px;
    input[type=text] {
        padding: 10px;
    }
    .comment {
        background: #11A388;
        color: #fff;
        font-size: 14px;
        padding: 5px 12px;
    }
}
</style>
