<template>
  <div>
    <h4 class="mb-3">Exercises Options</h4>
    <button @click="showExercises = !showExercises">
      <span v-show="!showExercises">Show</span>
      <span v-show="showExercises">Hide</span>
    </button>
    <div v-show="showExercises" class="mb-2" v-for="(item, index) in availableExercises" :key="index">
      <button>{{item.name}}</button>
      <form v-show="availableExercises"></form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import exercisesMixin from "../get-exercises-mixin";

export default {
  mixins: [exercisesMixin],
  data() {
    return {
      editSuccess: "",
      saveSuccess: null,
      showExercises: false
    };
  },
  methods: {
    ...mapActions("exercise", ["create"]),
    ...mapActions("exercise", ["edit"]),
    ...mapActions("exercise", ["delete"]),
    newFormCheck(e) {
      if (this.newExercise && this.isValid(this.newExercise)) {
        this.saveSuccess = null;
        this.create({ name: this.newExercise }).then(result => {
          if (result) {
            this.saveSuccess = true;
          }
        });
      }
      e.preventDefault();
      this.newExercise = "";
    },
    editFormCheck(e) {
      if (e.name && this.isNotDuplicate(e.name)) {
        this.editSuccess = "";
        this.edit(e).then(result => {
          if (result) {
            this.editSuccess = e.name;
          }
        });
      }
    },
    deleteItem(exercise) {
      this.delete(exercise._id);
    },
    isValid(exercise) {
      //   return !this.exercise.some(e => e.name === exercise);
    },
    isNotDuplicate(exercise) {
      //   return !this.exercise.find(e => e.name === exercise).length < 2;
    }
  }
};
</script>

<style>
</style>
