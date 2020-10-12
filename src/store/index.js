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
    },
    actions: {
        getTutorials({ commit }) { //llamado para mostrar todos los tutoriales
            Axios.get('https://rayentutorialtestapp.azurewebsites.net/tutorials').then((response) => {
                commit('SET_TUTORIALS', response.data)
            })
        },
        getTutorial({ commit }) { //llamado para mostrar 1 tutorial
            Axios.get('https://rayentutorialtestapp.azurewebsites.net/tutorials').then((response) => {
                commit('SET_TUTORIAL', response.data)
            })
        },
        setItem({ commit, state }, selectedItem) { //selecciona un campo en el select y asigna para ordenar
            commit('SET_ITEM', selectedItem)
            return state.ItemSelected
        },
        deleteTutorials({ dispatch }) { //elimina TODOS los tutoriales
            Axios.delete('https://rayentutorialtestapp.azurewebsites.net/deletetutorials').then(() => {
                dispatch('getTutorials')
            })
        },
        deleteTutorial({ dispatch }, id) { //elimina solo 1 tutorial
            Axios.delete(`https://rayentutorialtestapp.azurewebsites.net/deletetutorial/${id}`).then(() => {
                dispatch('getTutorial')
            })
        },
        AddTutorial({ dispatch }, newTutorial) { //agrega nuevo tutorial
            Axios.post('https://rayentutorialtestapp.azurewebsites.net/createtutorial', newTutorial).then(() => {
                dispatch('getTutorials', newTutorial)
            }).catch((error) => {
                console.log(error)
            })
        },

    },
    modules: {}
})