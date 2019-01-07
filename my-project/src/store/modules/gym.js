import axios from 'axios';

export default {
  namespaced: true,
  state: {
    workouts: [],
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
      state.workout = state.workouts.filter(w => w.id === id);
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
  getters: {
    getWorkout(state) {
      return state.workout;
    },
  },
};
