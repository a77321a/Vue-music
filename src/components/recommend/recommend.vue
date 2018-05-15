<template>
  <div class="recommend-list">
    <h1 class="list-title">热门歌单推荐</h1>
    <ul>
      <li v-for="item in recommends" class="item">
        <div class="icon">
          <img :src="item.cover" width="60" height="60">
        </div>
        <div class="text">
          <h2 class="name" v-text="item.title"></h2>
          <p class="desc">播放量：{{item.listen_num | numfilter()}}万</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {ERR_OK} from '@/api/config'
  import {getRecommend} from '@/api/recommend'
  import {data} from "@/api/mock";

  export default {
    data() {
      return{
        recommends:data.v_hot
      }
      },
      created(){
        this._getCommend()
      },
      methods:{
        _getCommend(){
          console.log(data)
        }
      },
    filters:{
      numfilter: function (value) {
        return Math.floor(value * 10 / 10000) / 10
      }
    }
    }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
</style>
