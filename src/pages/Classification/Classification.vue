<template>
  <div class="Classification-wrap">
    <header class="clearfix">
      <div class="header-left">
        <a href="javascript:" @click="goto('/Classification/Classify')">
          <span >分类</span>
        </a>
      </div>
      <div class="header-right">
        <a href="javascript:" @click="goto('/Classification/Brand')">
          <span>品牌</span>
          <i class="iconfont icon-sousuo"></i>
        </a>
      </div>
    </header>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

  export default {
    methods : {
      goto (path) {
        this.$router.push(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .clearfix
    position fixed
    top 0
    left 0
    right 0
    display flex
    line-height 40px
    background-color white
    z-index 100
    .header-left
      width 50%
      height 40px
      position relative
      a
        position absolute
        right 20px
        font-size 16px
        color black
    .header-right
      width 50%
      padding-left 20px
      display flex
      a
        font-size 16px
        color black
        &.on
          border-bottom red 1px solid
      i
        position absolute
        right 10px
        top 0
</style>
