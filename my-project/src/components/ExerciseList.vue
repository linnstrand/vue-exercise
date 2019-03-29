<template>
  <div class="exercises">
    <div v-if="exercises.length > 0">
      <div class="flex flex-wrap display-choices">
        <div class="self-center">Display by:</div>
        <button :class="{groupedOn: groupedOn==='name'}" @click="sortName()">Name</button>
        <button :class="{groupedOn: groupedOn==='equipment'}" @click="sortByEquipment()">Equipment</button>
        <button :class="{groupedOn: groupedOn==='muscle'}" @click="sortByMuscle()">Main Muscle</button>
      </div>
      <div v-show="groupedOn==='name'" class="flex flex-wrap">
        <div
          v-for="(exercise, index) in exercises"
          :key="index"
          class="exercise my-3 mx-1 p-2 border border-grey shadow hover:bg-blue-lightest"
        >{{ exercise.name }}</div>
      </div>
      <div v-show="groupedOn==='equipment' || groupedOn === 'muscle'" class="flex flex-wrap">
        <ExerciseListGroup
          v-for="(group, index) in groups"
          :key="index"
          :grouped-on="groupedOn"
          :group="group"
        />
      </div>
    </div>
    <div v-if="exercises.length===0">No exercuses available</div>
  </div>
</template>

<script>
import ExerciseListGroup from './ExerciseListGroup.vue';

export default {
  components: {
    ExerciseListGroup
  },
  data() {
    return {
      groupedOn: 'name'
    };
  },
  computed: {
    groups() {
      return this.$store.state.exercises.groups || [];
    },
    exercises() {
      return this.$store.state.exercises.all || [];
    }
  },
  created() {
    this.$store.dispatch('exercises/getAll');
  },

  methods: {
    sortName() {
      this.$store.commit('exercises/sortByName');
      this.groupedOn = 'name';
    },
    sortByEquipment() {
      this.$store.commit('exercises/sortByEquipment');
      this.groupedOn = 'equipment';
    },
    sortByMuscle() {
      this.$store.commit('exercises/sortByMuscle');
      this.groupedOn = 'muscle';
    }
  }
};
</script>
<style>
.display-choices > button {
  margin: 0.5rem 0.25rem;
}
.display-choices > button.groupedOn {
  color: white;
  background-color: #3490dc;
}
.exercises {
  max-width: 750px;
}
.exercise {
  min-width: 175px;
}
.exercise.shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}
.exercise-label {
  margin: 0.25rem 0.1rem;
}
</style>
