export default {
  created() {
    this.$store.dispatch('exercises/getAll');
  },
  computed: {
    availableExercises() {
      return this.$store.state.exercises.exercises || [];
    },
  },
};
