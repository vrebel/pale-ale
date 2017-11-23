<template>
  <div id="app">
    <div class="wrapper">
      <template v-for="( item, key, index ) in workouts">
        <workout :title="key" :list="item" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import workout from './components/Workout'

export default {
  name: 'app',
  data: function () {
    return {
      workouts: {
        'pull': [
          { sets: 3, repetitions: 8, exercise: 'Pulldowns OR Pullups OR chinups' },
          { sets: 3, repetitions: 8, exercise: 'seated cable rows OR chest supported rows' },
          { sets: 5, repetitions: 15, exercise: ' face pulls' },
          { sets: 4, repetitions: 8, exercise: 'hammer curls' },
          { sets: 4, repetitions: 8, exercise: 'dumbbell curls ' }
        ],
        'push': [
          { sets: 4, repetitions: 5, exercise: 'bench press/4x5, 1x5+ overhead press (alternate in the same fashion as the rows and deadlifts)' },
          { sets: 3, repetitions: 8, exercise: 'overhead press/3x8-12 bench press (do the opposite movement: if you bench pressed first, overhead press here)' },
          { sets: 3, repetitions: 8, exercise: 'incline dumbbell press' },
          { sets: 3, repetitions: 8, exercise: 'triceps pushdowns SS 3x15-20 lateral raises' },
          { sets: 3, repetitions: 8, exercise: 'overhead triceps extensions SS 3x15-20 lateral raises' }
        ],
        'legs': [
          { sets: 2, repetitions: 5, exercise: 'squat' },
          { sets: 3, repetitions: 8, exercise: 'Romanian Deadlift' },
          { sets: 3, repetitions: 8, exercise: 'leg press' },
          { sets: 3, repetitions: 8, exercise: 'leg curls' },
          { sets: 5, repetitions: 8, exercise: 'calf raises' }
        ]
      }
    }
  },
  components: {
    workout
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
  margin-top: 2rem;
}

.html{
  min-height:100%;
  position:relative;
}
.body{
  height:100%;
}
.wrapper{
  height:100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
}

.wrapper > * {
  flex: 1 0 100%;
}
</style>
