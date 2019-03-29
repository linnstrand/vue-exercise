import axios from 'axios';
import { MutationTree, ActionTree } from 'vuex';
import { Equipment } from '../../models/Equipment';

export interface EquipmentState {
	equipment: Equipment[];
}

const state: EquipmentState = {
	equipment: []
};

const mutations: MutationTree<EquipmentState> = {
	update(state, equipment) {
		state.equipment = equipment;
	},
	editName(state, item) {
		const changed = state.equipment.find((e) => e._id === item._id);
		if (changed && changed._id) {
			changed.name = item.name;
		}
	},
	add(state, equipment) {
		state.equipment.push(equipment);
	},
	remove(state, id) {
		state.equipment = state.equipment.filter((e) => e._id !== id);
	}
};

const actions: ActionTree<EquipmentState, any> = {
	async getAll({ commit }) {
		return axios
			.get('/api/equipment')
			.then((result) => {
				console.log(result);
				commit('update', result.data);
			})
			.catch(console.error);
	},
	async create({ commit }, equipment) {
		await axios.post('api/equipment', equipment);
		return commit('add', equipment);
	},
	async delete({ commit }, id) {
		const response = await axios.delete(`api/equipment/${id}`);
		commit('remove', id);
	},
	async edit({ commit }, item) {
		const response = await axios.put('api/equipment', item);
		if (response.data.ok === 1) {
			commit('editName', item);
			return true;
		}
		return false;
	}
};

export default {
	namespaced: true,
	state,
	mutations: mutations,
	actions: actions
};
