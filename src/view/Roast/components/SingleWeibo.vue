<template lang="html">
  <div class="articles">
    <div class="user">
      <div class="top clearFix">
        <div class="date fr">{{ formatTime(list.created_at) }}</div>
      </div>
      <div class="usermsg">
        <a :href="list.user.url" class="user_img" @mouseenter="$emit('hover-img',list.user, $event)" @mouseleave="$emit('close')">
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
          <span class="text" v-html="formatText(list.text)">
          </span>
        </div>
        <div class="content_img"  v-if="list.pic_urls">
          <ul  class="content-img-ul clearFix">
              <li v-for="img in list.pic_urls" class="img-li-default">
                  <div class="img-div" :style="{backgroundImage:'url(' + formatThumbImg(list.thumbnail_pic) + ')'}">
                  </div>
              </li>
          </ul>
        </div>
        <div class="content-re-content" v-if="list.retweeted_status">
            <span class="re-content-text" v-html="'@' + list.retweeted_status.user.name + ': '
                + formatText(list.retweeted_status.text)"></span>
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
        <button type="button" class="comment_btn" @click="open=!open">
            <i class="iconfont icon-icon"></i>
            回复({{ list.comments_count }})
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
      <comment-wrapper v-if="open" :id="list.id"></comment-wrapper>
  </div>
</template>

<script>
import CommentWrapper from './CommentWrapper.vue'
import * as DateUtils from '@/utils/date-utils'
import {formatDetails, formatUrl} from '@/utils/getString'
export default {
  props: ['list'],
  data() {
    return {
      open:false
    }
  },
  components: {CommentWrapper},
  methods: {
    formatThumbImg: function(img) {
      let format = img.replace('thumbnail', 'thumb180');
      format = format.replace('wx1', 'wx3')
      return format
    },
    formatTime(time) {
      return DateUtils.format(time);
    },
    formatText(val) {
      var formatval = formatUrl(val);
      return formatDetails(formatval);
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
        margin-left: 10px;
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
    color: #666;
    margin-top: 16px;
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
        &.active {
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
</style>
