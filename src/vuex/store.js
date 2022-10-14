//import axios from 'axios';
import Vuex from 'vuex'

let store = new Vuex.Store( {
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
            //console.log('пришел номер', floor_number, commit)
        },
        SET_LIFT_DATA_CHANGES({commit}, lift_data){
            commit('SET_LIFT_DATA_TO_STATE', lift_data);
            console.log('пришел лифт', lift_data, commit)
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
    }
})

export default store;
