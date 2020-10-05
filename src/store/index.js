import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tutorial: undefined,
    tutorials: []
  },
  mutations: {
    GET_TUTORIAL(state, tutorial) {
      state.tutorial = tutorial
    },
    GET_TUTORIALS(state, tutorials) {
      state.tutorials = tutorials
    }
  },
  actions: {
    getTutorials({ commit }) {
      Axios.get('https://rayentutorialtestapp.azurewebsites.net/tutorials').then((response) => {
        commit('GET_TUTORIALS', response.data)
      })
    },
    deleteTutorials({ dispatch }) {
      Axios.delete('https://rayentutorialtestapp.azurewebsites.net/deletetutorials').then(() => {
        dispatch('getTutorials')
      })
    },
  },
  modules: {
  }
})
