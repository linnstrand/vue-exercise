import { Exercise } from './Exercise';
export interface GymProgram {
	_id: string;
	name: string;
	exercise: Exercise[];
}
