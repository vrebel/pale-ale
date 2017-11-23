<template>
  <div>
    <span class="exercise">{{title}}</span>
    <div class="sets">
         <set
          v-for="set in exercise.sets" 
          :key="set"
          :number="exercise.reps" />
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
      type: Object
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="css" scoped>
.exercise{
  text-align: left;
  display: block;
  font-size: 1rem;
}
.sets{
  display: flex;
  align-items: center;
  padding: .5rem .5rem 1.25rem;
}
</style>
