import axios from 'axios';
import helpers from './store-helpers';

export default {
  namespaced: true,
  state: {
    exercises: null,
    groups: null,
  },
  mutations: {
    update(state, exercises) {
      state.exercises = exercises;
    },
    sortByName(state) {
      state.exercises = state.exercises.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    },
    sortByEquipment(state) {
      state.groups = helpers.getGroupedOn(state.exercises, 'equipment');
    },
    sortByMuscle(state) {
      state.groups = helpers.getGroupedOn(state.exercises, 'mainMuscle');
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
