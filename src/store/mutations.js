import {RECEIVE_CLASSIFICATION, RECEIVE_HOME} from './mutation-types'

export default {
  [RECEIVE_HOME](state,{homepage}){
    state.homepage = homepage
  },
  [RECEIVE_CLASSIFICATION](state,{brand}){
    state.brand = brand
  },
}
