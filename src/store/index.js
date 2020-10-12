import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tutorial: null,
        tutorials: [],
        items: [
            { value: 'nombre', label: 'Titulo' },
            { value: 'fecha', label: 'Fecha' }
        ],
        ItemSelected: null,
    },
    mutations: {
        SET_TUTORIAL(state, tutorial) {
            state.tutorial = tutorial
        },
        SET_TUTORIALS(state, tutorials) {
            state.tutorials = tutorials
        },
        SET_ITEM(state, selectedItem) {
            state.ItemSelected = selectedItem
        },
        // SET_NEW_TUTORIAL(state, tutorial) {
        //     state.newTutorial = tutorial
        // },
    },
    actions: {
        getTutorials({ commit }) {
            Axios.get('https://rayentutorialtestapp.azurewebsites.net/tutorials').then((response) => {
                commit('SET_TUTORIALS', response.data)
            })
        },
        setItem({ commit, state }, selectedItem) {
            commit('SET_ITEM', selectedItem)
            return state.ItemSelected
        },
        deleteTutorials({ dispatch }) {
            Axios.delete('https://rayentutorialtestapp.azurewebsites.net/deletetutorials').then(() => {
                dispatch('getTutorials')
            })
        },
        AddTutorial({ dispatch }, newTutorial) {
            Axios.post('https://rayentutorialtestapp.azurewebsites.net/createtutorial', newTutorial).then((response) => {
                console.log(response)
                dispatch('getTutorials', newTutorial)
            }).catch((error) => {
                console.log(error)
            })
        },

    },
    modules: {}
})