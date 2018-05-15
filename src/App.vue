<template>
  <div class="app">
    <v-header></v-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import VHeader from '@/components/v-header/v-header'
  import Tab from '@/components/tab/tab'
export default {
  components:{
    VHeader,
    Tab
  }
}
</script>

<style lang="stylus">
  @import "~common/stylus/index";
</style>
