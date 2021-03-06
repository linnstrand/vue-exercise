import axios from 'axios';
import helpers from './store-helpers';

export default {
  namespaced: true,
  state: {
    all: null,
    groups: null,
  },
  mutations: {
    update(state, exercises) {
      state.all = exercises;
    },
    sortByName(state) {
      state.all = state.all.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    },
    sortByEquipment(state) {
      state.groups = helpers.getGroupedOn(state.all, 'equipment');
    },
    sortByMuscle(state) {
      state.groups = helpers.getGroupedOn(state.all, 'mainMuscle');
    },
  },
  actions: {
    getAll({ commit }) {
      return axios.get('/api/exercises')
        .then((result) => {
          commit('update', result.data);
          commit('sortByName');
        })
        .catch(console.error);
    },
  },
};
