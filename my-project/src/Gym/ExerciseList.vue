<template>
  <div class="exercises">
    <div v-if="exercises.length > 0">
      <div class="flex flex-wrap display-choices">
        <div class="self-center">Display by:</div>
        <button :class="{isActive: isActive==='name'}"
                @click="sortName()">Name</button>
        <button :class="{isActive: isActive==='equipment'}"
                @click="sortEquipment()">Equipment</button>
        <button :class="{isActive: isActive==='muscle'}"
                @click="sortMuscle()">Main Muscle</button>
      </div>
      <div v-if="isActive==='name'"
           class="flex flex-wrap">
        <div class="exercise my-3 mx-1 p-2 border border-grey hover:bg-blue-lightest"
             v-for="(exercise, index) in exercises"
             :key="index">
          {{exercise.name}}
        </div>
      </div>
      <div v-if="isActive==='equipment' || this.isActive === 'muscle'"
           class="flex flex-wrap">
        <div class="group m-2 p-2"
             v-for="(group, index) in exercises"
             :key="index">
          <h4>
            {{group.name}}
          </h4>
          <ul>
            <li v-for="(exercise, index) in group.exercises"
                :key="index">{{exercise.name}}</li>
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
  name: 'gym',
  data() {
    return {
      isActive: 'name',
    };
  },
  created() {
    this.$store.dispatch('gym/getExercises');
  },
  computed: {
    exercises() {
      if (this.isActive === 'equipment' || this.isActive === 'muscle') {
        return this.$store.state.gym.groups || [];
      }
      return this.$store.state.gym.exercises || [];
    },
  },
  methods: {
    sortName() {
      this.$store.commit('gym/sortExerciseName');
      this.isActive = 'name';
    },
    sortEquipment() {
      this.$store.commit('gym/sortEquipment');
      this.isActive = 'equipment';
    },
    sortMuscle() {
      this.$store.commit('gym/sortMuscle');
      this.isActive = 'muscle';
    },
  },
};
</script>
<style>
.display-choices > button {
  padding: 0.375rem 0.75rem;
  margin: 0.5rem 0.25rem;
  color: #3490dc;
  border: 1px solid #3490dc;
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
.group {
  min-width: 250px;
}
</style>
