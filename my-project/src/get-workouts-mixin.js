export default {
  created() {
    this.$store.dispatch('gym/getWorkouts');
  },
  computed: {
    availableWorkouts() {
      return this.$store.state.gym.workouts || [];
    },
  },
};
