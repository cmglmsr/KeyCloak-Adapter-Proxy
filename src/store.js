import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
    state() {
        return {
            token: null,
            username: null,
            password: null,
            domain: null,
            adminToken: null
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
        },
        setDomain(state, newValue) {
            state.domain = newValue;
        },
        setAdminToken(state, newValue) {
            state.adminToken = newValue;
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
        },
        getDomain(state) {
            return state.domain;
        },
        getAdminToken(state) {
            return state.adminToken;
        },
    },
    plugins: [
        createPersistedState({
            storage: window.localStorage,
        }),
    ],
});