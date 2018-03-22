<template>
<div class="app-warp">
  <HeaderEPet/>
  <Carousel/>
  <div class="columnnavdiv">
    <ul class="clearfix">
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
      <li class="f1"><a href="javascript:" >
        <img src="./imeags/08779496e825394821a9bb96e1ee2b29.jpg">
      </a></li>
    </ul>
  </div>
  <div class="banner_item">
    <a href="javascript:">
      <img src="./imeags/60c354a5d94be9fd114523ee77259c73.gif">
    </a>
  </div>
  <div class="surprise_day">
    <div class="titimg">
      <img src="./imeags/new_index_icon_suprice.png">
    </div>
    <div class="nexttip-wrap">
      <div class="nexttip">
        <span>下一场开始</span>
        <b>88</b>
        <span>:</span>
        <b>88</b>
      </div>
      <div class="more">
        <i class="iconfont icon-xiangyou"></i>
      </div>
    </div>
    </div>
  <Rush/>
</div>
</template>

<script>
  import HeaderEPet from  '../../components/HeaderEPet/HeaderEPet.vue'
  import Carousel from  '../../components/Carousel/Carousel.vue'
  import Rush from  '../../components/Rush/Rush.vue'
  export default {
    components: {
      HeaderEPet,
      Carousel,
      Rush
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .app-warp
    margin-bottom 55px
    margin-top 77px
    overflow hidden
    .columnnavdiv
      .clearfix
        display flex
        flex-wrap wrap
        .f1
          width 20%
          img
            width 100%

    .banner_item
      img
        width 100%
    .surprise_day
      overflow hidden
      .titimg
        float left
        img
          width 85px
      .nexttip-wrap
        float right
        width 140px
        .nexttip
          display flex
          font-size 13px
          b
            border 1px solid black
            margin 0 5px
        .more
          float right
          margin-top -20px
          i
            right 5px

</style>
