<template>
  <div>
    <slot></slot>
    <router-link :to="{ name: 'articles', params: {id:list.id} }" class="list clearFix" v-for="list in lists" :key="list.id">
      <div class="l-type">
        <span>{{ list.category.name }}</span>
      </div>
      <div class="r-text">
        {{ list.title }}
      </div>
    </router-link>
    <router-link :to="{ name: 'spColums'}" tag="div" class="more">
        more<i class="iconfont icon-iconfontjiantou2"></i>
    </router-link>

  </div>
</template>
<script>
export default {
  props:['lists']
}
</script>

<style  scoped lang="scss">
@import '@/style/_variable.scss';
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
    background:  $theme-color;
    width: 18%;
    line-height: $height;
    text-align: center;
    @include to-drak;
  }
  >.r-text{
    float: right;
    background:  $theme-color;
    line-height: $height;
    padding: 0 10px;
    @include dot(75%);
    @include to-drak;
  }
}

</style>
