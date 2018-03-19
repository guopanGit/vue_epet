<template>
  <footer  class="footer_guide border-1px">
    <div class="item_icon" @click="goto('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont icon-shouyedianpujishishangcheng" :class="{on: isCurrent('/home')}"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="item_icon" @click="goto('/classification')" :class="{on: isCurrent('/classification')}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei" :class="{on: isCurrent('/classification')}"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="item_icon" @click="goto('/shopping')" :class="{on: isCurrent('/shopping')}">
      <span class="item_icon">
        <i class="iconfont icon-shouye" :class="{on: isCurrent('/shopping')}"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="item_icon" @click="goto('/personal')" :class="{on: isCurrent('/personal')}">
      <span class="item_icon">
        <i class="iconfont icon-gougou" :class="{on: isCurrent('/personal')}"></i>
      </span>
      <span>我的E宠</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto (path) {
        this.$router.push(path)
      },
      isCurrent (path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
.footer_guide
  top-border-1px(#e4e4e4)
  height 55px
  width 100%
  z-index 100
  background-color white
  position fixed
  left 0
  right 0
  bottom 0
  display flex
  .item_icon
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #333
    &.on
      color $bc
    span
      font-size 14px
      margin 2px 0
      .iconfont
        font-size 24px
        &.on
          color $bc
</style>
