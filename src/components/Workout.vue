<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <div>
      <template v-for="(item,i) in list">
       <exercise :key="i" :exercise="item" />
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
}
</style>
