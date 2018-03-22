<template>
  <div class="classify">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">为你推荐</div>
        <div class="swiper-slide">E宠国际</div>
        <div class="swiper-slide">狗狗主粮</div>
        <div class="swiper-slide">狗狗零食</div>
        <div class="swiper-slide">狗狗服饰</div>
        <div class="swiper-slide">狗狗窝垫</div>
        <div class="swiper-slide">狗狗生活</div>
        <div class="swiper-slide">狗狗玩具</div>
        <div class="swiper-slide">狗狗保健</div>
        <div class="swiper-slide">狗狗医疗</div>
        <div class="swiper-slide">狗狗牵引</div>
        <div class="swiper-slide">狗狗美容</div>
        <div class="swiper-slide">狗狗周边</div>
        <div class="swiper-slide">狗狗清洁</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted() {
      /* eslint-disable no-new */
      new Swiper('.classify .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        pagination: {
          clickable: false,
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .classify
    margin-top 40px
    .swiper-container
      height: 100%
      .swiper-wrapper
        height: 100%
        .swiper-slide
          font-size 16px
          margin 15px 0
</style>
