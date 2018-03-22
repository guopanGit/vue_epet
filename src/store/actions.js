import {reqhome, reqclassification} from '../api'
import {RECEIVE_HOME, RECEIVE_CLASSIFICATION} from './mutation-types'

export default {
  async gethome({commit}, cd) {
    const result = await reqhome()
    commit(RECEIVE_HOME, {homepage: result.data})
    cd && cd()
  },
  async getclassification({commit}) {
    const result = await reqclassification()
    commit(RECEIVE_CLASSIFICATION, {brand: result.data})
  }
}
