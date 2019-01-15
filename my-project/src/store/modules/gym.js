import axios from 'axios';
import helpers from './store-helpers';

export default {
  namespaced: true,
  state: {
    // state always namespeced in module
    exercises: null,
    groups: null,
    workouts: null,
    workout: null,
  },
  mutations: {
    updateExercises(state, exercises) {
      state.exercises = exercises;
    },
    sortExerciseName(state) {
      state.exercises = state.exercises.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    },
    sortEquipment(state) {
      // const groupNames = [...new Set(state.exercises.map(e => e.equipment))].sort();
      // const groups = [];
      // groupNames.forEach((group) => {
      //   const exercises = state.exercises.filter(e => e.equipment === group);
      //   groups.push({ name: group, exercises });
      // });
      // state.groups = groups;
      state.groups = helpers.getGroupedOn(state.exercises, 'equipment');
    },
    sortMuscle(state) {
      state.groups = helpers.getGroupedOn(state.exercises, 'mainMuscle');
    },
    updateWorkouts(state, workouts) {
      state.workouts = workouts;
    },
    addWorkout(state, workout) {
      state.workouts.push(workout);
    },
    setWorkout(state, id) {
      state.workout = state.workouts ? state.workouts.find(w => w.id === id) : null;
    },
  },
  actions: {
    getExercises({ commit }) {
      return axios.get('/api/exercises')
        .then((result) => {
          commit('updateExercises', result.data);
          commit('sortExerciseName');
        })
        .catch(console.error);
    },
    getWorkouts({ commit }) {
      return axios.get('/api/workouts')
        .then((result) => {
          commit('updateWorkouts', result.data);
        })
        .catch(console.error);
    },
    saveWorkout({ commit }, workout) {
      return axios.post('api/workout', workout)
        .then(() => commit('addWorkout', workout));
    },
    getWorkout({ commit, state, dispatch }, id) {
      if (state.workouts) {
        commit('setWorkout', id);
      } else {
        dispatch('getWorkouts').then(() => {
          commit('setWorkout', id);
        })
          .catch(console.error);
      }
    },
  },
  getters: {
    getWorkout: state => state.workout || {},
  },
};
