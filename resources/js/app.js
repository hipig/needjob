import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import lottie from 'vue-lottie'

Vue.config.productionTip = false

Vue.component('lottie', lottie)

new Vue({
  store,
  router,
  render: h=>h(App)
}).$mount('#app')
