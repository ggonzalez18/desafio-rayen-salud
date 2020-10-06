import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tutorial: undefined,
    tutorials: [],
    items: ['Titulo', 'Fecha'],
    selectedItem: undefined,
    searchDescription: undefined
  },
  mutations: {
    GET_TUTORIAL(state, tutorial) {
      state.tutorial = tutorial
    },
    GET_TUTORIALS(state, tutorials) {
      state.tutorials = tutorials
    },
    SET_ITEM(state, newItem) {
      state.selectedItem = newItem
    },
    SET_DESCRIPTION(state, newDescription) {
      state.searchDescription = newDescription
    },
  },
  actions: {
    getTutorials({ commit }) {
      Axios.get('https://rayentutorialtestapp.azurewebsites.net/tutorials').then((response) => {
        commit('GET_TUTORIALS', response.data)
      })
    },
    setItem({ commit, state }, newItem) {
      commit('SET_ITEM', newItem)
      return state.selectedItem
    },
    deleteTutorials({ dispatch }) {
      Axios.delete('https://rayentutorialtestapp.azurewebsites.net/deletetutorials').then(() => {
        dispatch('getTutorials')
      })
    },
    filterTutorials({ commit }, newDescription) {
      Axios.get(`https://rayentutorialtestapp.azurewebsites.net/tutorial?description=${newDescription}`).then((response) => {
        commit('SET_DESCRIPTION', response.data)
      })
    },
  },
  modules: {
  }
})
