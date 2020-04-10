import Vue from 'vue'
import Vuex from 'vuex'
import { GET_SESSION_STORAGE, SET_SESSION_STORAGE } from '@/utils/sessionStorage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    router: GET_SESSION_STORAGE('router') || []
  },
  getters: {
    comRouter: state => state.router
  },
  mutations: {
    SET_ROUTER_CHANGE: (state, params) => {
      SET_SESSION_STORAGE('router', params)
      state.router = params
    }
  },
  actions: {
  },
  modules: {
  }
})
