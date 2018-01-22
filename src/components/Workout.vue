<template>
  <div class="workout">
    <h1 class="title">{{title}}</h1>
    <div>
      <template v-for="(item,key) in list">
       <exercise 
        :key="key" 
        :title="item.exercise"
        :exercise="item.sets"
        :exerciseKey="key"
        @check="commitWorkout"
        @weight="updateWeight"  />
      </template>
    </div>
  </div>
</template>
<script>
import exercise from './Exercise'
import { mapMutations } from 'vuex'

export default {
  data: function () {
    return {
    }
  },
  components: {
    exercise
  },
  props: {
    list: {
    },
    title: {
    },
    workoutKey: {
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations([
      'updateExerciseDoneSets',
      'updateExerciseWeight'
    ]),
    commitWorkout ({exerciseKey, selected, index}) {
      this.updateExerciseDoneSets({workoutKey: this.workoutKey, exerciseKey, selected, index})
    },
    updateWeight ({exerciseKey, weight}) {
      this.updateExerciseWeight({workoutKey: this.workoutKey, exerciseKey, weight})
    }
  }
}
</script>
<style lang="css" scoped>
.title{
   text-transform:capitalize;
   font-weight: bold;
   font-size: 2rem;
   margin-bottom: 1rem;
}
</style>
