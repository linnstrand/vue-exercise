<template>
  <div class="gym">
    <div class="flex flex-wrap items-stretch" v-if="availableExercises.length > 0">
      <div class="flex-shrink workout m-2 p-2 border border-grey hover:bg-blue-lightest" v-for="(workout, index) in availableExercises" :key="index">
        <router-link :to="'workout/' +workout.id" class="workout-content pb-1">
          <h3 class="text-l capitalize tracking-wide p-1">{{workout.name}}</h3>
          <div class="flex exercises py-1 text-grey-dark" v-for="(exercise, index) in workout.exercises" :key="index">
            <div class>{{exercise.name}}</div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="availableExercises.length===0">No workouts created yet. Check out
      <router-link to="exercises">exercise list</router-link>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import exerciseMixin from "../get-exercises-mixin";

export default {
  name: "gym",
  mixins: [exerciseMixin]
};
</script>

<style>
.workout-content {
  text-decoration: none;
  color: inherit;
}
</style>
