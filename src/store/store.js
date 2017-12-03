import templates from '../templates/templates'
export default function ({firebase}) {
  const db = firebase.database()

  return {
    state: {
      workouts: {
      },
      currentPage: 'Login',
      accountDetails: null,
      userStatus: ''
    },
    getters: {
      workouts: state => state.workouts,
      currentPage: state => state.currentPage,
      isUserSignedIn: (state, getters) => getters.userStatus === 'Signed in',
      userStatus: state => state.userStatus,
      accountDetails: state => state.accountDetails
    },
    mutations: {
      setCurrentPage (state, page) {
        state.currentPage = page
      },
      setUserStatus (state, status) {
        state.userStatus = status
      },
      setAccountDetails (state, details) {
        state.accountDetails = details
      },
      writeUserData (state, data) {
        db.ref('users/' + state.accountDetails.uid).update({
          username: state.accountDetails.displayName,
          email: state.accountDetails.email
        })
      },
      setWorkouts (state, workouts) {
        state.workouts = workouts
      }
    },
    actions: {
      initApp ({commit, getters}) {
        firebase.auth().onAuthStateChanged(user => {
          let signInStatus = ''
          let accountDetails = null
          if (user) {
            let displayName = user.displayName
            let email = user.email
            let emailVerified = user.emailVerified
            let photoURL = user.photoURL
            let uid = user.uid
            let phoneNumber = user.phoneNumber
            let providerData = user.providerData
            user.getIdToken().then(accessToken => {
              signInStatus = 'Signed in'
              accountDetails = {
                displayName,
                email,
                emailVerified,
                phoneNumber,
                photoURL,
                uid,
                accessToken,
                providerData
              }
              commit('setUserStatus', signInStatus)
              commit('setAccountDetails', accountDetails)
              commit('writeUserData')
              commit('setCurrentPage', 'Workouts')
            })
          } else {
            signInStatus = 'Signed out'
            accountDetails = 'null'
            commit('setUserStatus', signInStatus)
            commit('setAccountDetails', accountDetails)
          }
        }, error => {
          console.log(error)
        })
      },
      requestUserWorkouts ({state, commit}) {
        let userRef = db.ref(`/users/${state.accountDetails.uid}`)
        userRef.once('value').then(snapshot => {
          if (!snapshot.val().template) {
            userRef.update({
              template: templates.ppl
            })
            commit('setWorkouts', templates.ppl)
          } else {
            commit('setWorkouts', snapshot.val().template)
          }
        })
      }
    }
  }
}
