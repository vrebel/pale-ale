<template>
  <div>
    <span class="exercise">{{title}}</span>
    <div class="sets">
         <set />
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
    },
    exercise: {
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
