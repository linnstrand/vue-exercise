import axios from 'axios';
import { MutationTree, ActionTree, GetterTree } from 'vuex';
import { GymProgram } from '@/models/GymProgram';

export interface GymProgramState {
	gymPrograms: GymProgram[];
	groups: any[];
	selected: GymProgram | undefined;
}

const state: GymProgramState = {
	gymPrograms: [],
	groups: [],
	selected: undefined
};

const mutations: MutationTree<GymProgramState> = {
	updateGymPrograms(state, gymPrograms) {
		state.gymPrograms = gymPrograms;
	},
	addGymProgram(state, gymProgram) {
		state.gymPrograms.push(gymProgram);
	},
	setGymProgram(state, id) {
		state.selected = state.gymPrograms ? state.gymPrograms.find((w) => w._id === id) : undefined;
	}
};

const actions: ActionTree<GymProgramState, any> = {
	async getGymPrograms({ commit }) {
		return axios
			.get('/api/gymPrograms')
			.then((result) => {
				commit('updateGymPrograms', result.data);
			})
			.catch(console.error);
	},
	async saveGymProgram({ commit }, gymProgram) {
		await axios.post('api/gymProgram', gymProgram);
		return commit('addGymProgram', gymProgram);
	},
	async getGymProgram({ commit, state, dispatch }, id) {
		if (state.gymPrograms) {
			commit('setGymProgram', id);
		} else {
			dispatch('getGymPrograms')
				.then(() => {
					commit('setGymProgram', id);
				})
				.catch(console.error);
		}
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
