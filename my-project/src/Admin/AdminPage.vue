<template>
  <div class="admin">
    <div class="content">
      <h4>Add Equipment options</h4>
      <!-- <form id="newEquipmentForm" @submit="newFormCheck">
        <div class="md:w-1/3">
          <label for="new-equipment">New Equipment</label>
        </div>
        <div class>
          <input
            class="border-2 border-grey-lighter roundedpy-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
            id="new-equipment"
            type="text"
            v-model="newEquipment">
        </div>
      </form>-->
      <div v-if="equipment.length > 0">
        <h4>Edit Equipment options</h4>
        <!-- <form
          id="editEquipmentForm"
        @submit="editFormCheck(item)"-->
        <div v-for="(item, index) in equipment" :key="index">
          <div class="md:w-1/3">
            <label for="new-equipment">{{item.name}}</label>
            <input
              class="border-2 border-grey-lighter roundedpy-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
              id="new-equipment"
              type="text"
              v-model="item.name"
            >
          </div>
          <button type="button" @click="editFormCheck(item)">edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
    ...mapActions('exercises', ['saveEquipment']),
    ...mapActions('exercises', ['editEquipment']),
    newFormCheck(e) {
      if (this.newEquipment && this.isUnique(this.newEquipment)) {
        this.saveEquipment({ name: this.newEquipment });
      }
      e.preventDefault();
    },
    editFormCheck(e) {
      if (e.name && this.isNotDuplicate(e.name)) {
        this.editEquipment(e).then((result) => {
          debugger;
        });
      }
    },
    isUnique(equipment) {
      return !this.equipment.some(e => e.name === equipment);
    },
    isNotDuplicate(equipment) {
      return !this.equipment.find(e => e.name === equipment).length < 2;
    },
  },
};
</script>
