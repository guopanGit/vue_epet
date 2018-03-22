<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterEPet v-show="$route.meta.showFooter"/>

  </div>
</template>

<script>
  import FooterEPet from './components/FooterEPet/FooterEPet.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted(){
      this.$store.dispatch('gethome', () => {
        this.$nextTick(() => {

          /* eslint-disable no-new */
          new Swiper('.header-bottom>.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
          })
        })
      })
    },
    components: {
      FooterEPet,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
