//import axios from 'axios';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const liftModule = {
    namespaced: true,
    state: {
        floors: [
                { floor_number: 5 },
                { floor_number: 4 },
                { floor_number: 3 }, 
                { floor_number: 2 },
                { floor_number: 1 }
            ],
        floor_queue: [],
        lift: { current_floor: 1, direction: 'up'}
    }
}
let store = new Vuex.Store( {
    modules: {
        liftModule
    },
    mutations: {
        SET_FLOOR_TO_STATE: (state, floor_queue) => {
            state.floor_queue = floor_queue;
        },
        SET_LIFT_DATA_TO_STATE: (state, lift_data) => {
            state.lift = lift_data;
        }
    },
    actions: {
        SET_FLOOR_IN_QUEUE({commit}, floor_queue){
            commit('SET_FLOOR_TO_STATE', floor_queue);
        },
        SET_LIFT_DATA_CHANGES({commit}, lift_data){
            commit('SET_LIFT_DATA_TO_STATE', lift_data);
        }
    },
    getters: {
        FLOORS(state){
            return state.floors;
        },
        FLOOR_QUEUE(state){
            return state.floor_queue;
        },
        LIFT(state){
            return state.lift;
        }
    },
    plugins: [createPersistedState()]
})

export default store;
