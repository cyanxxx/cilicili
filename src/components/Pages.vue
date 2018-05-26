<template lang="html">
  <ul class="page">
    <li v-show ="1!= current" @click="current-- && show(current)">上一页</li>
    <li v-for="(page) in pages" @click=" show(page)" :class="{'active':current == page}">{{ page }}</li>
    <li v-if="more">...</li>
    <li v-if="more">{{ totalPages }}</li>
    <li v-show ="totalPages!= current && totalPages != 0" @click="current++ && show(current)">下一页</li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      current:1,
      showPages:5,
      more:false,
    }
  },
  computed:{
    ...mapGetters({ totalPages:'pages'}),
    pages : function () {
      var p = [];
      if (this.current <= this.showPages){
        //总共页数和想显示的页数比较
        if (this.showPages < this.totalPages){
          this.more = true;
        }
        let i = Math.min(this.showPages,this.totalPages);
        while (i) {p.unshift(i--)};
      } else {
        this.more = true;
        let end = this.current;
        let i = this.showPages;
        if(end == this.totalPages){
          this.more = false;
        }
        while(i--){
          p.unshift(end--);
        }
      }
      return p;
    }
  },
  methods: {
    show: function(index) {
      if(index == this.current) return;
           this.current = index;
           //这里可以发送ajax请求
           let param = {page:this.current}
           this.$store.dispatch('getComments',param)
       }
  }
}
</script>

<style lang="scss" scoped>
    $Color : #1fb5ad;
    li{
      display: inline-block;
      padding: 10px;
      border-radius: 4px;
      color:  $Color;
      border:1px solid $Color;
      cursor: pointer;
      margin-right: 6px;
      animation: all .2s ease-in;
      &.active{
        background:$Color;
        color:#fff;
      }
      &:hover{
        background:$Color;
          color:#fff;
      }
    }

</style>
