<template>
  <div>
    <div class="header_guide">
      <i class="iconfont icon-icon--" @click="$router.back()"></i>
      <span>全部品牌</span>
      <i class="iconfont icon-fenlei1" @click="eschew"></i>
    </div>
    <transition name="height">
      <div class="footer_guide border-1px" v-show="isShow">
        <div class="item_icon" @click="goto('/home')">
      <span>
        <i class="iconfont icon-zhuye"></i>
      </span>
          <span>首页</span>
        </div>
        <div class="item_icon" @click="goto('/classification')">
      <span>
        <i class="iconfont icon-renwuqingdan"></i>
      </span>
          <span>分类</span>
        </div>
        <div class="item_icon" @click="goto('/shopping')">
        <span>
        <i class="iconfont icon-shouye"></i>
        </span>
        <span>购物车</span>
        <span class="hd">0</span>
        </div>
        <div class="item_icon" @click="goto('/personal')">
      <span>
        <i class="iconfont icon-banma"></i>
      </span>
          <span>我的E宠</span>
        </div>
      </div>
    </transition>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      goto(path) {
        this.$router.push(path)
      },
      eschew() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header_guide
    height 50px
    display flex
    justify-content space-between
    background-color white
    bottom-border-1px(#d7d7d7)
    line-height 50px
    position fixed
    top 0
    left 0
    right 0
    z-index 100

  .footer_guide
    bottom-border-1px(#d7d7d7)
    height 55px
    width 100%
    background-color white
    margin-top 50px
    display flex
    z-index 100
    overflow hidden
    margin-bottom -50px
    &.height-enter, &.height-leave-to
      height 0
    &.height-enter-active, &.height-leave-active
      transition height .5s

    .item_icon
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #333
      position relative
      span
        font-size 14px
        margin 2px 0
        .iconfont
          font-size 24px
      .hd
        display block
        background-color red
        width 12px
        height 12px
        line-height 12px
        color white
        font-size 10px
        border-radius 50%
        text-align center
        position absolute
        top 0
        left 35px
</style>
