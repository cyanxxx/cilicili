<template lang="html">
  <div>
    <div class="editComment clearFix">
      <p class="commet">评论</p>
      <textarea name="comment" class="commetArea" v-model="content"></textarea>
      <button type="submit" name="button" @click="send">发送</button>
    </div>
    <div class="comments_container">
      <div class="lists clearFix" v-for="(list,index) in lists">
        <div class="author">
          <img :src="list.faceImg" alt="list.userName">
        </div>
        <div class="info">
          <a>{{ list.userName }}</a>
          <div class="text">{{ list.content }}</div>
          <div class="subicon">
            <i class="iconfont icon-zan2" @click="toGood(list.pid,index)" :class="{active: goodList[list.pid]}"></i>
            <span>{{ list.goods }}</span>
            <i class="iconfont icon-icon" @click="reply(list.userName)"></i>
            <span>回复</span>
          </div>
        </div>
      </div>
      <pages @pageChange="showInfo" :totalPages="totalPages"></pages>
    </div>
    <modal v-if="!login && open" :top='top' @close-modal="open=false"></modal>
  </div>

</template>

<script>
import Pages from '@/components/Pages.vue'
import Modal from '@/components/Modal.vue'
import { saveRedirect } from '@/utils/localStore'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import commentData from '@/api/comment'
export default {
  data() {
    return {
      goodList: {},
      content: '',
      top:0,
      totalPages:1,
      curPage:1,
      lists:[],
      open:false
    }
  },
  components: {Pages, Modal},
  computed: {
    ...mapGetters(['login','token','userInfo']),
  },
  created() {
    this.getComments();
  },
  methods: {
    ...mapActions(['getUser']),
    formData() {
      let message = {};
      message.userName = this.userInfo.userName;
      message.content = this.content;
      message.goods = 0;
      message.faceImg = this.userInfo.userImg;
      this.lists.unshift(message)
      commentData.postComment(message);
      this.content='';
    },
    send () {
      if(this.login){
        if(!this.userName){
          this.getUser().then(this.formData());
        }else{
          this.formData()
        }
      }else{
        this.setTop();
        this.open = true;
        saveRedirect(this.$route.fullPath);
      }
    },
    getComments() {
      commentData.getComments({page:this.curPage},(data)=>{
        this.totalPages = data.totalcount;
        this.lists = data.comment
      })
    },
    toGood(pid, index) {
        if (this.goodList[pid]){
          this.lists[index].goods--;
        } else {
          this.lists[index].goods++;
        }
        this.$set(this.goodList,pid,!this.goodList[pid]);
    },
    reply(name) {
      this.content = '回复'+name+':';
    },
    setTop() {
      var top = document.documentElement.scrollTop;
      var height = document.documentElement.clientHeight;
      this.top = top + height / 2;
    },
    showInfo(param) {
      this.curPage = param.page;
      this.getComments();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_variable.scss';
.editComment{
  margin-bottom: 20px;
  .commet{
    font-size: 20px;
    color:#fff;
  }
  .commetArea{
    border: 3px solid $theme-color;
    padding: 10px;
    width: 100%;
    height: 200px;
    resize: none;
    background: transparent;
    outline: none;
    border-radius: 4px;
    color:#fff;
  }
  button[type='submit']{
    margin-top: 16px;
    border-radius: 4px;
    float: right;
    display: block;
    color:#fff;
    background: $theme-color;
    outline: none;
    padding: 7px 22px;
    border: 0;
  }
}
.subicon{
  margin-top: 7px;
  text-align:right;
  span{
    font-size: 14px;
    vertical-align: middle;
  }
}

  .comments_container{
    margin-top: 20px;
    .lists{
      margin-bottom: 26px;
      color:#fff;
      .author{
        float: left;
        margin-top: 16px;
        img{
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
      }
      .info{
        margin-left: 80px;
        background: $theme-color;
        padding:16px;
        min-height: 60px;
        .text{
          margin-top: 7px;
        }
        a{
          color:#fff;
          text-decoration: none;
        }
      }
  }
}
.page{
  float: right;
  color:#fff;
  a,span{
    margin-left: 5px;
  }
}
</style>
