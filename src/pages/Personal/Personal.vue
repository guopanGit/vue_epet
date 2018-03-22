<template>
  <div class="personal">
    <div class="up">
      <div class="up-header">
        <i class="iconfont icon-icon--" @click="$router.back()"></i>
        <span>注册</span>
      </div>
      <div class="up-logo">
        <img src="./images/logo.png" alt="logo">
      </div>
      <div class="up-enter">
        <ul class="enter-warp">
          <li class="common" @click="wrapIsShow(true)">普通登录</li>
          <li class="phone" @click="wrapIsShow(false)">手机动态密码登录</li>
        </ul>
      </div>
    </div>
    <div class="centre">
      <div class="common-warp" v-show="isShow">
        <div>
          <i class="iconfont icon-zhanghao"></i>
          <input type="text" placeholder="手机号/邮箱/用户名">
          <hr>
          <i class="iconfont icon-mima"></i>
          <input type="password" placeholder="请输入密码">
          <hr>
          <i class="iconfont icon-sanjiao"></i>
        </div>
      </div>
        <div class="phone-wrap" v-show="!isShow">
          <i class="iconfont icon-shoujihao"></i>
          <input type="text" placeholder="已注册的手机号">
          <hr>
          <i class="iconfont icon-mima"></i>
          <input type="text" placeholder="请输入图片内容">
          <img src="./images/captcha.svg">
          <hr>
          <i class="iconfont icon-mima"></i>
          <input type="text" placeholder="动态密码">
          <a href="javascript:">获取动态密码</a>
          <hr>
          <i class="iconfont icon-sanjiao"></i>
        </div>
      <div  class="dl">
        <span>忘记密码?</span>
        <a href="javascript:" class="dlBtn">登录</a>
      </div>

    </div>
    <div class="down">
      <span>合作网站登陆</span>
      <div><a href="javascript:">
        <img src="./images/login_ico2.png">
      </a></div>
      <div><a href="javascript:">
        <img src="./images/login_ico4.png">
      </a></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow:true
      }
    },
    methods: {
      wrapIsShow (pd) {
          this.isShow = pd
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personal
    background-color white
    .up
      background url("./images/2ac7b0a4f0ab1e4a63819e0668d1cb39.png")
      background-size 100%
      width 100%
      height 175px
      .up-header
        padding 20px 10px
        display flex
        justify-content space-between
        color white
      .up-logo
        text-align center
        img
          width 60px
      .up-enter
        position relative
        bottom -31px
        .enter-warp
          display flex
          li
            width 50%
            font-size 18px
            text-align center
            color white
            line-height 44px
            background-color rgba(255, 255, 255, .5)
    .centre
      background-color white
      .common-warp
        margin-left 10px
        text-align center
        width 95%
        padding 10px 0
        input
          font-size 16px
          outline none
        .icon-sanjiao
          position relative
          top -116px
          left -90px
          color white
      .phone-wrap
        width 95%
        margin-left 10px
        padding 10px 0
        font-size 16px
        input
          width 50%
          margin 5px 0
          outline none
        img
          float right
          width 85px
          height 30px
        a
          display inline-block
          width 100px
          height 31px
          text-align center
          line-height 31px
          border 1px solid red
          color red
          border-radius 5px
        .icon-sanjiao
          position relative
          top -167px
          left 220px
          color white
      .dl
        text-align center
        span
          float right
          margin-bottom  10px
          color #898989
        .dlBtn
          display inline-block
          width 294px
          height 38px
          background-color #2ec975
          font-size 15px
          text-align center
          border-radius 5px
          letter-spacing 5px
          color white
          line-height 38px

    .down
      text-align center
      margin-top 80px
      background-color white
      span
        display block
        color #d7d7d7
      div
        display inline-block
        margin 10px 10px
        a
          img
            width 45px
            height 45px
</style>
