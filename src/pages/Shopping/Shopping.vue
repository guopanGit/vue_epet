<template>
<div>
  <Navigation/>
  <div class="shop-warp">
    <div class="shop-img"></div>
    <span class="emttip ">购物车是空的</span>
    <div class="emt-a">
      <span>去逛逛</span>
      <span>我的收藏</span>
    </div>
  </div>

</div>
</template>

<script>
  import Navigation from '../../components/Navigation/Navigation.vue'
  export default {
    components:{
      Navigation
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
  .shop-warp
    margin-top 50px
    height 300px
    text-align center
    background-color white
    .shop-img
      margin 50px auto 20px
      width 120px
      height 130 px
      background-size 120px auto
      background url(./images/cart-ico.png) no-repeat 0 -195px
    .emttip
      color #dbdbdb
      margin-top 50px
    .emt-a
      display flex
      justify-content center
      span
        display inline-block
        width 100px
        height 40px
        text-align center
        line-height 40px
        border 1px solid #999
        margin 10px  5px
        border-radius 5px
        color #999
</style>
