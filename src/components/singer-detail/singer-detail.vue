<template>
    <transition name="slide">
      <div class="singer-detail">
        <div id="header-box" class="info-box">
          <div class="top-bar">
            <div class="back" @click="back">
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
  import {getSingerDetail} from "@/api/recommend";

  export default {
    data(){
      return{

      }
    },
    created(){
      this._getSingerDetails()
    },
    methods:{
      _getSingerDetails(){
        getSingerDetail(this.$route.params.id).then((res)=>{
          console.log(res)
        })
      },
      back() {
        this.$router.back()
      }
    },
    }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"
  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    .info-box
      position: absolute;
      top 0
      left 0
      z-index 10
      width 100%
      height 274px
      overflow hidden
      color $color-background
      display -webkit-box
      -webkit-box-orient: vertical
      overflow hidden
      background-color $color-text-l
      .top-bar
        height 48px
        padding 0 16px 0 14px
        color $color-background
        background: rgba(0,0,0,.2)
        .back
          position absolute
          width 32px
          height 32px
          top 8px
          left 8px
          left 6px
          z-index 50
          background-image url("back.png")
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
