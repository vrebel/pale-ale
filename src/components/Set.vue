<template>
    <button role="button" class="set" >
        <strong>{{number}}</strong>
    </button> 
</template>
<script>
export default {
  name: 'set',
  data: function () {
    return {
    }
  },
  props: {
    number: {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="css" scoped>
.set{
  border-radius: 50%;
  border: 2px solid #2c3e50;
  background-color: transparent;
  color: #2c3e50;
  height: 2.25rem;
  width: 2.25rem;
  font-size: 1rem;
  margin-right: .85rem;
  text-align: center;
}
.set:active, .active{
  background-color:#2c3e50;
  color: white;
}

.set:focus{
  outline: none;
}
</style>
