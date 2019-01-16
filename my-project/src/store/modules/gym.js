import axios from 'axios';

export default {
  namespaced: true,
  state: {
    // state always namespeced in module
    workouts: null,
    workout: null,
  },
  mutations: {
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
