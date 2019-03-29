<template>
  <div>
    <h1>Create workout page</h1>
    <form>
      <div class="program-type">
        <h3>Select Program type</h3>
        <input type="radio" name="week" id="week" value="week" v-model="programType">
        <label for="programType">Week Program</label>
        <input type="radio" name="periodic" id="periodic" value="periodic" v-model="programType">
        <label for="programType">Periodic Program</label>
      </div>
      <div class="program-content">
        <div class="week-program-form" v-if="programType==='week'">
          <div v-for="(day, index) in WEEK" :key="'d-' + index" :class="`week-day day-${index}`">
            <h4>{{day}}</h4>
            <input type="text" class="w-full" placeholder="Workout Name">
          </div>
          <div
            v-for="nr in 7"
            :key="nr"
            class="day-exercise empty-day"
            @dragover.prevent
            @drop="dragFinish(nr, $event)"
          ></div>
        </div>
        <div class="periodic-program-form" v-if="programType==='periodic'"></div>
      </div>
    </form>
    <h3>Available Exercises</h3>
    <ExerciseList/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WEEK } from '../util/constants';
import ExerciseList from '@/components/ExerciseList.vue';

@Component({
  components: {
    ExerciseList
  }
})
export default class GymProgramCreate extends Vue {
  private programType: string = 'week';
  private WEEK = WEEK;

  dragFinish(key: number, event: DragEvent) {
    let id = event!.dataTransfer!.getData('id');
    event.dataTransfer.clearData();
  }
}
</script>

<style scoped>
.week-program-form {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
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
