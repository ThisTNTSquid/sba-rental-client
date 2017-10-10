import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Values stored
  state:{
    sidebar: true
  },
  // Mutations are just function to change state
  mutations:{
    'SIDEBAR' (state,payload){
      state.sidebar = payload
    }
  },
  // Actions used to run mutations
  actions:{

  }
})