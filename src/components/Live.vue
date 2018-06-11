<template>
  <div>
    <slot></slot>
    <div class="box clearFix" :style="{'top':0}" ref="box" @wheel="scrollNext">
      <div class="scroll-bar">
        <div class="scroll"  ref="scroll" @mousedown="press"></div>
      </div>
      <div class="list" ref="list">
        <router-link :to="{ name: 'liveVideos', params: {id: item.roomid} }" :key= "item.roomid" class="item clearFix" v-for = "(item, index) in lists">
          <span class="tag">TOP{{ index+1 }}</span>
          <span class="title">{{ item.title }}</span>
          <span class="author">by:{{ item.uname }}</span>
        </router-link>
      </div>
    </div>
    <router-link :to="{ name: 'liveRooms'}" tag="div" class="more">
        more<i class="iconfont icon-iconfontjiantou2"></i>
    </router-link>
  </div>


</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        lastPos:0,
        scrollHeight:80,
        viewableHeight:0,
      }
    },
    computed: {
      ...mapGetters({lists: 'liveItem'}),
      scrollableHeight(){
        return this.viewableHeight - this.scrollHeight
      },
      endPos() {
        return this.totalHeight - this.viewableHeight;
      },
      totalHeight() {
        return this.$refs.list.clientHeight;
      }
    },
    mounted() {
      this.viewableHeight = this.$refs.box.clientHeight;
    },
    methods: {
      press(e) {

        //记录当前的位置
        this.lastPos = e.clientY;
        this.inBar = true;

        //其他元素不可被选中
        document.body.classList.add("unselectable");
        document.body.addEventListener('mousemove',this.scrollTo)
        document.body.addEventListener('mouseup',this.relase)
      },
      scrollTo(e) {

        //返回两者应该移动的距离
        let dis = this.calcDis(e.clientY - this.lastPos);
        this.lastPos = e.clientY;

        this.$refs.scroll.style.top = dis.scrollDis + parseFloat(this.$refs.scroll.style.top) + 'px';
        this.$refs.list.style.top = -dis.listDis + parseFloat(this.$refs.list.style.top) + 'px';
        this.outOfBound();
      },
      outOfBound() {
        if(this.$refs.scroll.offsetTop <= 0){
          this.$refs.scroll.style.top = '0px';
          this.$refs.list.style.top = '0px';
        }

        //  可显示的高度474px，总共1150,1150-474最低端显示的位置
        //  滚动条474-80
        else if(this.$refs.scroll.offsetTop >= this.scrollableHeight){
          this.$refs.scroll.style.top =  this.scrollableHeight + 'px';
          this.$refs.list.style.top =  -this.endPos + 'px';
        }
      },
      calcDis(y) {
          let scrollDis = y;
          let listDis = scrollDis * this.endPos / this.scrollableHeight;
          return {scrollDis, listDis};
      },
      scrollNext(e) {
        if(e.clientX < this.$refs.box.getBoundingClientRect().left || e.clientX > this.$refs.box.getBoundingClientRect().right || e.clientY<this.$refs.box.getBoundingClientRect().top||
        e.clientY > this.$refs.box.getBoundingClientRect().bottom)return;

        let wheel = e.wheelDelta? e.wheelDelta / 120 * 10 : -e.deltaY / 3 * 10;
        let dis = this.calcDis(wheel);

        this.$refs.scroll.style.top = parseFloat(this.$refs.scroll.style.top) - dis.scrollDis + 'px';
        this.$refs.list.style.top = parseFloat(this.$refs.list.style.top) + dis.listDis + 'px';

        this.outOfBound();
        e.preventDefault();
      },
      relase(e) {
          document.body.classList.remove("unselectable");
          document.body.removeEventListener('mousemove',this.scrollTo)
          document.body.removeEventListener('mousemove',this.relase)
      }
    }
  }
</script>
<style lang="scss" scoped>
$color:#1fb5ad;
@mixin leftTop {
  position: absolute;
  top:0;
  left: 0;
}
a{
    text-decoration: none;
}
.unselectable {
  /*当前版本的火狐（53）和Edge（15）不支持user-select标准属性，需要使用浏览器厂商前缀*/
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.box{
  border: 2px solid $color;
  width: 100%;
  height:478px;
  overflow: hidden;
  position: relative;
  margin-bottom: 42px;
  >.scroll-bar{
    float: right;
    width: 25px;
    height: 100%;
    border-left: 2px solid $color;
    position: relative;
    >.scroll{
      @include leftTop;
      width: 100%;
      height: 80px;
      background: $color;
    }
  }
  >.list{
    width: calc( 100% - 25px );
    @include leftTop;
    color:$color;
    .item{
      transition: all .2s ease-in;
      &:hover{
        background: $color;
        color:#fff;
      }
    }
    .tag{
      font-size: 32px;
      margin-right: 7px;
      display: inline-block;
      vertical-align: top;
    }
    .title{
      display: inline-block;
      margin-right: 7px;
      overflow: hidden;
      width: 220px;
      text-overflow: ellipsis;
      white-space:nowrap;

    }
    .author{
      position: absolute;
      top:50%;
      right:7px;
      transform: translate(0,-50%);
    }
    >a{
      width: 100%;
      display: block;
      border-bottom: 2px solid $color;
      height:115px;
      line-height: 115px;
      padding-left: 16px;
      color:$color;
      position: relative;
    }
  }
}
</style>
