import { State } from './state'
import { GetterTree } from 'vuex'

const getters: GetterTree<State, State> = {
  doubleCount: (state) => state.count * 2,
}

export default getters
