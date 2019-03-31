import { Exercise } from './Exercise';
export class GymProgram {
	type!: string;
	_id!: string;
	name!: string;
	workouts: Workout[] = []
}

export class Workout {
	type!: string;
	dayOfWeek!: string;
	_id!: string;
	name!: string;
	exercises: Exercise[] = [];
}

