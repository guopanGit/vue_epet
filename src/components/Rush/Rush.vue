<template>
  <!-- Swiper -->
  <div class="swiper-container " id="surprise-pro">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images/7fa0cad31768d930120a2ccb24706a3d.jpg" alt="">
        <b>¥1.50</b>
        <span>省90.00</span>
      </div>
      <div class="swiper-slide">
        <img src="./images/7fa0cad31768d930120a2ccb24706a3d.jpg" alt="">
        <b>¥1.50</b>
        <span>省90.00</span>
      </div>
      <div class="swiper-slide">
        <img src="./images/7fa0cad31768d930120a2ccb24706a3d.jpg" alt="">
        <b>¥1.50</b>
        <span>省90.00</span>
      </div>
      <div class="swiper-slide">
        <img src="./images/7fa0cad31768d930120a2ccb24706a3d.jpg" alt="">
        <b>¥1.50</b>
        <span>省90.00</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      /* eslint-disable no-new */
     new Swiper('#surprise-pro', {
        slidesPerView: 3.5,
        spaceBetween: 30,

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #surprise-pro
    .swiper-wrapper
      .swiper-slide
        b
          color red
          font-size 14px
          margin 5px 0
        span
          font-size 14px
          margin-bottom 5px
</style>
