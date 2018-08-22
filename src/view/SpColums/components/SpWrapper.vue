<template lang="html">
  <div class="sp">
    <router-link :to="{ name: 'articles', params: {id:list.id} }" class="list clearFix" :class="{'active':index<start}" v-for="(list,index) in lists" :key="list.id" ref="item">
      <div class="content">
        <h3 class="title">
          {{ list.title }}
        </h3>
        <div class="category">分类: {{ list.category.name }}</div>
        <div class="brief">
          {{ list.summary }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default  {
  data () {
    return{
      start: 5
    }
  },
  computed: mapGetters({
    lists: 'comSpItem'
  }),
  methods: {
    addItem() {
      this.start += 1;
    }
  },
  mounted () {
    function throttle(method,context) {
      clearTimeout(method.tId);
      method.tId = setTimeout(function(){
          method.call(context);
      },200);
  }
    document.body.addEventListener("mousewheel", (e) => {
      if (e.wheelDelta<0) {
        throttle(this.addItem);
      }
    });
    document.body.addEventListener("DOMMouseScroll", (e) => {
      if (e.detail>0) {
        throttle(this.addItem);
      }
    });
  }
}
</script>


<style lang="scss" scoped>
a{
  color:#fff;
  text-decoration: none;
}
@mixin to-drak {
  animation: all .2s ease-in;
  &:hover{
    opacity: 0.6;
  }
}
.sp{
  .list{
    background: #1fb5ad;
    display: block;
    padding: 16px;
    margin-bottom: 20px;
    transition: all .8s ease-in;
    transform-style: preserve-3d;
    transform-origin: center bottom;
    transform: rotateX(-50deg) translateZ(60px);
    opacity: 0;
    &.active{
      transform: rotateX(0deg) translateZ(0px);
      opacity: 1;
    }
    .content{
      @include to-drak;
      .category{
        color:#fafafa;
        font-size: 14px;
      }
      >div{
        margin-bottom: 16px;
      }
    }
  }
}
</style>
