<template>
    <transition name="slide">
      <div class="singer-detail">
        <div id="header-box" class="info-box">
          <div class="top-bar">
            <div class="back" @click="back">
            </div>
            <span class="singer-name">{{singer.singer_name}}</span>
          </div>
          <div class="album">
            <div class="album-img">
              <img :onerror="defaultImg" class="img-head" :src="imgUrl+singer.singer_mid+jpg" alt="">
            </div>
            <div class="album-bd">
              <h1 class="album-name">{{singer.singer_name}}</h1>
              <p class="fans-number">粉丝:{{singer.fans}}</p>
              <p class="album-desc">{{singer.SingerDesc}}</p>
            </div>
          </div>
          <div class="opt-box">
            <a class="btn-play" href="javascript:void(0)">播放全部</a>
          </div>
        </div>
        <div class="scroll-list">

        </div>
      </div>
    </transition>
</template>

<script>
  import {getSingerDetail} from "@/api/recommend";

  export default {
    data(){
      return{
        defaultImg:'this.src="' + require('@/components/singer/logo@2x.png') + '"',
        imgUrl:'https://y.gtimg.cn/music/photo_new/T001R150x150M000',
        jpg:'.jpg',
        singer:""
      }
    },
    created(){
      this._getSingerDetails()
    },
    methods:{
      _getSingerDetails(){
        getSingerDetail(this.$route.params.id).then((res)=>{
          this.singer = res.data
          console.log(res.data)
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
        line-height 48px
        padding 0 16px 0 14px
        color $color-background
        background: rgba(0,0,0,.2)
        text-align center
        .back
          position absolute
          width 32px
          height 32px
          top 8px
          left 8px
          left 6px
          z-index 50
          background-image url("back.png")
        .singer-name
          color #fff
          font-size $font-size-large
      .album
        display flex
        margin-top 17px
        padding 0 16px
        overflow hidden
        .album-img
          position relative
          width 125px
          height 125px
          margin-right 10px
          overflow hidden
          .img-head
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            object-fit cover
        .album-bd
          flex 1
          margin-top 15px
          margin-left 10px;
          .album-name
            max-height 47px
            line-height 1.3
            overflow hidden
            font-size 18px
          .fans-number
            margin-top 8px
            height 21px
            font-size $font-size-medium
          .album-desc
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
            max-height 36px
            overflow hidden
            margin-top 8px
            font-size $font-size-medium
      .opt-box
        height 80px;
        position relative
        text-align center
        padding 0 16px
        .btn-play
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
          display block
          line-height 40px
          text-indent 15px
          height 40px
          width 170px
          color #fff
          background-color $color-theme
          border-radius 20px
          &:before
            content ""
            display block
            position absolute
            top 50%
            transform translateY(-50%)
            left 40px
            height 0
            width 0
            margin-right -3px
            border-color transparent transparent transparent #fff
            border-width 7px 11px
            border-style solid
            border-radius 2px
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
