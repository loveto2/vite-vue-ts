import { Mutations } from './types'
import { State } from './state'
import { MutationTree } from 'vuex'

const mutations: MutationTree<State> = {
  [Mutations.INCREASE](state, payload = 1) {
    state.count += payload
  },
  [Mutations.MINUS](state, payload = 1) {
    state.count -= payload
  },
}

export default mutations
