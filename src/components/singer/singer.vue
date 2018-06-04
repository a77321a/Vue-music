<template>
    <div class="singer">
      <p :class=" isFixed == true ? 'isFixed' :''" ref="topname" class="classify-title">{{TopName}}</p>
      <ul class="singer-name">
        <li @click="selectSinger(item)" class="singer-detail" v-for="item in singerList">
          <img :onerror="defaultImg" class="avatar" :src="imgUrl+item.Fsinger_mid+jpg" alt="">
          <span class="name">{{item.Fsinger_name}}</span>
        </li>
      </ul>
      <ul :class=" isTop == true ? 'istop' :''" ref="aside" class="aside-list">
        <li @click="currentIndex(index),_SingerList()" ref="indexNum" class="details-code" v-for="(item,index) in codes" to="" >
          <span class="code-link">{{item}}</span>
        </li>
      </ul>
      <router-view></router-view>
    </div>

</template>

<script>
  import {getSingerList} from "@/api/recommend";

  export default {
    data(){
      return{
        defaultImg:'this.src="' + require('@/components/singer/logo@2x.png') + '"',
        isFixed:false,
        queryCode:null,
        isTop:false,
        TopName : '热门',
        singerList:[],
        imgUrl: 'http://y.gtimg.cn/music/photo_new/T001R150x150M000',
        jpg:'.jpg',
        codes:['热','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#']
      }
    },
    created(){
      this._SingerList()
    },
    mounted(){
      window.addEventListener('scroll',this._headFixed)
      this._addClass()
    },
    destroyed () {
      window.removeEventListener('scroll', this._headFixed)
    },
    methods: {
      selectSinger(item) {
        this.$router.push({
          path: `/singer/${item.Fsinger_id}`
        })
        console.log(item)
      },
      selectItem(item) {
        this.$emit('select', item),
          console.log(item)
      },
      _SingerList(){
        getSingerList(this.queryCode).then((res)=>{
          this.singerList = res.data.list
        })
      },
      currentIndex(index){
        var odom = this.$refs.indexNum[index]
        odom.className += ' checked'
        var osiblings = odom.parentNode.children
        for(let i =0;i<osiblings.length;i++)
        {
          if(osiblings[i]!==odom){
            osiblings[i].className ='details-code'
          }
        }
        if(odom.innerText != '热')
        {
          this.queryCode = odom.innerText
          this.TopName = odom.innerText
        }
        else
        {
          this.queryCode = null
          this.TopName = '热门'
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
      _addClass(){
        var odom = this.$refs.indexNum[0]
        odom.className += ' checked'
      },
      _headFixed(){
        var otitle = this.$refs.topname
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop,otitle.offsetTop)
        if(scrollTop>90){
          this.isFixed = true
          this.isTop = true
        }
        else {
          this.isFixed = false
          this.isTop = false
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"
  .singer
    position relative
    bottom 0
    overflow hidden
    width 100%
    .isFixed
      position fixed
      top 0
      z-index 30
    .classify-title
      height: 30px
      line-height: 30px
      padding-left: 20px
      width 100%
      font-size: $font-size-small
      color: $color-text-l
      background: $color-text-d
    .singer-name
      overflow auto
      .singer-detail
        display flex
        align-items center
        padding 20px 0 0 30px
        .avatar
          height 50px
          width 50px
          border-radius 50%
        .name
          margin-left 20px
          color: $color-text-l
          font-size $font-size-medium
    .aside-list
      position fixed
      padding 10px 0
      border-radius 10px
      background: rgba(0,0,0,.1)
      width 20px
      right 4px
      top 17%
      overflow hidden
      .details-code
        text-align center
        padding: 2px;
        line-height: 1;
        font-size: 12px;
        font-size $font-size-small
  .checked
    color: $color-theme
  .istop
    top 10% !important
</style>
