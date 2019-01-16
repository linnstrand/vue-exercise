<template>
  <div class="admin">
    <div class="content">
      <h2>Edit Equipment options</h2>
      <form id="equipmentForm" @submit="checkForm">
        <div class="md:w-1/3">
          <label for="new-equipment">New Equipment</label>
        </div>
        <div class>
          <input
            class="border-2 border-grey-lighter roundedpy-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
            id="new-equipment"
            type="text"
            v-model="newEquipment"
          >
        </div>
      </form>
    </div>
    {{newEquipment}}
  </div>
</template>

<script>

export default {
  name: 'admin',
  data() {
    return {
      newEquipment: null,
    };
  },
  created() {
    this.$store.dispatch('exercises/getEquipment');
  },
  computed: {
    equipment() {
      return this.$store.state.exercises.equipment || [];
    },
  },

  methods: {
    checkForm(e) {
      if (this.newEquipment && this.isUnique(this.newEquipment)) {
        return true;
      }
      e.preventDefault();
      return false;
    },
    isUnique(equipment) {
      return !this.equipment.some(e => e.name === equipment);
    },
  },
};
</script>
