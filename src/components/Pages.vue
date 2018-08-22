<template lang="html">
  <ul class="page">
    <li v-show ="1!= current" @click="current-- && show(current--)">上一页</li>
    <li v-for="(page) in pages" @click=" show(page)" :class="{'active':current == page}">{{ page }}</li>
    <li v-if="more">...</li>
    <li v-if="more">{{ totalPages }}</li>
    <li v-show ="totalPages!= current && totalPages != 0" @click="current++ && show(current++)">下一页</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      more:false,
      current:1
    }
  },
  props: {
    showPages: {
      type: Number,
      default:5
    },
    totalPages: {
      type:Number
    }
  },
  computed:{
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
           let param = {page:this.current}
           this.$emit('pageChange',param)
       }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_variable.scss';
$theme-color : #1fb5ad;
li{
  display: inline-block;
  padding: 10px;
  border-radius: 4px;
  color:  $theme-color;
  border:1px solid $theme-color;
  cursor: pointer;
  margin-right: 6px;
  animation: all .2s ease-in;
  &.active{
    background:$theme-color;
    color:#fff;
  }
  &:hover{
    background:$theme-color;
      color:#fff;
  }
}

</style>
