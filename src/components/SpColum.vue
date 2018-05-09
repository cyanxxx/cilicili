<template>
  <div>
    <slot></slot>
    <router-link :to="{ name: 'Articles', params: {id:list.id} }" class="list clearFix" v-for="list in lists" :key="list.id">
      <div class="l-type">
        <span>{{ list.category.name }}</span>
      </div>
      <div class="r-text">
        {{ list.title }}
      </div>
    </router-link>
    <router-link :to="{ name: 'SpColums'}" tag="div" class="more">
        more<i class="iconfont icon-iconfontjiantou2"></i>
    </router-link>

  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed:mapGetters({
      lists: 'preSpItem'
  }),
}
</script>

<style  scoped lang="scss">
  $bgColor : #1fb5ad;
  @mixin dot($width) {
    width: $width;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  @mixin to-drak {
    animation: all .2s ease-in;
    &:hover{
      background: #1ca099;
    }
  }
  $height:88px;
  .list{
    color: #fff;
    margin-bottom: 42px;
    display: block;
    >.l-type{
      float: left;
      background:  $bgColor;
      width: 18%;
      line-height: $height;
      text-align: center;
      @include to-drak;
    }
    >.r-text{
      float: right;
      background:  $bgColor;
      line-height: $height;
      padding: 0 10px;
      @include dot(75%);
      @include to-drak;
    }
}

</style>
