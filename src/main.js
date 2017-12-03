import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Store from './store/store'
const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')
// require('firebase/storage')

const config = {
  projectId: 'paleale-a8aa8',
  apiKey: 'AIzaSyCSEva6WJslfgyBGLRJQPLZdwuvO5xEias',
  authDomain: 'paleale-a8aa8.firebaseapp.com',
  databaseURL: 'https://paleale-a8aa8.firebaseio.com'
  // storageBucket: 'paleale-a8aa8.appspot.com',
  // messagingSenderId: '345420586070'
}
firebase.initializeApp(config)
let provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
firebase.auth().useDeviceLanguage()

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store(Store({firebase}))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
