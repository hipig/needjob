import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import lottie from 'vue-lottie'

Vue.config.productionTip = false

Vue.component('lottie', lottie)

new Vue({
  el: '#app',
  store,
  router
})
