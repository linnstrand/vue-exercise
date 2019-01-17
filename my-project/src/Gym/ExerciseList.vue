<template>
  <div class="exercises">
    <div v-if="exercises.length > 0">
      <div class="flex flex-wrap display-choices">
        <div class="self-center">Display by:</div>
        <button :class="{isActive: isActive==='name'}" @click="sortName()">Name</button>
        <button :class="{isActive: isActive==='equipment'}" @click="sortByEquipment()">Equipment</button>
        <button :class="{isActive: isActive==='muscle'}" @click="sortByMuscle()">Main Muscle</button>
      </div>
      <div v-if="isActive==='name'" class="flex flex-wrap">
        <div
          class="exercise my-3 mx-1 p-2 border border-grey shadow hover:bg-blue-lightest"
          v-for="(exercise, index) in exercises"
          :key="index"
        >{{exercise.name}}</div>
      </div>
      <div class="flex flex-wrap" v-if="isActive==='equipment' || this.isActive === 'muscle'">
        <div
          class="flex-grow w-48 my-3 mx-1 p-1 border border-grey shadow"
          v-for="(group, index) in exercises"
          :key="index"
        >
          <h4 class="font-normal capitalize py-1">{{group.name}}</h4>
          <ul class="text-xs list-reset">
            <li
              class="exercise-label bg-grey-lighter border p-1 inline-block hover:bg-blue-lightest"
              v-for="(exercise, index) in group.exercises"
              :key="index"
            >{{exercise.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="exercises.length===0">No exercuses available</div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  name: 'exercises',
  data() {
    return {
      isActive: 'name',
    };
  },
  created() {
    this.$store.dispatch('exercises/getAll');
  },
  computed: {
    exercises() {
      if (this.isActive === 'equipment' || this.isActive === 'muscle') {
        return this.$store.state.exercises.groups || [];
      }
      return this.$store.state.exercises.exercises || [];
    },
  },
  methods: {
    sortName() {
      this.$store.commit('exercises/sortByName');
      this.isActive = 'name';
    },
    sortByEquipment() {
      this.$store.commit('exercises/sortByEquipment');
      this.isActive = 'equipment';
    },
    sortByMuscle() {
      this.$store.commit('exercises/sortByMuscle');
      this.isActive = 'muscle';
    },
  },
};
</script>
<style>
.display-choices > button {
  margin: 0.5rem 0.25rem;
}
.display-choices > button.isActive {
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
