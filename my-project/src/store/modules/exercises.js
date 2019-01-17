import axios from 'axios';
import helpers from './store-helpers';

export default {
  namespaced: true,
  state: {
    exercises: null,
    groups: null,
    equipment: null,
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
    setEquipment(state, equipment) {
      state.equipment = equipment;
    },
    updateEquipment(state, item) {
      const changed = state.equipment.find(e => e.id === item.id);
      if (changed.id) {
        changed.name = item.name;
      }
    },
    addEquipment(state, equipment) {
      state.equipment.push(equipment);
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
    getEquipment({ commit }) {
      return axios.get('/api/equipment')
        .then((result) => {
          console.log(result);
          commit('setEquipment', result.data);
        })
        .catch(console.error);
    },
    saveEquipment({ commit }, equipment) {
      return axios.post('api/equipment', equipment)
        .then(() => commit('addEquipment', equipment));
    },
    editEquipment({ commit }, item) {
      return axios.put('api/equipment', item)
        .then((response) => {
          if (response.data.ok === 1) {
            commit('updateEquipment', item);
            return true;
          }
          return false;
        });
    },
  },
};
