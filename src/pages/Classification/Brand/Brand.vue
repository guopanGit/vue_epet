<template>
  <div class="brand-warp">
    <div class="brand" v-for="(b, index) in brand" :key="index">
      <div class="brand-title">
        <span>——{{b.title}}——</span>
      </div>
      <div class="brand-list">
        <ul class="list">
          <li class="list_img" v-for="(l, index) in b.list" :key="index">
            <div class="img-wrap">
              <img :src="l.logo" alt="">
            </div>
            <p>{{l.name}}</p>
            <p>{{l.address}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="all" @click="goto('/allbrand')">全部</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['brand'])
    },
    mounted() {
      this.$store.dispatch('getclassification')
    },
    methods: {
      goto(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .brand-warp
    margin-top 40px

  .brand
    .brand-title
      background-color white
      text-align center
      padding 10px 0
      margin 10px 0 0 0
      span
        font-size 12px
        color #999
    .brand-list
      background-color white
      .list
        display flex
        flex-wrap wrap
        .list_img
          text-align center
          margin 0 5px
          .img-wrap
            border 1px solid #e2e2e2
            width 95px
            height 56px
            display flex
            img
              display block
              justify-content
              width 100%
          p
            font-size 13px
            color #333
            margin 3px 0
          i
            font-size 12px
            color #999

  .all
    width 40px
    height 40px
    background-color rgba(0, 0, 0, .4)
    border-radius 50%
    font-size 12px
    text-align center
    line-height 40px
    color white
    position fixed
    right 0
    bottom 100px

</style>
