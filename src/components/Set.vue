<template>
    <button @click="check" role="button" class="set" :class="{active: selected}">
        <strong>{{number}}</strong>
    </button> 
</template>
<script>
export default {
  name: 'set',
  data: function () {
    return {
      selected: false
    }
  },
  props: {
    number: {
      type: Number
    },
    index: {
      type: Number
    }
  },
  computed: {
  },
  methods: {
    check () {
      this.selected = !this.selected
      this.$emit('check', {selected: this.selected, index: this.index})
    }
  }
}
</script>
<style lang="scss" scoped>
.set{
  border-radius: 50%;
  border: 2px solid $primary;
  background-color: transparent;
  color: $primary;
  height: 2.25rem;
  width: 2.25rem;
  font-size: 1rem;
  margin-right: .85rem;
  text-align: center;
  
  &:focus{
    outline: none;
  }
}

.active{
  background-color:$primary;
  color: white;
}


</style>
