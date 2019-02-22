export default {
  created() {
    this.$store.dispatch('equipment/getAll');
  },
  computed: {
    equipment() {
      return this.$store.state.equipment.equipment || [];
    },
  },
};
