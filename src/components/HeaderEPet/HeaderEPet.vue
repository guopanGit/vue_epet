<template>
<div class="header-content">
  <div class="header-top">
    <div class="location">
      <a href="javascript:">
        <span>狗狗</span>|
        <span>北京</span>
        <i class="iconfont icon-xiangxia"></i>
      </a>
    </div>
    <div class="search-text">
      <a href="javascript:">
        <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
        <i class="iconfont icon-sousuo"></i>
      </a>
    </div>
    <div class="epet-category">
      <a href="javascript:">
        <i class="iconfont icon-comments"></i>
      </a>
    </div>
  </div>
  <div class="header-bottom">
    <!--<ul class="dscroll-ul">
      <li class="clorl"> <a href="javascript:">首页</a></li>
      <li><a href="javascript:">狗狗主粮</a></li>
      <li><a href="javascript:">服饰城</a></li>
      <li><a href="javascript:">医疗保健</a></li>
      <li><a href="javascript:">零食玩具</a></li>
      <li><a href="javascript:">日用外出</a></li>
      <li><a href="javascript:">美容香波</a></li>
    </ul>-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide clorl" v-for="(meun) in homepage.menus ">
            <a href="javascript:">{{meun.menu_name}}</a>
          </div>
          <!--<div class="swiper-slide">
            <a href="javascript:">狗狗主粮</a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">服饰城</a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">医疗保健</a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">零食玩具</a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">日用外出</a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">美容香波</a>
          </div>-->

      </div>
    </div>
  </div>
</div>
</template>

<script>
  /*import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'*/
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['homepage'])
    },
    mounted(){
/*
      /!* eslint-disable no-new *!/
      new Swiper('.header-bottom>.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
      })*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
.header-content
  background-color white
  bottom-border-1px(#e4e4e4)
  position fixed
  left 0
  right 0
  top 0
  z-index 100
  .header-top
    width 100%
    display flex
    justify-content space-around
    align-items center
    .location
      display flex
      height 50px
      align-items center
      a
        display flex
        white-space nowrap
        font-size 14px
    .search-text
      height 28px
      a
        white-space nowrap
        input
          border-radius 3px
          font-size 14px
          margin-right -20px

    .epet-category
      margin-left 20px
      a
        i
          font-size 18px
  .header-bottom
    width 100%
    .swiper-container
      display flex
      justify-content space-between
      align-items center
      .clorl
        box-sizing border-box
        border-bottom $bc 2px solid
      .swiper-slide
        display flex
        justify-content center
        align-items center
        margin 0 5px
        a
          white-space nowrap
          text-align center
          height 25px
          font-size 14px
</style>
