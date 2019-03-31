import state from '@/store/store';

export default class GymProgramService {
	static setSelected(id: string) {
		state.commit('setGymProgram', id);
	}
}
