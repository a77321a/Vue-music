<template>
    <div class="singer">
      <p class="classify-title"></p>
      <ul class="singer-name">
        <li></li>
      </ul>
      <ul class="aside-list">
        <li @click="currentIndex(index)" ref="indexNum" class="details-code" v-for="(item,index) in codes" to="" >
          <span class="code-link">{{item}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
  import {getSingerList} from "@/api/recommend";

  export default {
    data(){
      return{
        singerList:[],
        codes:['热','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#']
      }
    },
    created(){
      this._SingerList()
    },
    methods: {
      _SingerList(){
        getSingerList().then((res)=>{
          this.singerList = res.data
          console.log(res)
        })
      },
      currentIndex(index){
        let odom = this.$refs.indexNum[index]
        console.log(odom)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"
  .singer
    position fixed
    top 88px
    bottom 0
    width 100%
    .aside-list
      position fixed
      width 20px
      right 1px
      top 95px
      bottom 10px
      overflow hidden
      .details-code
        margin-bottom 2px
        font-size $font-size-medium
      &.router-link-active
        .code-link
          color $color-theme
</style>
