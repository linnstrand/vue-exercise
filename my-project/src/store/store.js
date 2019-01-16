import Vue from 'vue';
import Vuex from 'vuex';
import GymModule from './modules/gym';
import ExerciseModule from './modules/exercises';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gym: GymModule,
    exercises: ExerciseModule,
  },
});
