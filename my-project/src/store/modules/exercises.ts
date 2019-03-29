import axios from 'axios';
import helpers from './store-helpers';
import { MutationTree, ActionTree } from 'vuex';
import { Exercise } from '@/models/exercise';

export interface ExerciseState {
	all: Exercise[];
	groups: any[];
}

const state: ExerciseState = {
	all: [],
	groups: []
};

const mutations: MutationTree<ExerciseState> = {
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
	}
};

const actions: ActionTree<ExerciseState, any> = {
	getAll({ commit }) {
		return axios
			.get('/api/exercises')
			.then((result) => {
				commit('update', result.data);
				commit('sortByName');
			})
			.catch(console.error);
	}
};

export default {
	namespaced: true,
	state,
	mutations: mutations,
	actions: actions
};
