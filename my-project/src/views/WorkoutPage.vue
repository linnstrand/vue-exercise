<template>
  <div class="workout">
    <div v-if="workout">
      <h2>{{workout.name}}</h2>
      <div>
        <table class="table-auto">
          <tr v-for="(exercise, index) in workout.exercises" :key="index">
            <td class="pr-5">
              <h3>{{exercise.name}}</h3>
              <div>{{exercise.mainMuscle}}, {{exercise.equipment}}</div>
            </td>
            <td class="pr-2">
              <label for="weight">Weight</label>
              <input type="number" name="weight" id="weight">
            </td>
            <td class="pr-2">
              <input type="number" name="sets" id="sets"> /
              <input type="number" name="reps" id="reps">
            </td>
          </tr>
        </table>
      </div>
      <button @click="save()">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: [String || Number],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  created() {
    this.getWorkout(+this.id);
  },
  methods: {
    ...mapActions('gym', ['saveWorkout']),
    ...mapActions('gym', ['getWorkout']),
    save() {
      this.saveWorkout(Object.assign({}, this.workout))
        .then(console.log('Saved Successfully'));
    },
  },
  computed: {
    workout() {
      return this.$store.state.gym.workout;
    },
  },
};
</script>

<style >
input[type='number'] {
  display: inline-block;
  width: 5rem;
  padding: 0.375rem 0.75rem;
  margin: 0.5rem 0.25rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
