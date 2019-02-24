<template>
  <div>
    <h4 class="mb-3">
      Exercises Options
    </h4>
    <button @click="showExercises = !showExercises">
      <span v-show="!showExercises">Show</span>
      <span v-show="showExercises">Hide</span>
    </button>
    <div v-for="(item, index) in availableExercises"
         v-show="showExercises"
         :key="index"
         class="m-2 p-2">
      <div class="flex">
        <label class="flex-1 ml-1">Name:</label>
        <input class="flex-1 border rounded py-2 px-4 leading-tight"
               :value="item.name">
      </div>
      <div class="flex mt-1">
        <label class="flex-1 ml-1">Main Muscle:</label>
        <input class="flex-1 border rounded py-2 px-4 leading-tight"
               :value="item.mainMuscle">
      </div>
      <div class="flex mt-1">
        <label class="flex-1 ml-1">Equipment:</label>
        <select class="flex-1 border rounded py-2 px-4 leading-tight"
                :value="item.equipment">
          <option v-if="!item.equipment"
                  :value="''"
                  disabled>
            No equipment set
          </option>
          <option v-for="(eq, i) in equipment"
                  :key="i"
                  :value="eq.value">
            {{ item.name }}
          </option>
        </select>
      </div>
      <form v-show="availableExercises" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import exercisesMixin from '../get-exercises-mixin';
import equipmentMixin from '../get-equipment-mixin';

export default {
  mixins: [exercisesMixin, equipmentMixin],
  data() {
    return {
      editSuccess: '',
      saveSuccess: null,
      showExercises: false,
    };
  },
  methods: {
    ...mapActions('exercise', ['create']),
    ...mapActions('exercise', ['edit']),
    ...mapActions('exercise', ['delete']),
    newFormCheck(e) {
      if (this.newExercise && this.isValid(this.newExercise)) {
        this.saveSuccess = null;
        this.create({ name: this.newExercise }).then((result) => {
          if (result) {
            this.saveSuccess = true;
          }
        });
      }
      e.preventDefault();
      this.newExercise = '';
    },
    editFormCheck(e) {
      if (e.name && this.isNotDuplicate(e.name)) {
        this.editSuccess = '';
        this.edit(e).then((result) => {
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
    },
  },
};
</script>

<style>
</style>
