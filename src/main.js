import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Store from '@Store/store'
import Settings from '@Store/settings.store'
import {firebase} from '@/firebase/config'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store(Store({firebase}))
store.registerModule('settings', Settings)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
