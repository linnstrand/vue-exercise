import axios from 'axios';

export default {
  namespaced: true,
  state: {
    workouts: [],
  },
  mutations: {
    updateWorkouts(state, workouts) {
      state.workouts = workouts;
    },
    addWorkout(state, workout) {
      state.workouts.push(workout);
    },
  },
  actions: {
    getWorkouts({ commit }) {
      axios.get('/api/workouts')
        .then(result => commit('updateWorkouts', result.data))
        .catch(console.error);
    },
    saveWorkout({ commit }, workout) {
      return axios.post('api/workout', workout)
        .then(() => commit('addWorkout', workout));
    },
  },
};
