const exercisesPush = [
  { name: 'Bench Press', mainMuscle: 'chest', equipment: 'barbell' },
  { name: 'Dumbbell press', mainMuscle: 'shoulders', equipment: 'dumbbell' },
  { name: 'Skull Crushers', mainMuscle: 'triceps', equipment: 'barbell' },
  { name: 'Dips ', mainMuscle: 'triceps', equipment: 'body' },
  { name: 'Alt. Deltoid Raise', mainMuscle: 'shoulders', equipment: 'dumbbell' },
  { name: 'Sitting Rear Raise', mainMuscle: 'shoulders', equipment: 'dumbbell' }
]

const exercisesPull = [
  { name: 'Pulldown', mainMuscle: 'shoulders', equipment: 'cable' },
  { name: 'Bent-Over Row', mainMuscle: 'shoulders', equipment: 'dumbbel' },
  { name: 'Back Extensions', mainMuscle: 'back', equipment: 'other' },
  { name: 'Barbell Curl', mainMuscle: 'biceps', equipment: 'barbell' },
  { name: 'Cable Face Pulls', mainMuscle: 'soulders', equipment: 'cable' }
]

const exercisesLegs = [
  { name: 'Hip Thrusts', mainMuscle: 'glutes', equipment: 'barbell' },
  { name: 'Bulgarian Squat', mainMuscle: 'legs', equipment: 'other' },
  { name: 'Leg Press', mainMuscle: 'quads', equipment: 'machine' },
  { name: 'Leg Curl', mainMuscle: 'hamstrings', equipment: 'machine' },
  { name: 'Calf raises', mainMuscle: 'calves', equipment: 'bodyweight' },
  { name: 'Donkey Kick', mainMuscle: 'glutes', equipment: 'cable' }

]

const workouts = [
  { id: 1, name: 'Push', exercises: exercisesPush },
  { id: 2, name: 'Pull', exercises: exercisesPull },
  { id: 3, name: 'Legs', exercises: exercisesLegs }
]

module.exports = workouts
