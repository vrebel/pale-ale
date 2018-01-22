<template>
  <div id="workouts">
    <template v-for="(workout, key) in workouts">
      <div :key="workout.order" class="wrapper">
        <workout 
          :title="workout.name" 
          :list="workout.exercises"
          :workoutKey="key" />
        <button @click="done(key)" :disabled="isDisabled" class="submit" :class="buttonClass" >{{buttonText}}</button>
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
      buttonText: 'Done!',
      buttonClass: ''
    }
  },
  computed: {
    ...mapGetters([
      'workouts'
    ]),
    isDisabled () {
      return this.buttonClass !== ''
    }
  },
  components: {
    workout
  },
  created () {
    this.requestUserWorkouts()
  },
  methods: {
    ...mapActions([
      'requestUserWorkouts',
      'saveWorkout'
    ]),
    done (key) {
      this.saveWorkout({workoutID: key})
      this.buttonText = 'Saved'
      this.buttonClass = 'sucess'
    }
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
  position: relative;
}

.submit{
  padding: .5rem 1rem;
  width: 100%;
  background-color: white;
  border: 2px solid #2c3e50;
  font-size: 1rem;
  color: #2c3e50;
  font-weight: bold;
  margin-top: 1rem;

  
}
.submit.disabled {
  opacity: .5;
}
.submit.sucess {
  border: 2px solid #2c5044;
  color: #2c5044;
}
.submit:focus{
  outline: none;
}
</style>
