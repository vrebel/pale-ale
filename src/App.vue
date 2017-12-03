<template>
  <div id="app">
    <component :is="currentPage"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from './pages/Login.vue'
import Workouts from './pages/Workouts.vue'

export default {
  name: 'app',
  data: function () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'currentPage'
    ])
  },
  components: {
    Login,
    Workouts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.html{
  min-height:100%;
  position:relative;
}
.body{
  height:100%;
}
</style>
<style src="./styles/reset.css">
</style>

