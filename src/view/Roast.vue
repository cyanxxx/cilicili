<template lang="html">
  <div>
    <div class="articles" v-for="list in lists">
      <div class="user">
        <div class="top clearFix">
          <div class="date fr">{{ formatTime(list.created_at) }}</div>
        </div>
        <div class="usermsg">
          <a :href="list.user.url" class="user_img" @mouseenter="hoverImg(list.user, $event)" @mouseleave="close">
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
          <button type="button" class="comment_btn" @click="loadComments(list.id,list)">
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
        <comment-wrapper v-if = "JSON.stringify(showList) != '{}' && list.id in showList  &&showList[list.id].open" :commentList="showList[list.id].data" :id="list.id"></comment-wrapper>
      </div>
    <modal v-if="needLogin && open"></modal>
    <hover-img v-if="hoverOpen" :hoverStyle="hoverStyle" :height="imgHeight" :timer="timer"></hover-img>
    <back-top v-if="login"></back-top>
  </div>
</template>

<script>
import BackTop from '../components/BackTop.vue'
import Loading from '../components/Loading.vue'
import CommentWrapper from '../components/CommentWrapper.vue'
import HoverImg from '../components/HoverImg.vue'
import Modal from '../components/Modal.vue'
import * as DateUtils from '../utils/date-utils'
import { formatDetails,formatUrl } from '../utils/getString'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      page:1,
      lists:{},
      showList:{},
      hoverStyle: {
          width: '350px',
          top: 0,
          left: 0
      },
      imgHeight:0,
      timer:0,
    }
  },
  components:{ Modal, BackTop, Loading, CommentWrapper, HoverImg},
  computed: {
    ...mapGetters(['timeLineLists', 'login','needLogin','open', "weiboComments","hoverOpen"])
  },
  watch:{
    login:function(val){
      var vue = this;
      if(val){
        this.$bar.start();
        this.getHomeTimeline({page:1,okFun:vue.finishBar});
        window.addEventListener('scroll', this.scrollBar)
      }
    },
    timeLineLists: {
      handler:function (val, oldVal) {
          if (val) {
              if (this.page == 1) {
                  this.lists = val;
              } else {
                  this.lists = [...this.lists, ...val]
              }
          }
      },
      deep:true
    },
  },
  activated() {
    var vue = this;
    if (this.login) {
      this.$bar.start();
      this.getHomeTimeline({ page:1,okFun:vue.finishBar });
      window.addEventListener('scroll', this.scrollBar)
    }else{
      this.openModal();
    }
  },
  deactivated() {
    if(this.login){
      window.removeEventListener('scroll', this.scrollBar)
    }
  },
  methods: {
    ...mapActions(['getHomeTimeline', 'getPublicTimeline', 'getWbComments']),
    ...mapMutations(['openModal', 'saveHoverData', 'openHover', 'closeHover']),
    loadComments:function(id,list) {
      if(id in this.showList == false){
        var vue = this;
        this.getWbComments({id:id,page:1,okfun:vue.showData});
      }else{
        this.showList[id].open = !this.showList[id].open;
      }
    },

    hoverImg:function(data, e) {
      if(this.timer){clearTimeout(this.timer);}
      var target= e.target;
      var top = target.offsetTop;
      var left = target.offsetLeft;
      var width = target.offsetWidth;
      var height = target.offsetHeight;
      this.saveHoverData(data);
      this.$set(this.hoverStyle,'top',top + height +'px')
      this.$set(this.hoverStyle,'left',left + width / 2+'px')
      this.openHover();
      this.imgHeight = top;

    },
    close:function() {
      this.timer = setTimeout(()=>{
        this.closeHover()
      },500)
    },
    showData:function(id) {
      this.show = true;
      var data = this.weiboComments;
      var config = {};
      this.$set(config,'data',data);
      this.$set(config,'open',true);
      this.$set(this.showList,id,config);
    },
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
    finishBar() {
      var vue = this;
      vue.$bar.finish();
    },
    loadingMore() {
      var vue = this;
      this.page++;
      this.$bar.start();
      this.getHomeTimeline({page:this.page,okFun:vue.finishBar})
    },
    scrollBar() {
      var pageH = document.documentElement.scrollHeight;
      var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
      var viewH = document.documentElement.clientHeight;
      if(viewH + scrollH == pageH){
          this.loadingMore();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color:#666;
}
p{
  color:#666;
}
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



</style>
