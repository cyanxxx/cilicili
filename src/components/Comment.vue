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
            <i class="icon dianzan " @click="toGood(list.pid,index)" :class="{active:goodList[list.pid]}"></i>
            <span>{{list.goods}}</span>
            <i class="icon huifu" @click="reply(list.userName)"></i>
            <span>回复</span>
          </div>
        </div>
      </div>
      <pages></pages>
    </div>
  </div>

</template>

<script>
import Pages from './Pages.vue'
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      goodList:{},
      content:''
    }
  },
  components:{Pages},
  computed:{
    ...mapGetters({lists:'comments'}),
  },
  methods:{
    send () {
      let message = {};
      message.userName = '123456';
      message.content = this.content;
      message.faceImg = window.localStorage.getItem('userImg');
      message.goods = 0;
      this.$store.dispatch('postComments',message);
      this.content='';
    },
    toGood(pid,index){
        if(this.goodList[pid]){
          this.lists[index].goods--;
        }else{
          this.lists[index].goods++;
        }
        this.$set(this.goodList,pid,!this.goodList[pid]);
    },
    reply(name){
      this.content = '回复'+name+':';
    }
  }
}
</script>

<style lang="scss" scoped>
$color:#1fb5ad;
.editComment{
  margin-bottom: 20px;
  .commet{
    font-size: 20px;
    color:#fff;
  }
  .commetArea{
    border: 3px solid $color;
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
    background: $color;
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
.icon{
  display: inline-block;
  height: 20px;
  width: 20px;
  overflow: hidden;
  cursor:pointer;
  vertical-align: middle;
}
.dianzan {
  background: url(../../static/pic/sprite.png)  -20px -0px no-repeat;
  &.active{
    background-position: -0px -0px;
  }
}
.huifu{
  background: url(../../static/pic/sprite.png) -40px -0px no-repeat;
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
        background: $color;
        padding:16px;
        min-height: 60px;
        .text{
          margin-top: 7px;
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
