import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
    state() {
        return {
            token: null,
            username: null,
            password: null
        };
    },
    mutations: {
        setToken(state, newValue) {
            state.token = newValue;
        },
        setUsername(state, newValue) {
            state.username = newValue;
        },
        setPassword(state, newValue) {
            state.password = newValue;
        }
    },
    actions: {
        updateToken({ commit }, newValue) {
            commit('setToken', newValue);
        }
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getUsername(state) {
            return state.username;
        },
        getPassword(state) {
            return state.password;
        }
    },
    plugins: [
        createPersistedState({
            storage: window.localStorage,
        }),
    ],
});