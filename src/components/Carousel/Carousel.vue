<template>
  <div class="swiper-cotent">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/88e109afbed0ddf3858afd92841010af.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/94d4681e2ab878c340d441a5c1c7b98a.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/b898562338c7f04ac9b2fa3e5aec8b4c.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/d945d3f1b34e0081cf8c9eb34def9096.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/f0e3af5548da9b04aa098004e07ff6c1.jpg" alt="">
        </div>

      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      /* eslint-disable no-new */
      new Swiper('.swiper-cotent .swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2500,
         /* 布尔	真正	设置为false并且自动播放不会在用户交互（滑动）后禁用，
          每次交互后都会重新启动*/
          disableOnInteraction: false,

        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .swiper-container
    .swiper-wrapper
      .swiper-slide
        img
          width 100%
</style>
