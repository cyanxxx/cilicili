<template>
  <div>
    <slot></slot>
    <div class="box clearFix" ref="box" @mousewheel="scrollNext">
      <div class="scroll-bar">
        <div class="scroll"  ref="scroll" @mousemove="move" @mousedown="press" @mouseup="relase" ></div>
      </div>
      <div class="list" ref="list">
        <a class="item" v-for = "(item,index) in lists">
          <span>top{{index+1}}</span>
          <span>{{item.title}}</span>
        </a>
      </div>

    </div>
  </div>


</template>
<script>
  export default {
    data () {
      return {
        lastPos:0,
        inBar: false,
        lists:[
          {id:'',title:'关注团团，带你走近华服世界！'},
          {id:'',title:'关注团团，带你走近华服世界！'},
          {id:'',title:'关注团团，带你走近华服世界！'},
          {id:'',title:'关注团团，带你走近华服世界！'},
          {id:'',title:'关注团团，带你走近华服世界！'},
          {id:'',title:'关注团团，带你走近华服世界！'},
          {id:'',title:'关注团团，带你走近华服世界！'},
          {id:'',title:'关注团团，带你走近华服世界！'},
          {id:'',title:'关注团团，带你走近华服世界！'},
          {id:'',title:'关注团团，带你走近华服世界！'}
        ]
      }
    },
    methods:{
      press(e) {
        this.lastPos = e.clientY;
        this.inBar = true;
        document.body.classList.add("unselectable");
      },
      move(e) {
        if(this.inBar){
          let distance = e.clientY - this.lastPos;
          let dis = distance * 689/378;
          this.lastPos = e.clientY;
          this.$refs.scroll.style.top = distance + this.$refs.scroll.offsetTop+'px';
          this.$refs.list.style.top = -dis+this.$refs.list.offsetTop+'px';
          if(this.$refs.scroll.offsetTop <0){
            this.$refs.scroll.style.top = '0px';
            this.$refs.list.style.top = '0px';
          }
          else if(this.$refs.scroll.offsetTop>378){
            this.$refs.scroll.style.top = '378px';
            this.$refs.list.style.top = '-689px';
          }


        }

      },
      scrollNext(e){

        if(e.clientX<this.$refs.box.getBoundingClientRect().left|| e.clientX>this.$refs.box.getBoundingClientRect().righ|| e.clientY<this.$refs.box.getBoundingClientRect().top||
        e.clientY>this.$refs.box.getBoundingClientRect().bottom)return;
        let dis = 10;
        console.log(e.wheelDelta);
        if(e.wheelDelta>=0){
          this.$refs.scroll.style.top = this.$refs.scroll.offsetTop - dis + 'px';
          this.$refs.list.style.top = this.$refs.list.offsetTop + dis*2 + 'px';
        }
        else{
          this.$refs.scroll.style.top = this.$refs.scroll.offsetTop + dis + 'px';
          this.$refs.list.style.top = this.$refs.list.offsetTop - dis*2 + 'px';
        }
        if(this.$refs.scroll.offsetTop <0){
          this.$refs.scroll.style.top = '0px';
          this.$refs.list.style.top = '0px';
        }
        else if(this.$refs.scroll.offsetTop>378){
          this.$refs.scroll.style.top = '378px';
          this.$refs.list.style.top = '-689px';
        }
        e.preventDefault();
      },
      relase(e) {
        if(this.inBar){
          this.inBar = false;
          document.body.classList.remove("unselectable");
        }

      }
    }
  }
</script>
<style lang="scss">
  .unselectable {
    /*当前版本的火狐（53）和Edge（15）不支持user-select标准属性，需要使用浏览器厂商前缀*/
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .box{
    border: 2px solid #1fb5ad;
    width: 100%;
    height:478px;
    overflow: hidden;
    position: relative;
    >.scroll-bar{
      float: right;
      width: 25px;
      height: 100%;
      border-left: 2px solid #1fb5ad;
      position: relative;
      >.scroll{
        position: absolute;
        width: 100%;
        height: 80px;
        background: #1fb5ad;
        top:0;
        left: 0;
      }
    }
    >.list{
      float: left;
      width: calc( 100% - 25px );
      position: absolute;
      top:0;
      left: 0;
      >a{
        width: 100%;
        display: block;
        border-bottom: 2px solid #1fb5ad;
        height:115px;
        line-height: 115px;
        padding-left: 16px;
      }
    }
  }
</style>
