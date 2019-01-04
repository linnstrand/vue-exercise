const exercisesPush = [
  { name: 'Bench Press', mainMuscle: 'chest', equipment: 'barbell' },
  { name: 'Dumbbell press', mainMuscle: 'shoulders', equipment: 'dumbbell' },
  { name: 'Skull Crushers', mainMuscle: 'triceps', equipment: 'barbell' },
  { name: 'Dips ', mainMuscle: 'triceps', equipment: 'body' },
  { name: 'Alt. Deltoid Raise', mainMuscle: 'shoulders', equipment: 'dumbbell' },
  { name: 'Sitting Rear Raise', mainMuscle: 'shoulders', equipment: 'dumbbell' },
];

const exercisesPull = [
  { name: 'Pulldown', mainMuscle: '', equipment: '' },
  { name: 'Bent-Over Row', mainMuscle: '', equipment: '' },
  { name: 'Back Extensions', mainMuscle: '', equipment: '' },
  { name: 'Barbell Curl', mainMuscle: '', equipment: '' },
  { name: 'Cable Face Pulls', mainMuscle: '', equipment: '' },
];

const exercisesLegs = [
  { name: 'Hip Thrusts', mainMuscle: '', equipment: '' },
  { name: 'Bulgarian Squat', mainMuscle: '', equipment: '' },
  { name: 'Leg Press', mainMuscle: '', equipment: '' },
  { name: 'Leg Curl', mainMuscle: '', equipment: '' },
  { name: 'Calf raises', mainMuscle: '', equipment: '' },

  { name: 'Donkey Kick', mainMuscle: '', equipment: '' },

];

const workouts = [
  { id: 1, name: 'Push', exercises: exercisesPush },
  { id: 2, name: 'Pull', exercises: exercisesPull },
  { id: 3, name: 'Legs', exercises: exercisesLegs },
];


module.exports= workouts;
