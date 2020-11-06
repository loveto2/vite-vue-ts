import { Actions, Mutations } from './types'
import { State } from './state'
import { ActionTree } from 'vuex'

const actions: ActionTree<State, State> = {
  [Actions.ASYNC_INCREASE]({ commit }, payload = 2) {
    setTimeout(() => {
      commit(Mutations.INCREASE, payload)
    }, 1000)
  },
  [Actions.ASYNC_MINUS]({ commit }, payload) {
    setTimeout(() => {
      commit(Mutations.MINUS, payload)
    }, 1000)
  },
}

export default actions
