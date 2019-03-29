import axios from 'axios';
import { MutationTree, ActionTree, GetterTree } from 'vuex';
import { Workout } from '@/models/Workout';

export interface WorkoutState {
	workouts: Workout[];
	groups: any[];
	selected: Workout | undefined;
}

const state: WorkoutState = {
	workouts: [],
	groups: [],
	selected: undefined
};

const mutations: MutationTree<WorkoutState> = {
	updateWorkouts(state, workouts) {
		state.workouts = workouts;
	},
	addWorkout(state, workout) {
		state.workouts.push(workout);
	},
	setWorkout(state, id) {
		state.selected = state.workouts ? state.workouts.find((w) => w.id === id) : undefined;
	}
};

const actions: ActionTree<any, any> = {
	getWorkouts({ commit }) {
		return axios
			.get('/api/workouts')
			.then((result) => {
				commit('updateWorkouts', result.data);
			})
			.catch(console.error);
	},
	saveWorkout({ commit }, workout) {
		return axios.post('api/workout', workout).then(() => commit('addWorkout', workout));
	},
	getWorkout({ commit, state, dispatch }, id) {
		if (state.workouts) {
			commit('setWorkout', id);
		} else {
			dispatch('getWorkouts')
				.then(() => {
					commit('setWorkout', id);
				})
				.catch(console.error);
		}
	}
};

const getters: GetterTree<any, any> = {
	getWorkout: (state) => state.workout || {}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
