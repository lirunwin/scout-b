import Vue from 'vue'
import App from '@/views/Layout/Home.vue'
import router from '@/routes/'
import store from '@/store/'

import Vuetify from 'vuetify'
Vue.use(Vuetify, {
  theme: {
    primary: '#acc192',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
