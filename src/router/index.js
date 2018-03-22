/*
路由器组件
 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classification from '../pages/Classification/Classification.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Personal from '../pages/Personal/Personal.vue'
import Classify from '../pages/Classification/Classify/Classify.vue'
import Brand from '../pages/Classification/Brand/Brand.vue'
import Allbrand from '../pages/Allbrand/Allbrand.vue'

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
      children:[
        {
          path: 'classify',
          component: Classify,
          meta:{
            showFooter: true // 需要显示底部组件
          }
        },

        {
          path: 'brand',
          component: Brand,
          meta:{
            showFooter: true // 需要显示底部组件
          }
        },
        {
          path: '/',
          redirect: '/classification/classify'
        }
      ]
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/personal',
      component: Personal,
    },
    {
      path: '/allbrand',
      component: Allbrand,
    }
  ]
})
