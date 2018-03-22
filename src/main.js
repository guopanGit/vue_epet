import Vue from 'vue'
import App from './App'
import store from './store'
import './mock/mockServer'

import router from './router'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
