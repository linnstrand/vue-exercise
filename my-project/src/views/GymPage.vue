<template>
  <div class="gym">
    <div v-if="availableWorkouts.length > 0"
         class="flex flex-wrap items-stretch">
      <div
        v-for="(workout, index) in availableWorkouts"
        :key="index"
        class="flex-shrink workout m-2 p-2 border border-grey hover:bg-blue-lightest">
        <router-link :to="'workout/' +workout.id"
                     class="workout-content pb-1">
          <h3 class="text-l capitalize tracking-wide p-1">
            {{ workout.name }}
          </h3>
          <div
            v-for="(exercise, index) in workout.exercises"
            :key="index"
            class="flex exercises py-1 text-grey-dark">
            <div class>
              {{ exercise.name }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="availableWorkouts.length===0">
      No workouts created yet. Check out
      <router-link to="exercises">
        exercise list
      </router-link>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import workoutsMixin from '../util/get-workouts-mixin';

export default {
  name: 'Gym',
  mixins: [workoutsMixin],
};
</script>

<style>
.workout-content {
  text-decoration: none;
  color: inherit;
}
</style>
