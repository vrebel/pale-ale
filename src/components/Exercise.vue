<template>
  <div class="exercise-wrapper">
    <div class="title-wrapper">
      <span class="exercise">{{title}}</span>
      <div class="weight-input">
        <input type="number">
      </div>
      <span class="weight-unit">Kg</span>
    </div>
    <div class="sets">
         <set
          v-for="(set, index) in exercise" 
          :key="index"
          :number="set" />
    </div>
  </div>
</template>
<script>
import set from './Set'
export default {
  name: 'exercise',
  data: function () {
    return {
    }
  },
  components: {
    set
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
  },
  methods: {
  }
}
</script>
<style lang="css" scoped>

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
