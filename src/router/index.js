/*
路由器组件
 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classification from '../pages/Classification/Classification.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Personal from '../pages/Personal/Personal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta:{
        showFooter: true // 需要显示底部组件
      }

    },
    {
      path: '/classification',
      component: Classification,
      meta:{
        showFooter: true // 需要显示底部组件
      }
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
