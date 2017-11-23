<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <div>
      <template v-for="item in list">
       <div :key="item.id">
          <span class="exercise">{{item.exercise}}</span>
          <div class="sets">
            <button :ref="title+'_'+set" @click="select(set)" class="set" :class="{active: false }" :key="set"  v-for="set in item.sets">
              <strong >{{item.repetitions}}</strong>
            </button>  
          </div>
       </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      active: {

      }
    }
  },
  props: {
    list: {

    },
    title: {

    }
  },
  computed: {
    initialState () {
      return {}
    },
    isActive () {
      // return this.active[this.title] || false
    }
  },
  methods: {
    select (set) {
      // this.$set(this.active[this.title], set, true)
      console.log(this.$refs)
    }
  }
}
</script>
<style lang="css" scoped>
.title{
   text-transform:capitalize;
   font-weight: bold;
   font-size: 2rem;
}
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
