import state, { State } from './state'
import { createLogger, createStore, Store } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const logger = createLogger()

const store: Store<State> = createStore<State>({
  state,
  mutations,
  actions,
  getters,
  plugins: [logger],
})

export default store
