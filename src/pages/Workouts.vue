<template>
  <div id="workouts">
    <template v-for="(workout, key) in workouts">
      <div :key="workout.order" class="wrapper">
        <workout 
          :title="workout.name" 
          :list="workout.exercises"
          :workoutKey="key" />
        <!-- <button class="submit" :key="index">Done!</button> -->
      </div>
    </template>
  </div>
</template>

<script>
import workout from '../components/Workout'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'workouts',
  data: function () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'workouts'
    ])
  },
  components: {
    workout
  },
  created () {
    this.requestUserWorkouts()
  },
  methods: {
    ...mapActions([
      'requestUserWorkouts'
    ])
  }
}
</script>

<style scoped>
#workouts{
  height:100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
  margin-top: 1rem;
}
.wrapper{
  flex: 1 0 100%;
}

.submit{
  padding: .5rem 1rem;
  background-color: white;
  border: 2px solid #2c3e50;
  font-size: 1rem;
  color: #2c3e50;
  font-weight: bold;
}
.submit:focus{
  outline: none;
}
</style>
