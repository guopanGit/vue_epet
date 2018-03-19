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
    <ul class="dscroll-ul">
      <li class="clorl"> <a href="javascript:">首页</a></li>
      <li><a href="javascript:">狗狗主粮</a></li>
      <li><a href="javascript:">服饰城</a></li>
      <li><a href="javascript:">医疗保健</a></li>
      <li><a href="javascript:">零食玩具</a></li>
      <li><a href="javascript:">日用外出</a></li>
      <li><a href="javascript:">美容香波</a></li>
    </ul>
  </div>
  <!--<div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">首页</div>
      <div class="swiper-slide">狗狗主粮</div>
      <div class="swiper-slide">服饰城</div>
      <div class="swiper-slide">医疗保健</div>
      <div class="swiper-slide">零食玩具</div>
      <div class="swiper-slide">日用外出</div>
      <div class="swiper-slide">美容香波</div>
    </div>
  </div>-->
</div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
.header-content
  background-color white
  bottom-border-1px(#e4e4e4)
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
    .dscroll-ul
      display flex
      justify-content space-between
      align-items center
      .clorl
          border-bottom $bc 2px solid
      li
        width 74px
        height 36px
        margin 0 5px
        a
          white-space nowrap
          text-align center
          font-size 14px



</style>
