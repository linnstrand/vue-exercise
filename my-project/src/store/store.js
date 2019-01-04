import Vue from 'vue';
import Vuex from 'vuex';
import GymModule from './modules/gym';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gym: GymModule,
  },

});
