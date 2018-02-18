<template>
  <div id="login">
   Login
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const firebase = require('firebase')
const firebaseui = require('firebaseui')
export default {
  name: 'login',
  data: function () {
    return {
    }
  },
  created () {
    this.initApp(this)
  },
  computed: {
    ...mapGetters([
      'accountDetails'
    ])
  },
  methods: {
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

<style lang="scss">
.firebaseui-idp-list{
  margin-top: 1rem;
  button{
      display: flex;
      align-items: center;
      background: white;
      border: 1px solid #ccc;
      border-radius: .25rem;
      padding: .5rem;
      margin: 0 auto;
      box-shadow: 0 2px 4px rgba(0,0,0,.2);
  }
  .firebaseui-idp-text{
    margin-left: .5rem;
  }
}
img.firebaseui-idp-icon {
  width: 3rem;
  height: auto;
}
</style>