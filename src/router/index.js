import Vue from 'vue'
import Router from 'vue-router'
import Login from '@Pages/Login.vue'
import Workouts from '@Pages/Workouts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      alias: '/login'
    },
    {
      path: '/workouts',
      name: 'Workouts',
      component: Workouts
    }
  ]
})
