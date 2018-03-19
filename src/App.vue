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

  export default {
    components: {
      FooterEPet
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
