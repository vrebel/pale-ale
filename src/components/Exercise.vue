<template>
  <div class="exercise-wrapper">
    <div class="title-wrapper">
      <span class="exercise">{{title}}</span>
      <div class="weight-input">
        <input 
          :value="exerciseWeight" 
          @change="setWeight($event)"
          type="number"
          step="2.5">
      </div>
      <span class="weight-unit">Kg</span>
    </div>
    <div class="sets">
         <set
          v-for="(set, index) in exercise" 
          :key="index"
          :number="set"
          :index="index"
          @check="setChecked" />
    </div>
  </div>
</template>
<script>
import set from './Set'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'exercise',
  data: function () {
    return {
    }
  },
  components: {
    set
  },
  model: {
    event: 'change',
    prop: 'value'
  },
  props: {
    title: {
      type: String
    },
    exercise: {
      type: Array
    },
    exerciseKey: {
    }
  },
  computed: {
    ...mapGetters([
      'getExerciseWeight'
    ]),
    exerciseWeight () {
      let workoutKey = this.$parent.$options.propsData.workoutKey
      return this.getExerciseWeight(workoutKey, this.exerciseKey)
    }
  },
  methods: {
    ...mapMutations([
      'updateExerciseWeight'
    ]),
    setChecked ({selected, index}) {
      this.$emit('check', {exerciseKey: this.exerciseKey, selected, index})
    },
    setWeight (e) {
      let weight = e.target.valueAsNumber || 0
      let workoutKey = this.$parent.$options.propsData.workoutKey
      this.updateExerciseWeight({workoutKey, exerciseKey: this.exerciseKey, weight})
    }
  }
}
</script>
<style lang="scss" scoped>

.sets{
  display: flex;
  align-items: center;
  padding: .5rem .5rem 1.25rem;
}

.title-wrapper{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.exercise{
  text-align: left;
  font-size: 1rem;
  flex: 0 1 80%;
  margin-right: .5rem;
  align-items: flex-end;
}

.weight-input{
  flex: 0 0 10%;
  margin-left: auto;
  color: #2c3e50;
}

input{
  outline: none;
  border: none;
  border-bottom: 1px solid #2c3e50;
  width: 100%;
  height: 100%;
}

.weight-unit{
  flex: 0 0 5%;
  margin-top: auto;
  color: #2c3e50;
}

.exercise-wrapper{
  padding: .5rem;
}
</style>
