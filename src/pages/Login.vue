<template>
  <div id="login">
   Login
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
const firebase = require('firebase')
const firebaseui = require('firebaseui')
export default {
  name: 'login',
  data: function () {
    return {
    }
  },
  created () {
    this.initApp()
  },
  computed: {
    ...mapGetters([
      'accountDetails'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentPage'
    ]),
    ...mapActions([
      'initApp'
    ])
  },
  mounted () {
    let uiConfig = {
      signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
    }
    // Initialize the FirebaseUI Widget using Firebase.
    let ui = new firebaseui.auth.AuthUI(firebase.auth())
    // The start method will wait until the DOM is loaded.
    try {
      ui.start('#login', uiConfig)
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
.firebaseui-idp-list{
  margin-top: 1rem;
}
img.firebaseui-idp-icon {
  width: 3rem;
  height: auto;
}
</style>