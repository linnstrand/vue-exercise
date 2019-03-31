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
        <GymProgramCreateWeek v-if="programType==='week'" :new-program="newProgram"/>
        <div class="periodic-program-form" v-if="programType==='periodic'"></div>
      </div>
    </form>
    <h3>Available Exercises</h3>
    <ExerciseList/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import GymProgramService from '../util/GymProgramService';
import { Exercise } from '../models/Exercise';
import { WEEK } from '../util/constants';
import { Workout } from '../models/GymProgram';
import ExerciseList from '@/components/ExerciseList.vue';
import { GymProgram } from '@/models/GymProgram';
import GymProgramCreateWeek from '@/components/ProgramCreateWeek.vue';
@Component({
  components: {
    ExerciseList,
    GymProgramCreateWeek
  }
})
export default class GymProgramCreate extends Vue {
  private programType: string = 'week';
  private newProgram: GymProgram = new GymProgram();
  // get exercise

  created() {
    this.newProgram == new GymProgram();
    if (this.programType === 'week') {
      this.newProgram.workouts = WEEK.map(d => {
        const w = new Workout();
        w.dayOfWeek = d;
        return w;
      });
    }
  }

  @Watch('programType')
  onTypeChange(val: string, old: string) {
    if (val === 'week' && this.newProgram.workouts.length > 7) {
      console.error('cant change like this');
    } else if ((val = 'week')) {
      for (let index = 0; index < this.newProgram.workouts.length; index++) {
        this.newProgram.workouts;
      }
    }

    this.newProgram!.type = val;
  }
}
</script>

<style scoped>
h4 {
  margin-bottom: 0.25em;
}

.empty-day {
  min-height: 4em;
  background-color: #cffced;
}
</style>
