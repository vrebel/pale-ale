<template>
  <div class="workout">
    <h1 class="title">{{title}}</h1>
    <div>
      <template v-for="(item,key) in list">
       <exercise 
        :key="key" 
        :title="item.exercise"
        :exercise="item.sets"
        :exerciseKey="key"  />
      </template>
    </div>
  </div>
</template>
<script>
import exercise from './Exercise'

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
