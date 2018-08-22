<template lang="html">
  <li v-if= "!route.hidden">
    <router-link :to="{path: route.path}" exact>{{route.meta.title}}</router-link>
  </li>
</template>

<script>
export default {
  props:['route']
}
</script>

<style lang="scss" scoped>
</style>
