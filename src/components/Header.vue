<template lang="html">
  <ul class="nav">
    <item v-for="item in items" :route="item" :key="item.path"></item>
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  props:{
    items: Array
  },
  components:{
    Item
  }
}
</script>

<style lang="css" scoped>
ul{
  margin: 0;
  padding: 0;
  display: flex;
}
</style>
