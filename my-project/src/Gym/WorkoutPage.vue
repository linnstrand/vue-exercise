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
      <button @click="saveWorkout(workout)">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String | Number,
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }
  },
  created() {
    this.$store.commit("gym/setWorkout", +this.id);
  },
  methods: {
    saveWorkout(workout) {
      this.$store
        .dispatch("gym/saveWorkout", Object.assign({}, workout))
        .then(console.log("Saved Successfully"));
    }
  },
  computed: {
    workout() {
      return this.$store.getters["gym/getWorkout"][0];
    }
  }
};
</script>

<style>
input {
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
