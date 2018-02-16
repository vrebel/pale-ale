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
        @check="commitWorkout"  />
      </template>
    </div>
  </div>
</template>
<script>
import exercise from '@Components/Exercise'
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
      'updateExerciseDoneSets'
    ]),
    commitWorkout ({exerciseKey, selected, index}) {
      this.updateExerciseDoneSets({workoutKey: this.workoutKey, exerciseKey, selected, index})
    }
  }
}
</script>
<style lang="scss" scoped>
.title{
   text-transform:capitalize;
   font-weight: bold;
   font-size: 2rem;
   margin-bottom: 1rem;
}
</style>
