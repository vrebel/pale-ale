import templates from '../templates/templates'
export default function ({firebase}) {
  const db = firebase.database()
  const setTemplate = function (template, uid) {
    for (let prop in template) {
      let key = db.ref(`/users/${uid}/template`).push().key
      let tmp = {}
      tmp['order'] = prop
      tmp['name'] = template[prop].name
      db.ref(`/users/${uid}/template/${key}`).update(tmp)
      template[prop].exercises.map(item => {
        db.ref(`/users/${uid}/template/${key}/exercises`).push({
          'sets': item.sets,
          'exercise': item.exercise,
          'templateID': key
        })
      })
    }
  }
  return {
    state: {
      defaultTemplate: 'julianB',
      workouts: {
      },
      currentPage: 'Login',
      accountDetails: null,
      userStatus: '',
      workoutKey: null
    },
    getters: {
      workouts: state => state.workouts,
      currentPage: state => state.currentPage,
      isUserSignedIn: (state, getters) => getters.userStatus === 'Signed in',
      userStatus: state => state.userStatus,
      accountDetails: state => state.accountDetails,
      getExerciseWeight: state => (workoutID, exerciseID) => state.workouts[workoutID].exercises[exerciseID].weight
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
      },
      setWorkoutKey (state, key) {
        state.workoutKey = key
      },
      updateExerciseDoneSets (state, {workoutKey, exerciseKey, selected, index}) {
        let doneArr = state.workouts[workoutKey].exercises[exerciseKey].done
        if (!doneArr) {
          doneArr = []
        }
        doneArr[index] = selected
        state.workouts[workoutKey].exercises[exerciseKey].done = doneArr
      },
      updateExerciseWeight (state, {workoutKey, exerciseKey, weight}) {
        state.workouts[workoutKey].exercises[exerciseKey] = {...state.workouts[workoutKey].exercises[exerciseKey], ...{weight}}
      }
    },
    actions: {
      initApp ({commit, getters}, vueRef) {
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
              vueRef.$router.push('workouts')
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
      requestUserWorkouts ({state, commit, dispatch}) {
        let userRef = db.ref(`/users/${state.accountDetails.uid}`)
        userRef.once('value').then(snapshot => {
          if (!snapshot.val().template) {
            setTemplate(templates[state.defaultTemplate], state.accountDetails.uid)
          }
        })
        db.ref(`/users/${state.accountDetails.uid}/template`).once('value').then(snapshot => {
          commit('setWorkouts', snapshot.val())
        })
        dispatch('setWeights')
      },
      saveWorkout ({state, commit}, {workoutID}) {
        let workoutKey = db.ref(`/workouts/${state.accountDetails.uid}/workoutList`).push().key
        commit('setWorkoutKey', workoutKey)
        let updates = {}
        updates[`/workouts/${state.accountDetails.uid}/workoutList/${workoutKey}`] = state.workouts[workoutID]
        firebase.database().ref().update(updates)
      },
      setWeights ({state, commit}) {
        let ref = `/workouts/${state.accountDetails.uid}/workoutList`
        db.ref(ref).once('value').then((snapshot) => {
          let workoutList = Object.values(snapshot.val())
          let workoutKeys = Object.keys(state.workouts)
          const findWorkout = (key) => workoutList.filter(workout => workout.templateID === key)
          workoutKeys.map(findWorkout).map(list => {
            let last = list.pop()
            let workoutKey = last.templateID
            if (last) {
              let exercises = last.exercises
              for (let exerciseKey in exercises) {
                let weight = exercises[exerciseKey].weight
                commit('updateExerciseWeight', { workoutKey, exerciseKey, weight })
              }
            }
          })
        })
      }
    }
  }
}
