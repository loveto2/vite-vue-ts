<template>
  <div>
    <h1>Home</h1>
    <h2>{{ count }}</h2>
    <h2>{{ doubleCount }}</h2>
    <button @click="increase">increase</button>
    <button @click="minus">minus</button>
    <button @click="asyncIncrease">asyncIncrease</button>
    <button @click="asyncMinus">asyncMinus</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { State } from '../store/state'
import { Actions, Mutations } from '../store/types'

export default defineComponent({
  setup() {
    const { state, commit, dispatch, getters } = useStore<State>()
    const increase = () => commit(Mutations.INCREASE)
    const asyncIncrease = () => dispatch(Actions.ASYNC_INCREASE)
    const minus = () => commit(Mutations.MINUS)
    const asyncMinus = () => dispatch(Actions.ASYNC_MINUS)
    return {
      minus,
      increase,
      asyncMinus,
      asyncIncrease,
      count: computed(() => state.count),
      doubleCount: computed(() => getters.doubleCount),
    }
  },
})
</script>

<style scoped></style>
