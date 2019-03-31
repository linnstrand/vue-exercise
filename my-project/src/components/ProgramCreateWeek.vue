<template>
  <div class="week-program-form">
    <div v-for="(day, index) in WEEK" :key="'d-' + index" :class="`week-day day-${index}`">
      <h4>{{day}}</h4>
      <input type="text" class="w-full" :placeholder="placeholder" v-model="workoutName">
    </div>
    <div
      v-for="nr in 7"
      :key="nr-1"
      class="day-exercise empty-day"
      @dragover.prevent
      @drop="dragFinish(nr-1, $event)"
    >
      <div v-for="exercise in newProgram.workouts[nr-1].exercises" :key="exercise._id">
        <span>{{exercise.name}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { WEEK } from '../util/constants';
import GymProgramService from '../util/GymProgramService';
import { Exercise } from '../models/Exercise';
import { Workout } from '../models/GymProgram';
import ExerciseList from '@/components/ExerciseList.vue';
import { GymProgram } from '@/models/GymProgram';

@Component({
  components: {
    ExerciseList
  }
})
export default class GymProgramCreateWeek extends Vue {
  private WEEK = WEEK;
  private workoutName: string = '';
  private readonly placeholder = 'Workout Name';

  @Prop({ required: true }) newProgram!: GymProgram;

  created() {}

  dragFinish(key: number, event: DragEvent) {
    let id = event!.dataTransfer!.getData('id');
    if (id && this.newProgram) {
      const exercise = this.$store.state.exercises.all.find(
        (e: Exercise) => e._id === id
      );
      this.newProgram.workouts[key].exercises.push(exercise);
    }
    event!.dataTransfer!.clearData();
  }
}
</script>

<style scoped>
.week-program-form {
  display: grid;
  grid-template-columns: repeat(7, 8em);
  grid-template-rows: auto;
}
.week-program-form > * {
  border: 1px solid black;
}
h4 {
  margin-bottom: 0.25em;
}
.week-day {
  padding: 0.5em 0.25em;
  text-align: center;
}
.empty-day {
  min-height: 4em;
  background-color: #cffced;
}
</style>
