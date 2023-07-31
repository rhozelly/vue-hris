import { createStore } from 'vuex'

const store = createStore ({
    state() {
        return {
            sideBarOpen: false
        }
    },
    getters() {
        return {
            sideBarOpen: state => {
                return state.sideBarOpen
            }
        }
    },
    mutations() {
        return {
            toggleSidebar (state) {
                state.sideBarOpen = !state.sideBarOpen
            }
        }
    },
    actions() {
        return {
            toggleSidebar(context) {
                context.commit('toggleSidebar')
            }
        }
    }

})

export default store

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {
//         sideBarOpen: false
//     },
//     getters: {
//         sideBarOpen: state => {
//             return state.sideBarOpen
//         }
//     },
//     mutations: {
//         toggleSidebar (state) {
//             state.sideBarOpen = !state.sideBarOpen
//         }
//     },
//     actions: {
//         toggleSidebar(context) {
//             context.commit('toggleSidebar')
//         }
//     }
// })