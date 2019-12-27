import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'
import i18n from './locales/config'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/plugins.css'
import './assets/css/style.css'
import './assets/css/templete.css'
import './assets/css/skin/skin-1.css'
import './assets/css/style.scss'

import filterPlugin from './helpers/filter'
import directivePlugin from './helpers/directive'
import { APIService } from './helpers/services/api.service'
import jQuery from 'jquery'
import { VueMasonryPlugin } from 'vue-masonry'

import './assets/plugins/owl-carousel/owl.carousel.js'

const api = new APIService()

Vue.config.productionTip = false
Vue.prototype.$http = api
window.$ = window.jQuery = jQuery

Vue.use(VueI18n)
Vue.use(directivePlugin)
Vue.use(filterPlugin)
Vue.use(VueMasonryPlugin)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
