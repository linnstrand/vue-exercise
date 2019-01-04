<template>
  <div class="workout">
    <div>
      <button @click="saveWorkout(workout)">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    workout: { type: Object, required: true },
  },
  methods: {
    saveWorkout(workout) {
      this.$store.dispatch('gym/saveWorkout', Object.assign({}, workout))
        .then(console.log('Saved Successfully'));
    },
  },
};
</script>

<style>
</style>
